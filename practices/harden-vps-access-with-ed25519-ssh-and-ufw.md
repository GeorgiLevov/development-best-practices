> Full index: [index-linux-shell.md](index-linux-shell.md)

# Harden VPS access with Ed25519 SSH keys, minimal UFW ports, and internal app bindings

**When to use**: When provisioning a Linux VPS, exposing web services, or transferring build artifacts.

**Rule**: Generate an Ed25519 SSH key pair (`ssh-keygen -t ed25519`) for passwordless key auth instead of password logins. Restrict public firewall rules with `ufw` to only the required external ports (`22` SSH, `80` HTTP, `443` HTTPS, e.g., `ufw allow 'Nginx Full'`) while binding backend processes (`3000`, `8090`, databases) to `127.0.0.1` behind a reverse proxy. Install standard software via `apt update && apt install` (or `dpkg -i`), and deploy code via `git` or `scp`.

**Example**:
```bash
ssh-keygen -t ed25519 -C "deploy@example.com"
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw status
```

**Avoid**: Exposing internal app/database ports directly to the public internet when Nginx can reverse-proxy localhost, or reusing weak legacy RSA keys / password root SSH.

**Source**: [SSH — Fireship Linux](https://fireship.dev/c/linux/remote-ssh), [Firewall — Fireship Linux](https://fireship.dev/c/linux/remote-firewall), [Code Transfer — Fireship Linux](https://fireship.dev/c/linux/remote-code-transfer), [Package Managers — Fireship Linux](https://fireship.dev/c/linux/basics-package-mgt)
