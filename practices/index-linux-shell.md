> Full index: [index.md](index.md)

# Linux, Shell Scripting & Self-Hosted Servers

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Permissions, Scripting & Processes

- [Manage Linux file permissions, ownership, and least-privilege `sudo`](manage-linux-permissions-ownership-and-sudo.md): Inspect with `ls -l`, apply symbolic/octal `chmod` (`644`/`755`/`600`), update `chown`, and use `sudo` instead of running as `root`.
- [Write safe Bash scripts, quote variables, and scope environment config](write-safe-bash-scripts-and-check-exit-codes.md): Use `#!/bin/bash`, `local`, quoted `"$var"` expansions, exit-status checks, and proper env scope (session, `~/.bashrc`, `/etc/environment`, `.env`, systemd).
- [Monitor Linux processes gracefully and schedule cron jobs with absolute paths](monitor-processes-and-schedule-cron-jobs.md): Inspect processes with `ps -ef`/`htop`, send `SIGTERM` before `kill -9`, and schedule `crontab` entries using `realpath` absolute paths and log checks.

## VPS Hardening, Nginx & Services

- [Harden VPS access with Ed25519 SSH keys, minimal UFW ports, and internal app bindings](harden-vps-access-with-ed25519-ssh-and-ufw.md): Authenticate via `ssh-keygen -t ed25519`, expose only `22`/`80`/`443` via `ufw`, keep app ports on `127.0.0.1`, and deploy via `git`/`scp`.
- [Reverse-proxy apps with Nginx over TLS, `systemd`, and persistent `/etc/fstab` mounts](reverse-proxy-apps-with-nginx-tls-and-systemd.md): Redirect HTTP→HTTPS (`301`), terminate TLS 1.2/1.3 (Certbot or Cloudflare Origin), proxy WebSockets to localhost, run `nginx -t` before reload, manage `systemd` units, and mount volumes with `nofail`.

> Related CLI fundamentals: [Build baseline terminal fluency: Bash/Zsh navigation, `--help` flags, `Ctrl+C`, and split panes](build-cli-fluency-with-bash-flags-interrupts-and-split-panes.md) in [Career, Engineering Process & Tooling](index-career-and-tooling.md).
