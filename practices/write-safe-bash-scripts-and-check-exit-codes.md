> Full index: [index-linux-shell.md](index-linux-shell.md)

# Write safe Bash scripts, quote variables, and scope environment config

**When to use**: When authoring shell scripts, customizing prompts, or deciding where environment variables live on Linux.

**Rule**: Start Bash scripts with `#!/bin/bash`, scope function variables with `local`, always double-quote variable expansions (`"$var"`) to prevent word-splitting/glob bugs, and verify exit statuses (`$? -eq 0` or direct `if cmd; then`). Choose the right scope for environment variables: `export VAR=val` for the current shell session, `~/.bashrc` or `~/.bash_profile` for interactive shells (also where `PS1` prompt customizations belong), `/etc/environment` for system-wide settings, `.env` files for local app config, and systemd unit `Environment=`/`EnvironmentFile=` for managed services.

**Example**:
```bash
#!/bin/bash
greet() {
  local name="$1"
  echo "Hello, $name"
}
if ls /etc/nginx >/dev/null 2>&1; then
  greet "admin"
fi
```

**Avoid**: Leaving `$var` unquoted inside `[ ... ]` conditionals, or setting shell-only variables in `~/.bashrc` and expecting non-interactive `systemd` services to inherit them.

**Source**: [Bash Shell — Fireship Linux](https://fireship.dev/c/linux/basics-shell), [Bash Config — Fireship Linux](https://fireship.dev/c/linux/basics-bash-config), [Env Vars — Fireship Linux](https://fireship.dev/c/linux/remote-env-vars)
