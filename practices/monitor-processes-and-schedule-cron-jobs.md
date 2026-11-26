> Full index: [index-linux-shell.md](index-linux-shell.md)

# Monitor Linux processes gracefully and schedule cron jobs with absolute paths

**When to use**: When inspecting or stopping running processes, or automating recurring jobs via `cron`.

**Rule**: Inspect running processes with `ps -ef` or interactively with `htop`. Terminate stuck processes gracefully first with `kill PID` (`SIGTERM`), reserving `kill -9 PID` (`SIGKILL`) only for unresponsive processes that ignore `SIGTERM`. When scheduling recurring jobs in `crontab -e`, verify the `cron` daemon is running, use absolute script paths resolved with `realpath`, verify with `crontab -l`, and check execution in `/var/log/syslog` or `/var/log/cron`.

**Example**:
```bash
ps -ef | grep node
kill 12345                 # SIGTERM first
realpath backup.sh         # get absolute path for crontab -e
crontab -l                 # verify active schedule
```

**Avoid**: Reaching straight for `kill -9` before trying `SIGTERM`, or putting relative script paths inside `crontab`.

**Source**: [Process Management — Fireship Linux](https://fireship.dev/c/linux/basics-process), [Cron Jobs — Fireship Linux](https://fireship.dev/c/linux/basics-cron)
