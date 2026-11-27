import { createHash } from 'node:crypto';
import { execFile, spawn } from 'node:child_process';
import http from 'node:http';
import { cp, lstat, mkdir, mkdtemp, readFile, readdir, readlink, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';

const execFileAsync = promisify(execFile);
const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const scriptPath = path.join(here, 'bootstrap-cursor-skills.mjs');

const ALWAYS = ['systematic-debugging', 'verification-before-completion'];
const WEB = ['frontend-design', 'playwright-cli'];
const REACT = ['vercel-react-best-practices', 'vercel-composition-patterns'];
const REACT_STACK = [...ALWAYS, ...WEB, ...REACT];
const WEB_STACK = [...ALWAYS, ...WEB];
const PLAYWRIGHT_REQUIRES = [
  'npm i -g @playwright/cli@latest',
  'Install browsers when browser testing is needed',
];

const PINS = {
  'vercel-react-best-practices': {
    repo: 'vercel-labs/agent-skills',
    path: 'skills/react-best-practices',
    sha: '5a37a6329fbad3666c3207392a6a7c0110e92efb',
    license: 'MIT',
  },
  'vercel-composition-patterns': {
    repo: 'vercel-labs/agent-skills',
    path: 'skills/composition-patterns',
    sha: '5a37a6329fbad3666c3207392a6a7c0110e92efb',
    license: 'MIT',
  },
  'frontend-design': {
    repo: 'anthropics/skills',
    path: 'skills/frontend-design',
    sha: 'e4bb5d960d87126ff3b3a8af1a104b7db67560ba',
    license: 'Apache-2.0',
  },
  'playwright-cli': {
    repo: 'microsoft/playwright-cli',
    path: 'skills/playwright-cli',
    sha: 'dc5f4d5616ab5a28ded12fd7101a4d49bd59a820',
    license: 'Apache-2.0',
  },
  'systematic-debugging': {
    repo: 'obra/superpowers',
    path: 'skills/systematic-debugging',
    sha: '22f0b463e7a5e579904dd6211a520321035526f7',
    license: 'MIT',
  },
  'verification-before-completion': {
    repo: 'obra/superpowers',
    path: 'skills/verification-before-completion',
    sha: '22f0b463e7a5e579904dd6211a520321035526f7',
    license: 'MIT',
  },
};

function runBootstrap(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [scriptPath, ...args], { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (chunk) => {
      stdout += chunk;
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
    child.on('error', reject);
    child.on('close', (code) => resolve({ code, stdout, stderr }));
  });
}

async function pathExists(filePath) {
  try {
    await lstat(filePath);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;
    throw err;
  }
}

async function makeRepo(files) {
  const dir = await mkdtemp(path.join(tmpdir(), 'skill-fixture-'));
  for (const [relativePath, contents] of Object.entries(files)) {
    const full = path.join(dir, relativePath);
    await mkdir(path.dirname(full), { recursive: true });
    await writeFile(full, contents);
  }
  return dir;
}

async function fingerprint(dir, { skipCursor = false } = {}) {
  const lines = [];
  async function visit(current) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      const rel = path.relative(dir, full);
      if (skipCursor && (rel === '.cursor' || rel.startsWith(`.cursor${path.sep}`))) continue;
      if (entry.isSymbolicLink()) {
        lines.push(`${rel} -> ${await readlink(full)}`);
        continue;
      }
      if (entry.isDirectory()) {
        lines.push(`${rel}/`);
        await visit(full);
        continue;
      }
      if (entry.isFile()) {
        const data = await readFile(full);
        lines.push(`${rel} ${createHash('sha256').update(data).digest('hex')}`);
      }
    }
  }
  await visit(dir);
  lines.sort();
  return lines;
}

function expectedRequires(slugs) {
  return slugs.includes('playwright-cli') ? PLAYWRIGHT_REQUIRES : [];
}

async function expectInstall(t, { files, profile, detectedBy, slugs }) {
  const dir = await makeRepo(files);
  t.after(() => rm(dir, { recursive: true, force: true }));
  const before = await fingerprint(dir, { skipCursor: true });
  const result = await runBootstrap(['--target', dir, '--json']);
  assert.equal(result.code, 0, `${result.stderr}\n${result.stdout}`);
  const body = JSON.parse(result.stdout);
  assert.equal(body.ok, true);
  assert.equal(body.error, null);
  assert.equal(body.profile, profile);
  assert.equal(body.detectedBy, detectedBy);
  assert.deepEqual(body.results.map((row) => row.slug), slugs);
  assert.deepEqual(body.results.map((row) => row.status), slugs.map(() => 'installed'));
  assert.deepEqual(body.requires, expectedRequires(slugs));
  assert.deepEqual(body.preserved, []);
  for (const row of body.results) {
    assert.equal(row.sha256, row.expectedSha256);
    assert.match(row.sha256, /^[0-9a-f]{64}$/);
  }

  const after = await fingerprint(dir, { skipCursor: true });
  assert.deepEqual(after, before);
  assert.deepEqual(await readdir(path.join(dir, '.cursor')), ['skills']);

  const catalog = JSON.parse(await readFile(path.join(repoRoot, 'skills', 'approved-skills.json'), 'utf8'));
  const bySlug = new Map(catalog.skills.map((skill) => [skill.slug, skill]));
  const provenance = JSON.parse(await readFile(path.join(dir, '.cursor', 'skills', 'PROVENANCE.json'), 'utf8'));
  assert.equal(provenance.profile, profile);
  assert.deepEqual(provenance.skills.map((entry) => entry.slug), slugs);
  for (const entry of provenance.skills) {
    const skill = bySlug.get(entry.slug);
    assert.equal(entry.name, skill.name);
    assert.equal(entry.sha, skill.pinned_sha);
    assert.equal(entry.license, skill.license);
    assert.equal(
      entry.source,
      `https://github.com/${skill.source_repo}/tree/${skill.pinned_sha}/${skill.path}`,
    );
    assert.match(entry.installed_at, /^\d{4}-\d{2}-\d{2}T/);
  }

  return { dir, body };
}

const profileFixtures = [
  {
    name: 'react app',
    files: {
      'package.json': `${JSON.stringify({ dependencies: { react: '^19.0.0', 'react-dom': '^19.0.0' } }, null, 2)}\n`,
    },
    profile: 'react',
    detectedBy: 'dependency:react',
    slugs: REACT_STACK,
  },
  {
    name: 'next app',
    files: {
      'package.json': `${JSON.stringify({ dependencies: { next: '^15.0.0', react: '^19.0.0' } }, null, 2)}\n`,
    },
    profile: 'next',
    detectedBy: 'dependency:next',
    slugs: REACT_STACK,
  },
  {
    name: 'preact app',
    files: {
      'package.json': `${JSON.stringify({ dependencies: { preact: '^10.25.0' } }, null, 2)}\n`,
    },
    profile: 'preact',
    detectedBy: 'dependency:preact',
    slugs: WEB_STACK,
  },
  {
    name: 'MV3 web extension',
    files: {
      'manifest.json': `${JSON.stringify({ manifest_version: 3, name: 'Demo', version: '1.0.0' }, null, 2)}\n`,
    },
    profile: 'web-extension',
    detectedBy: 'manifest_version',
    slugs: WEB_STACK,
  },
  {
    name: 'MV3 extension that also depends on react',
    files: {
      'package.json': `${JSON.stringify({ dependencies: { react: '^19.0.0' } }, null, 2)}\n`,
      'manifest.json': `${JSON.stringify({ manifest_version: 3, name: 'Demo', version: '1.0.0' }, null, 2)}\n`,
    },
    profile: 'web-extension',
    detectedBy: 'manifest_version',
    slugs: WEB_STACK,
  },
  {
    name: 'backend-only node package',
    files: {
      'package.json': `${JSON.stringify({ name: 'api', dependencies: { express: '^4.21.0' } }, null, 2)}\n`,
    },
    profile: 'backend',
    detectedBy: 'package_json',
    slugs: ALWAYS,
  },
  {
    name: 'plain html site',
    files: {
      'index.html': '<!doctype html><title>Notes</title><p>Hi</p>\n',
    },
    profile: 'vanilla',
    detectedBy: 'root_html',
    slugs: WEB_STACK,
  },
  {
    name: 'vite app without a ui framework',
    files: {
      'package.json': `${JSON.stringify({ devDependencies: { vite: '^6.0.0' } }, null, 2)}\n`,
    },
    profile: 'vanilla',
    detectedBy: 'dependency:vite',
    slugs: WEB_STACK,
  },
  {
    name: 'react app that also uses vite',
    files: {
      'package.json': `${JSON.stringify({
        dependencies: { react: '^19.0.0' },
        devDependencies: { vite: '^6.0.0' },
      }, null, 2)}\n`,
    },
    profile: 'react',
    detectedBy: 'dependency:react',
    slugs: REACT_STACK,
  },
];

test('vendored skills match the pinned catalog bytes and licenses', async () => {
  const catalog = JSON.parse(await readFile(path.join(repoRoot, 'skills', 'approved-skills.json'), 'utf8'));
  assert.deepEqual(catalog.skills.map((skill) => skill.slug), Object.keys(PINS));

  for (const skill of catalog.skills) {
    const pin = PINS[skill.slug];
    assert.equal(skill.name, skill.slug);
    assert.equal(skill.source_repo, pin.repo);
    assert.equal(skill.path, pin.path);
    assert.equal(skill.pinned_sha, pin.sha);
    assert.equal(skill.license, pin.license);
    const skillMdPath = path.join(repoRoot, 'skills', 'vendor', skill.slug, 'SKILL.md');
    const bytes = await readFile(skillMdPath);
    const hash = createHash('sha256').update(bytes).digest('hex');
    assert.equal(skill.skill_md_sha256, hash);
    const nameLine = bytes.toString('utf8').split(/\r?\n/).find((line) => line.startsWith('name:'));
    assert.equal(nameLine, `name: ${skill.name}`);
  }

  const playwrightRequires = catalog.skills.find((skill) => skill.slug === 'playwright-cli').requires;
  assert.deepEqual(playwrightRequires, PLAYWRIGHT_REQUIRES);
  for (const skill of catalog.skills) {
    if (skill.slug !== 'playwright-cli') assert.deepEqual(skill.requires, []);
  }

  for (const slug of ['vercel-react-best-practices', 'vercel-composition-patterns']) {
    const skillDir = path.join(repoRoot, 'skills', 'vendor', slug);
    assert.equal(await pathExists(path.join(skillDir, 'LICENSE')), false);
    assert.equal(await pathExists(path.join(skillDir, 'LICENSE.txt')), false);
    const notice = await readFile(path.join(skillDir, 'NOTICE.md'), 'utf8');
    assert.match(notice, /no LICENSE file/);
    assert.match(notice, /MIT/);
    assert.match(notice, new RegExp(PINS[slug].sha));
    assert.match(notice, /https:\/\/github.com\/vercel-labs\/agent-skills/);
    assert.doesNotMatch(notice, /Permission is hereby granted/);
  }

  const frontendLicense = await readFile(path.join(repoRoot, 'skills', 'vendor', 'frontend-design', 'LICENSE.txt'), 'utf8');
  assert.match(frontendLicense, /Apache License/);
  const playwrightLicense = await readFile(path.join(repoRoot, 'skills', 'vendor', 'playwright-cli', 'LICENSE'), 'utf8');
  assert.match(playwrightLicense, /Apache License/);
  for (const slug of ['systematic-debugging', 'verification-before-completion']) {
    const license = await readFile(path.join(repoRoot, 'skills', 'vendor', slug, 'LICENSE'), 'utf8');
    assert.match(license, /^MIT License/);
  }
});

for (const fixture of profileFixtures) {
  test(`${fixture.name} installs the ${fixture.profile} profile`, async (t) => {
    const { dir, body } = await expectInstall(t, fixture);
    assert.equal(body.dryRun, false);
    if (fixture.profile === 'react' || fixture.profile === 'next') {
      assert.ok(body.results.some((row) => row.slug === 'vercel-react-best-practices'));
      assert.equal(await pathExists(path.join(dir, '.cursor', 'skills', 'playwright-cli', 'LICENSE')), true);
      assert.equal(
        await pathExists(path.join(dir, '.cursor', 'skills', 'vercel-react-best-practices', 'NOTICE.md')),
        true,
      );
      assert.equal(
        await pathExists(path.join(dir, '.cursor', 'skills', 'vercel-react-best-practices', 'LICENSE')),
        false,
      );
    } else {
      assert.equal(body.results.some((row) => row.slug === 'vercel-react-best-practices'), false);
      assert.equal(body.results.some((row) => row.slug === 'vercel-composition-patterns'), false);
    }
    if (fixture.profile === 'backend') {
      assert.equal(body.results.some((row) => row.slug === 'frontend-design'), false);
      assert.equal(await pathExists(path.join(dir, '.cursor', 'skills', 'frontend-design')), false);
    }
  });
}

test('second run is idempotent', async (t) => {
  const dir = await makeRepo({
    'package.json': `${JSON.stringify({ dependencies: { react: '^19.0.0' } })}\n`,
    'src/app.js': 'export const ready = true;\n',
  });
  t.after(() => rm(dir, { recursive: true, force: true }));

  const first = await runBootstrap(['--target', dir, '--json']);
  assert.equal(first.code, 0, first.stderr);
  const afterFirst = await fingerprint(path.join(dir, '.cursor'));

  const second = await runBootstrap(['--target', dir, '--json']);
  assert.equal(second.code, 0, second.stderr);
  const body = JSON.parse(second.stdout);
  assert.equal(body.profile, 'react');
  assert.deepEqual(body.results.map((row) => row.status), REACT_STACK.map(() => 'present'));
  assert.deepEqual(await fingerprint(path.join(dir, '.cursor')), afterFirst);
  const outside = await fingerprint(dir, { skipCursor: true });
  assert.ok(outside.some((line) => line.startsWith(`src${path.sep}app.js `)));
});

test('drift is reported and not overwritten', async (t) => {
  const dir = await makeRepo({
    'package.json': `${JSON.stringify({ dependencies: { react: '^19.0.0' } })}\n`,
    'KEEP.txt': 'do not touch\n',
  });
  t.after(() => rm(dir, { recursive: true, force: true }));
  const installed = await runBootstrap(['--target', dir, '--json']);
  assert.equal(installed.code, 0, installed.stderr);

  const skillMd = path.join(dir, '.cursor', 'skills', 'systematic-debugging', 'SKILL.md');
  const edited = `${await readFile(skillMd, 'utf8')}\n<!-- local note -->\n`;
  await writeFile(skillMd, edited);
  const before = await fingerprint(dir);

  const result = await runBootstrap(['--target', dir, '--json']);
  assert.equal(result.code, 1);
  assert.deepEqual(await fingerprint(dir), before);
  const body = JSON.parse(result.stdout);
  assert.equal(body.ok, false);
  const drifted = body.results.find((row) => row.slug === 'systematic-debugging');
  assert.equal(drifted.status, 'drift');
  assert.notEqual(drifted.sha256, drifted.expectedSha256);
  for (const row of body.results) {
    if (row.slug !== 'systematic-debugging') assert.equal(row.status, 'present');
  }
  assert.match(body.error, /systematic-debugging/);
  assert.match(body.error, /unchanged/);
  assert.match(result.stderr, /unchanged/);
  assert.equal(await readFile(skillMd, 'utf8'), edited);
  assert.equal(body.provenance, null);
});

test('an unrelated skill is preserved and nothing is written outside .cursor/skills', async (t) => {
  const house = '---\nname: house-style\ndescription: Local team skill kept beside the approved set.\n---\n\n# House style\nLeave this file alone.\n';
  const appSource = 'console.log("app");\n';
  const dir = await makeRepo({
    'package.json': `${JSON.stringify({ name: 'api', dependencies: { express: '^4.21.0' } })}\n`,
    'src/index.js': appSource,
    'sentinel.txt': 'sentinel\n',
    '.cursor/skills/house-style/SKILL.md': house,
    '.cursor/skills/house-style/extra.md': 'extra notes\n',
    '.cursor/skills/README.md': 'keep this file\n',
  });
  t.after(() => rm(dir, { recursive: true, force: true }));
  const before = await fingerprint(dir, { skipCursor: true });

  const result = await runBootstrap(['--target', dir, '--json']);
  assert.equal(result.code, 0, result.stderr);
  const body = JSON.parse(result.stdout);
  assert.equal(body.profile, 'backend');
  assert.deepEqual(body.results.map((row) => row.slug), ALWAYS);
  assert.deepEqual(body.preserved, ['house-style']);
  assert.equal(await readFile(path.join(dir, '.cursor', 'skills', 'house-style', 'SKILL.md'), 'utf8'), house);
  assert.equal(await readFile(path.join(dir, '.cursor', 'skills', 'house-style', 'extra.md'), 'utf8'), 'extra notes\n');
  assert.equal(await readFile(path.join(dir, '.cursor', 'skills', 'README.md'), 'utf8'), 'keep this file\n');
  assert.equal(await readFile(path.join(dir, 'src', 'index.js'), 'utf8'), appSource);
  assert.deepEqual(await fingerprint(dir, { skipCursor: true }), before);
  assert.deepEqual(await readdir(path.join(dir, '.cursor')), ['skills']);
  assert.equal(body.results.some((row) => row.slug === 'frontend-design'), false);
});

test('dry-run writes nothing', async (t) => {
  const dir = await makeRepo({
    'package.json': `${JSON.stringify({ dependencies: { preact: '^10.25.0' } })}\n`,
  });
  t.after(() => rm(dir, { recursive: true, force: true }));
  const before = await fingerprint(dir);

  const result = await runBootstrap(['--target', dir, '--dry-run']);
  assert.equal(result.code, 0, result.stderr);
  assert.equal(result.stderr, '');
  assert.match(result.stdout, /mode: dry-run/);
  assert.match(result.stdout, /profile: preact/);
  assert.match(result.stdout, /playwright-cli\s+installed/);
  assert.doesNotMatch(result.stdout, /vercel-react-best-practices/);
  assert.doesNotMatch(result.stdout, /vercel-composition-patterns/);
  assert.match(result.stdout, /npm i -g @playwright\/cli@latest/);
  assert.equal(await pathExists(path.join(dir, '.cursor')), false);
  assert.deepEqual(await fingerprint(dir), before);
});

test('catalog can be a local path or a tar.gz URL', async (t) => {
  const dir = await makeRepo({
    'package.json': `${JSON.stringify({ dependencies: { react: '^19.0.0' } })}\n`,
  });
  const stage = await mkdtemp(path.join(tmpdir(), 'catalog-stage-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  t.after(() => rm(stage, { recursive: true, force: true }));

  const fromRepo = await runBootstrap(['--target', dir, '--catalog', repoRoot, '--dry-run', '--json']);
  assert.equal(fromRepo.code, 0, fromRepo.stderr);
  assert.equal(JSON.parse(fromRepo.stdout).profile, 'react');

  const fromSkills = await runBootstrap([
    '--target', dir,
    '--catalog', path.join(repoRoot, 'skills'),
    '--dry-run',
    '--json',
  ]);
  assert.equal(fromSkills.code, 0, fromSkills.stderr);
  assert.deepEqual(JSON.parse(fromSkills.stdout).results.map((row) => row.slug), REACT_STACK);

  const top = path.join(stage, 'development-best-practices-master');
  await mkdir(top);
  await cp(path.join(repoRoot, 'skills'), path.join(top, 'skills'), { recursive: true });
  const archive = path.join(stage, 'catalog.tar.gz');
  await execFileAsync('tar', ['-czf', archive, '-C', stage, 'development-best-practices-master']);
  const archiveBytes = await readFile(archive);
  const server = http.createServer((request, response) => {
    response.writeHead(200, {
      'content-type': 'application/gzip',
      'content-length': archiveBytes.length,
    });
    response.end(archiveBytes);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise((resolve, reject) => {
    server.close((err) => (err ? reject(err) : resolve()));
  }));
  const { port } = server.address();
  const url = `http://127.0.0.1:${port}/development-best-practices.tar.gz`;
  const downloaded = await runBootstrap(['--target', dir, '--catalog', url, '--dry-run', '--json']);
  assert.equal(downloaded.code, 0, downloaded.stderr);
  const body = JSON.parse(downloaded.stdout);
  assert.equal(body.profile, 'react');
  assert.equal(body.dryRun, true);
  assert.deepEqual(body.results.map((row) => row.status), REACT_STACK.map(() => 'installed'));
  assert.equal(await pathExists(path.join(dir, '.cursor')), false);
});

test('fails clearly when the stack cannot be detected', async (t) => {
  const dir = await mkdtemp(path.join(tmpdir(), 'skill-empty-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const result = await runBootstrap(['--target', dir, '--json']);
  assert.notEqual(result.code, 0);
  const body = JSON.parse(result.stdout);
  assert.equal(body.ok, false);
  assert.match(body.error, /Could not detect a project stack/);
  assert.match(result.stderr, /Could not detect a project stack/);
  assert.equal(await pathExists(path.join(dir, '.cursor')), false);
});

test('fails clearly when the target is missing', async () => {
  const missing = path.join(tmpdir(), `missing-skill-target-${process.pid}`);
  const result = await runBootstrap(['--target', missing, '--json']);
  assert.notEqual(result.code, 0);
  assert.match(JSON.parse(result.stdout).error, /Target does not exist/);
});

test('refuses to follow a .cursor symlink', async (t) => {
  const dir = await makeRepo({
    'package.json': `${JSON.stringify({ dependencies: { express: '^4.21.0' } })}\n`,
  });
  const outside = await mkdtemp(path.join(tmpdir(), 'outside-cursor-'));
  await symlink(outside, path.join(dir, '.cursor'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  t.after(() => rm(outside, { recursive: true, force: true }));

  const result = await runBootstrap(['--target', dir, '--json']);
  assert.notEqual(result.code, 0);
  assert.match(JSON.parse(result.stdout).error, /symlink/);
  assert.deepEqual(await readdir(outside), []);
});
