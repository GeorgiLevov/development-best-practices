#!/usr/bin/env node
/**
 * Copy the approved Cursor skills for a target repo into <target>/.cursor/skills/.
 *
 * Usage:
 *   node bootstrap-cursor-skills.mjs --target <repo-root> [--catalog <path-or-url>] [--dry-run] [--json]
 *
 * Practices followed:
 * - practices/manage-node-lts-with-nvm-and-automate-tasks-with-npm-scripts.md
 *   (Node 18+, npm test, no extra dependencies)
 * - practices/prefer-const-and-let-over-function-scoped-var.md
 * - practices/prefer-async-await-and-try-catch-over-nested-callbacks.md
 * - practices/check-fetch-response-ok-respect-http-semantics-and-abort-races.md
 * - practices/destructure-objects-arrays-and-option-bag-parameters.md
 * - practices/prefer-explicit-truthiness-and-nullish-coalescing.md
 * - practices/prefer-simple-readable-code-over-clever-tricks.md
 * - practices/interpolate-strings-with-template-literals.md
 * - practices/choose-declarative-array-methods-by-intent-over-for-micro-opts.md
 */

import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cp, lstat, mkdir, mkdtemp, readFile, readdir, realpath, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);

const USAGE = 'usage: node bootstrap-cursor-skills.mjs --target <repo-root> [--catalog <path-or-url>] [--dry-run] [--json]';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

const DETECTION_RULES = new Set(['manifest_version', 'dependency', 'root_html', 'package_json']);

function parseArgs(argv) {
  const args = {
    target: null,
    catalog: null,
    dryRun: false,
    json: false,
    help: false,
    error: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }

    const separated = token.match(/^(--target|--catalog)=(.*)$/);
    if (separated) {
      const [, flag, value] = separated;
      if (value === '') {
        args.error = `Missing value for ${flag}`;
        return args;
      }
      if (flag === '--target') args.target = value;
      else args.catalog = value;
      continue;
    }

    if (token === '--target' || token === '--catalog') {
      const value = argv[index + 1];
      if (!value || value.startsWith('--')) {
        args.error = `Missing value for ${token}`;
        return args;
      }
      index += 1;
      if (token === '--target') args.target = value;
      else args.catalog = value;
      continue;
    }

    args.error = `Unknown argument: ${token}`;
    return args;
  }

  if (!args.help && !args.target) {
    args.error = 'Missing required --target <repo-root>';
  }
  return args;
}

function fail(args, message) {
  if (args.json) {
    process.stdout.write(`${JSON.stringify({ ok: false, error: message }, null, 2)}\n`);
  } else {
    process.stderr.write(`error: ${message}\n${USAGE}\n`);
  }
  process.exitCode = 1;
}

function emit(args, outcome) {
  if (args.json) {
    process.stdout.write(`${JSON.stringify(outcome, null, 2)}\n`);
  } else {
    process.stdout.write(`${formatTable(outcome)}\n`);
  }
  if (!outcome.ok && outcome.error) {
    process.stderr.write(`error: ${outcome.error}\n`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stdout.write(`${USAGE}\n`);
    return;
  }
  if (args.error) {
    fail(args, args.error);
    return;
  }

  const tempDirs = [];
  try {
    const outcome = await provision(args, tempDirs);
    emit(args, outcome);
    process.exitCode = outcome.ok ? 0 : 1;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (args.json) {
      process.stdout.write(`${JSON.stringify({ ok: false, error: message }, null, 2)}\n`);
    }
    process.stderr.write(`error: ${message}\n`);
    process.exitCode = 1;
  } finally {
    await Promise.all(tempDirs.map((dir) => rm(dir, { recursive: true, force: true })));
  }
}

async function provision({ target, catalog, dryRun }, tempDirs) {
  const targetRoot = await resolveTarget(target);
  const skillsDir = await resolveSkillsDir(catalog, tempDirs);
  const catalogData = await loadCatalog(skillsDir);
  const detected = await detectProfile(targetRoot, catalogData.profiles);
  const selected = skillsForProfile(catalogData.profiles, detected.profile);
  const skillsRoot = await assertSkillsRoot(targetRoot);
  const plan = await planSkills({
    skillsRoot,
    selected,
    skillsBySlug: catalogData.skillsBySlug,
  });

  const drifted = plan.results.filter((row) => row.status === 'drift');
  const error = drifted.length > 0 ? driftMessage(drifted) : null;
  const requires = requiresFor(selected, catalogData.skillsBySlug);

  if (dryRun || error) {
    return {
      ok: !error,
      dryRun,
      target: targetRoot,
      profile: detected.profile,
      detectedBy: detected.detectedBy,
      results: plan.results,
      preserved: plan.preserved,
      requires,
      provenance: null,
      error,
    };
  }

  await mkdir(skillsRoot, { recursive: true });
  for (const row of plan.results) {
    if (row.status !== 'installed') continue;
    const sourceDir = path.join(skillsDir, 'vendor', row.slug);
    const destDir = path.join(skillsRoot, row.slug);
    assertDirectChild(skillsRoot, destDir);
    await cp(sourceDir, destDir, { recursive: true });
    const copiedHash = await hashFile(path.join(destDir, 'SKILL.md'));
    if (copiedHash !== row.expectedSha256) {
      throw new Error(`Copied SKILL.md for ${row.slug} does not match the approved sha256`);
    }
    const parsed = parseSkillFile(await readFile(path.join(destDir, 'SKILL.md'), 'utf8'), destDir);
    if (parsed.name !== row.name) {
      throw new Error(`Installed skill ${row.slug} frontmatter name is ${parsed.name}, expected ${row.name}`);
    }
    row.sha256 = copiedHash;
  }

  const provenancePath = path.join(skillsRoot, 'PROVENANCE.json');
  assertDirectChild(skillsRoot, provenancePath);
  await assertNotSymlink(provenancePath);
  const previous = await readPreviousProvenance(provenancePath);
  const installedAtFallback = new Date().toISOString();
  const skills = plan.results.map((row) => {
    const skill = catalogData.skillsBySlug.get(row.slug);
    const earlier = previous.get(skill.name);
    const installedAt = earlier && earlier.sha === skill.pinned_sha && earlier.installed_at
      ? earlier.installed_at
      : installedAtFallback;
    return {
      name: skill.name,
      slug: skill.slug,
      source: sourceUrl(skill),
      sha: skill.pinned_sha,
      license: skill.license,
      installed_at: installedAt,
    };
  });

  const document = {
    profile: detected.profile,
    skills,
  };
  await writeFile(provenancePath, `${JSON.stringify(document, null, 2)}\n`);

  return {
    ok: true,
    dryRun: false,
    target: targetRoot,
    profile: detected.profile,
    detectedBy: detected.detectedBy,
    results: plan.results,
    preserved: plan.preserved,
    requires,
    provenance: provenancePath,
    error: null,
  };
}

async function resolveTarget(target) {
  const resolved = path.resolve(target);
  let info;
  try {
    info = await lstat(resolved);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`Target does not exist: ${resolved}`);
    }
    throw new Error(`Could not read target ${resolved}. ${err.message}`);
  }
  if (info.isSymbolicLink()) {
    const real = await realpath(resolved);
    const realInfo = await lstat(real);
    if (!realInfo.isDirectory()) {
      throw new Error(`Target is not a directory: ${resolved}`);
    }
    return real;
  }
  if (!info.isDirectory()) {
    throw new Error(`Target is not a directory: ${resolved}`);
  }
  return realpath(resolved);
}

async function resolveSkillsDir(catalog, tempDirs) {
  if (!catalog) {
    return findSkillsDir(path.resolve(SCRIPT_DIR, '..'));
  }
  if (/^https?:\/\//i.test(catalog)) {
    return downloadCatalog(catalog, tempDirs);
  }
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(catalog)) {
    throw new Error(`Catalog URL must be http or https: ${catalog}`);
  }
  return findSkillsDir(path.resolve(catalog));
}

async function downloadCatalog(url, tempDirs) {
  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new Error(`Catalog download failed for ${url}. ${err.message}`);
  }
  if (!response.ok) {
    throw new Error(`Catalog download failed: HTTP ${response.status} for ${url}`);
  }

  const dir = await mkdtemp(path.join(tmpdir(), 'cursor-skills-catalog-'));
  tempDirs.push(dir);
  const archivePath = path.join(dir, 'catalog.tar.gz');
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(archivePath, bytes);
  const extractDir = path.join(dir, 'extract');
  await mkdir(extractDir);
  try {
    await execFileAsync('tar', ['-xzf', archivePath, '-C', extractDir]);
  } catch (err) {
    throw new Error(`Could not extract catalog archive from ${url}. ${err.message}`);
  }
  return findSkillsDir(extractDir);
}

async function findSkillsDir(start) {
  if (await isSkillsDir(start)) return start;
  const nestedSkills = path.join(start, 'skills');
  if (await isSkillsDir(nestedSkills)) return nestedSkills;

  let entries;
  try {
    entries = await readdir(start, { withFileTypes: true });
  } catch (err) {
    throw new Error(`Catalog path is not a directory: ${start}. ${err.message}`);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const child = path.join(start, entry.name);
    if (await isSkillsDir(child)) return child;
    const childSkills = path.join(child, 'skills');
    if (await isSkillsDir(childSkills)) return childSkills;
  }

  throw new Error(
    `Could not find the skill catalog in ${start}. Expected skills/approved-skills.json and skills/vendor/.`,
  );
}

async function isSkillsDir(dir) {
  return await exists(path.join(dir, 'approved-skills.json'))
    && await exists(path.join(dir, 'project-profiles.json'))
    && await exists(path.join(dir, 'vendor'));
}

async function loadCatalog(skillsDir) {
  const skillsDoc = await readJson(path.join(skillsDir, 'approved-skills.json'), 'approved-skills.json');
  const profiles = await readJson(path.join(skillsDir, 'project-profiles.json'), 'project-profiles.json');
  const skills = validateSkills(skillsDoc);
  validateProfiles(profiles, skills);
  const skillsBySlug = new Map(skills.map((skill) => [skill.slug, skill]));

  for (const skill of skills) {
    const skillDir = path.join(skillsDir, 'vendor', skill.slug);
    const skillMd = path.join(skillDir, 'SKILL.md');
    await assertRegularFile(skillMd, `Vendored SKILL.md for ${skill.slug}`);
    const hash = await hashFile(skillMd);
    if (hash !== skill.skill_md_sha256) {
      throw new Error(
        `Vendored SKILL.md sha256 for ${skill.slug} does not match approved-skills.json (${hash})`,
      );
    }
    const parsed = parseSkillFile(await readFile(skillMd, 'utf8'), skillMd);
    if (parsed.name !== skill.name) {
      throw new Error(`Vendored skill ${skill.slug} frontmatter name is ${parsed.name}, expected ${skill.name}`);
    }
  }

  return { skills, skillsBySlug, profiles };
}

function validateSkills(doc) {
  if (!doc || typeof doc !== 'object' || !Array.isArray(doc.skills)) {
    throw new Error('approved-skills.json must be an object with a skills array');
  }
  const slugs = new Set();
  return doc.skills.map((skill) => {
    for (const key of ['name', 'slug', 'source_repo', 'path', 'pinned_sha', 'license', 'skill_md_sha256']) {
      if (typeof skill[key] !== 'string' || skill[key] === '') {
        throw new Error(`approved-skills.json skill is missing ${key}`);
      }
    }
    if (!/^[a-z0-9][a-z0-9-]*$/.test(skill.slug)) {
      throw new Error(`Unsafe skill slug: ${skill.slug}`);
    }
    if (slugs.has(skill.slug)) {
      throw new Error(`Duplicate skill slug: ${skill.slug}`);
    }
    slugs.add(skill.slug);
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(skill.source_repo)) {
      throw new Error(`Skill ${skill.slug} source_repo must look like owner/name`);
    }
    if (skill.path.startsWith('/') || skill.path.split('/').includes('..')) {
      throw new Error(`Skill ${skill.slug} path is not a relative repository path`);
    }
    if (!/^[0-9a-f]{40}$/.test(skill.pinned_sha)) {
      throw new Error(`Skill ${skill.slug} pinned_sha must be a 40-character git sha`);
    }
    if (!/^[0-9a-f]{64}$/.test(skill.skill_md_sha256)) {
      throw new Error(`Skill ${skill.slug} skill_md_sha256 must be a sha256 hex string`);
    }
    if (!Array.isArray(skill.applies_to) || skill.applies_to.some((tag) => typeof tag !== 'string')) {
      throw new Error(`Skill ${skill.slug} applies_to must be an array of strings`);
    }
    if (!Array.isArray(skill.requires) || skill.requires.some((item) => typeof item !== 'string')) {
      throw new Error(`Skill ${skill.slug} requires must be an array of strings`);
    }
    return skill;
  });
}

function validateProfiles(profiles, skills) {
  if (!profiles || typeof profiles !== 'object' || Array.isArray(profiles)) {
    throw new Error('project-profiles.json must be an object');
  }
  if (!Array.isArray(profiles.always) || !Array.isArray(profiles.detection) || !profiles.profiles) {
    throw new Error('project-profiles.json must contain always, detection, and profiles');
  }
  const bySlug = new Map(skills.map((skill) => [skill.slug, skill]));
  const profileNames = Object.keys(profiles.profiles);

  for (const slug of profiles.always) {
    if (typeof slug !== 'string' || !bySlug.has(slug)) {
      throw new Error(`project-profiles.json always lists unknown skill ${slug}`);
    }
  }
  for (const name of profileNames) {
    const listed = profiles.profiles[name];
    if (!Array.isArray(listed)) {
      throw new Error(`Profile ${name} must be an array of skill slugs`);
    }
    for (const slug of listed) {
      if (typeof slug !== 'string' || !bySlug.has(slug)) {
        throw new Error(`Profile ${name} lists unknown skill ${slug}`);
      }
    }
  }
  for (const rule of profiles.detection) {
    if (!rule || typeof rule.profile !== 'string' || !Object.hasOwn(profiles.profiles, rule.profile)) {
      throw new Error('Detection rule refers to an unknown profile');
    }
    if (!DETECTION_RULES.has(rule.when)) {
      throw new Error(`Unknown detection rule: ${rule.when}`);
    }
    if (rule.when === 'dependency' && (typeof rule.name !== 'string' || rule.name === '')) {
      throw new Error('Dependency detection rule is missing name');
    }
  }

  for (const slug of profiles.always) {
    const skill = bySlug.get(slug);
    for (const name of profileNames) {
      if (!skill.applies_to.includes(name)) {
        throw new Error(`${slug} is always installed but applies_to is missing ${name}`);
      }
    }
  }
  for (const name of profileNames) {
    for (const slug of profiles.profiles[name]) {
      if (!bySlug.get(slug).applies_to.includes(name)) {
        throw new Error(`${slug} is listed for ${name} but applies_to does not include it`);
      }
    }
  }
  for (const skill of skills) {
    for (const name of skill.applies_to) {
      if (!Object.hasOwn(profiles.profiles, name)) {
        throw new Error(`${skill.slug} applies_to unknown profile ${name}`);
      }
      const listed = new Set([...profiles.always, ...profiles.profiles[name]]);
      if (!listed.has(skill.slug)) {
        throw new Error(`${skill.slug} applies_to ${name} but that profile does not list it`);
      }
    }
  }
}

async function detectProfile(targetRoot, profiles) {
  const manifest = await readManifestSignal(targetRoot);
  const packageJson = await readPackageJson(targetRoot);
  const dependencyNames = packageJson ? collectDependencyNames(packageJson) : new Set();
  const hasRootHtml = await rootHasHtml(targetRoot);

  for (const rule of profiles.detection) {
    if (rule.when === 'manifest_version' && manifest) {
      return { profile: rule.profile, detectedBy: 'manifest_version' };
    }
    if (rule.when === 'dependency' && dependencyNames.has(rule.name)) {
      return { profile: rule.profile, detectedBy: `dependency:${rule.name}` };
    }
    if (rule.when === 'root_html' && hasRootHtml) {
      return { profile: rule.profile, detectedBy: 'root_html' };
    }
    if (rule.when === 'package_json' && packageJson) {
      return { profile: rule.profile, detectedBy: 'package_json' };
    }
  }

  throw new Error(
    'Could not detect a project stack. Expected a package.json, a root manifest.json with manifest_version, or a root HTML file.',
  );
}

async function readManifestSignal(targetRoot) {
  const manifestPath = path.join(targetRoot, 'manifest.json');
  if (!await exists(manifestPath)) return false;
  const manifest = await readJson(manifestPath, 'manifest.json');
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    throw new Error(`manifest.json must be an object: ${manifestPath}`);
  }
  return manifest.manifest_version !== undefined && manifest.manifest_version !== null;
}

async function readPackageJson(targetRoot) {
  const packagePath = path.join(targetRoot, 'package.json');
  if (!await exists(packagePath)) return null;
  const pkg = await readJson(packagePath, 'package.json');
  if (!pkg || typeof pkg !== 'object' || Array.isArray(pkg)) {
    throw new Error(`package.json must be an object: ${packagePath}`);
  }
  return pkg;
}

function collectDependencyNames(pkg) {
  const names = new Set();
  for (const field of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    const block = pkg[field];
    if (!block || typeof block !== 'object' || Array.isArray(block)) continue;
    for (const name of Object.keys(block)) names.add(name);
  }
  return names;
}

async function rootHasHtml(targetRoot) {
  const entries = await readdir(targetRoot, { withFileTypes: true });
  return entries.some((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.html'));
}

function skillsForProfile(profiles, profile) {
  if (!Object.hasOwn(profiles.profiles, profile)) {
    throw new Error(`Unknown profile: ${profile}`);
  }
  const selected = [];
  for (const slug of [...profiles.always, ...profiles.profiles[profile]]) {
    if (!selected.includes(slug)) selected.push(slug);
  }
  return selected;
}

async function assertSkillsRoot(targetRoot) {
  const cursorDir = path.join(targetRoot, '.cursor');
  const skillsRoot = path.join(cursorDir, 'skills');
  await assertNotSymlink(cursorDir);
  await assertNotSymlink(skillsRoot);
  if (await exists(skillsRoot)) {
    const realSkills = await realpath(skillsRoot);
    const relative = path.relative(targetRoot, realSkills);
    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      throw new Error(`Refusing to write outside the target repo: ${skillsRoot}`);
    }
  }
  return skillsRoot;
}

async function planSkills({ skillsRoot, selected, skillsBySlug }) {
  const required = new Set(selected);
  const existingNames = await listSkillDirNames(skillsRoot);
  for (const name of existingNames) {
    const skillPath = path.join(skillsRoot, name);
    await assertNotSymlink(skillPath);
    const info = await lstat(skillPath);
    if (!info.isDirectory()) {
      throw new Error(`Skill path is not a directory: ${skillPath}`);
    }
  }

  const preserved = existingNames.filter((name) => !required.has(name)).sort();
  for (const name of preserved) {
    const skillMd = path.join(skillsRoot, name, 'SKILL.md');
    if (!await exists(skillMd)) continue;
    parseSkillFile(await readFile(skillMd, 'utf8'), skillMd);
  }

  const results = [];
  for (const slug of selected) {
    const skill = skillsBySlug.get(slug);
    const dest = path.join(skillsRoot, slug);
    assertDirectChild(skillsRoot, dest);
    const skillMd = path.join(dest, 'SKILL.md');
    let status = 'installed';
    let sha256 = null;
    if (existingNames.includes(slug)) {
      if (await exists(skillMd)) {
        await assertRegularFile(skillMd, `SKILL.md for ${slug}`);
        sha256 = await hashFile(skillMd);
      }
      status = sha256 === skill.skill_md_sha256 ? 'present' : 'drift';
    }
    if (status === 'present') {
      const parsed = parseSkillFile(await readFile(skillMd, 'utf8'), skillMd);
      if (parsed.name !== skill.name) {
        throw new Error(`Skill ${slug} frontmatter name is ${parsed.name}, expected ${skill.name}`);
      }
    }
    results.push({
      slug,
      name: skill.name,
      status,
      sha256,
      expectedSha256: skill.skill_md_sha256,
    });
  }

  return { results, preserved };
}

async function listSkillDirNames(skillsRoot) {
  if (!await exists(skillsRoot)) return [];
  const entries = await readdir(skillsRoot, { withFileTypes: true });
  const names = [];
  for (const entry of entries) {
    if (entry.name === 'PROVENANCE.json') continue;
    if (entry.isDirectory() || entry.isSymbolicLink()) names.push(entry.name);
  }
  return names;
}

function requiresFor(selected, skillsBySlug) {
  const requires = [];
  for (const slug of selected) {
    for (const item of skillsBySlug.get(slug).requires) {
      if (!requires.includes(item)) requires.push(item);
    }
  }
  return requires;
}

function driftMessage(drifted) {
  const names = drifted.map((row) => row.slug).join(', ');
  return `Pinned skill drift (${names}): SKILL.md does not match the approved sha256. Left the existing files unchanged.`;
}

async function readPreviousProvenance(provenancePath) {
  if (!await exists(provenancePath)) return new Map();
  await assertRegularFile(provenancePath, 'PROVENANCE.json');
  const doc = await readJson(provenancePath, 'PROVENANCE.json');
  if (!doc || typeof doc !== 'object' || !Array.isArray(doc.skills)) {
    throw new Error(`PROVENANCE.json must be an object with a skills array: ${provenancePath}`);
  }
  const previous = new Map();
  for (const entry of doc.skills) {
    if (entry && typeof entry.name === 'string') previous.set(entry.name, entry);
  }
  return previous;
}

function sourceUrl(skill) {
  return `https://github.com/${skill.source_repo}/tree/${skill.pinned_sha}/${skill.path}`;
}

function formatTable(outcome) {
  const slugWidth = Math.max('skill'.length, ...outcome.results.map((row) => row.slug.length));
  const statusWidth = Math.max('status'.length, ...outcome.results.map((row) => row.status.length));
  const lines = [
    outcome.dryRun ? 'mode: dry-run' : 'mode: write',
    `profile: ${outcome.profile}`,
    `target: ${outcome.target}`,
    `detected by: ${outcome.detectedBy}`,
    '',
    `${'skill'.padEnd(slugWidth)}  ${'status'.padEnd(statusWidth)}`,
    `${'-'.repeat(slugWidth)}  ${'-'.repeat(statusWidth)}`,
    ...outcome.results.map((row) => `${row.slug.padEnd(slugWidth)}  ${row.status.padEnd(statusWidth)}`),
    '',
    `preserved: ${outcome.preserved.length > 0 ? outcome.preserved.join(', ') : '(none)'}`,
  ];
  if (outcome.requires.length > 0) {
    lines.push('requires (not installed by this script):');
    for (const item of outcome.requires) lines.push(`  - ${item}`);
  }
  if (outcome.provenance) lines.push(`provenance: ${outcome.provenance}`);
  if (outcome.error) lines.push(`error: ${outcome.error}`);
  return lines.join('\n');
}

function assertDirectChild(skillsRoot, candidate) {
  const relative = path.relative(path.resolve(skillsRoot), path.resolve(candidate));
  if (relative !== path.basename(candidate)) {
    throw new Error(`Refusing to write outside .cursor/skills: ${candidate}`);
  }
}

async function assertNotSymlink(filePath) {
  try {
    const info = await lstat(filePath);
    if (info.isSymbolicLink()) {
      throw new Error(`Refusing to follow symlink: ${filePath}`);
    }
  } catch (err) {
    if (err.code === 'ENOENT') return;
    throw err;
  }
}

async function assertRegularFile(filePath, label) {
  let info;
  try {
    info = await lstat(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`${label} is missing: ${filePath}`);
    }
    throw err;
  }
  if (!info.isFile()) {
    throw new Error(`${label} is not a regular file: ${filePath}`);
  }
}

async function exists(filePath) {
  try {
    await lstat(filePath);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;
    throw err;
  }
}

async function hashFile(filePath) {
  const data = await readFile(filePath);
  return createHash('sha256').update(data).digest('hex');
}

async function readJson(filePath, label) {
  let text;
  try {
    text = await readFile(filePath, 'utf8');
  } catch (err) {
    throw new Error(`Could not read ${label} at ${filePath}. ${err.message}`);
  }
  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Could not parse ${label} at ${filePath}. ${err.message}`);
  }
}

function parseSkillFile(text, filePath) {
  try {
    const fields = parseFrontmatter(text);
    if (!fields.name) throw new Error('missing name');
    if (!fields.description) throw new Error('missing description');
    return { name: fields.name, description: fields.description };
  } catch (err) {
    throw new Error(`Could not read skill frontmatter at ${filePath}. ${err.message}`);
  }
}

function parseFrontmatter(text) {
  const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/);
  if (!lines[0] || lines[0].trim() !== '---') {
    throw new Error('SKILL.md is missing opening frontmatter');
  }
  let end = -1;
  for (let index = 1; index < lines.length; index += 1) {
    if (lines[index].trim() === '---') {
      end = index;
      break;
    }
  }
  if (end === -1) throw new Error('SKILL.md frontmatter is not closed');

  const fields = {};
  let currentKey = null;
  let mode = null;
  let buffer = [];

  function flush() {
    if (!currentKey) return;
    if (mode === 'folded') {
      fields[currentKey] = buffer.join(' ').replace(/\s+/g, ' ').trim();
    } else {
      fields[currentKey] = buffer.join('\n').trim();
    }
    currentKey = null;
    mode = null;
    buffer = [];
  }

  for (const line of lines.slice(1, end)) {
    if (/^\s*$/.test(line)) {
      if (currentKey && mode !== 'scalar') buffer.push('');
      continue;
    }
    if (/^\s/.test(line)) {
      if (currentKey) buffer.push(line.trim());
      continue;
    }
    const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!match) continue;
    flush();
    currentKey = match[1];
    const raw = match[2].trim();
    if (raw === '|' || raw === '|-' || raw === '|+') {
      mode = 'literal';
      buffer = [];
    } else if (raw === '>' || raw === '>-' || raw === '>+' || raw === '') {
      mode = 'folded';
      buffer = [];
    } else {
      mode = 'scalar';
      buffer = [unquote(raw)];
    }
  }
  flush();
  return fields;
}

function unquote(value) {
  const quoted = (value.startsWith('"') && value.endsWith('"'))
    || (value.startsWith("'") && value.endsWith("'"));
  if (quoted && value.length >= 2) return value.slice(1, -1);
  return value;
}

await main();
