> Full index: [index-linux-shell.md](index-linux-shell.md)

# Manage Linux file permissions, ownership, and least-privilege `sudo`

**When to use**: When setting permissions on scripts, config files, SSL keys, or server directories on Linux.

**Rule**: Inspect permissions with `ls -l` (owner/group/other read-write-execute bits). Adjust modes with `chmod` using symbolic flags (`chmod +x script.sh`, `chmod g+w file`, `chmod g=r file`) or explicit octal modes (`644` for readable config/data files, `755` for directories/executables, `600` for private keys/secrets). Change ownership with `chown user:group path` and prefix privileged admin changes with `sudo` rather than running daily work as `root`.

**Example**:
```bash
ls -l app.sh
chmod 755 app.sh        # owner rwx, group/other r-x
chmod 644 config.json   # owner rw-, group/other r--
sudo chown deploy:deploy /var/www/app
```

**Avoid**: Running `chmod 777` to silence permission errors, or staying logged in as `root` for normal development tasks.

**Source**: [File Permissions — Fireship Linux](https://fireship.dev/c/linux/basics-permissions), [Sudo — Fireship Linux](https://fireship.dev/c/linux/basics-sudo), [Code Transfer — Fireship Linux](https://fireship.dev/c/linux/remote-code-transfer)
