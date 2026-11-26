> Full index: [index-linux-shell.md](index-linux-shell.md)

# Reverse-proxy apps with Nginx over TLS, `systemd`, and persistent `/etc/fstab` mounts

**When to use**: When routing a domain over HTTPS to one or more localhost services on a Linux server with persistent storage.

**Rule**: Configure Nginx in `sites-available` symlinked to `sites-enabled` (removing `default`) to redirect port 80 HTTP to HTTPS (`301`), terminate TLS 1.2/1.3 using Let's Encrypt (`certbot`) or Cloudflare Origin certificates, and `proxy_pass` routes to localhost ports with `Upgrade`/`Connection`/`Host` headers for WebSockets. Always validate syntax with `nginx -t` before `systemctl reload nginx`. Run app backends as `systemd` units (`systemctl daemon-reload`, `enable`, `restart`), and mount persistent block volumes with `nofail` in `/etc/fstab` so a missing disk does not stall boot.

**Example**:
```bash
sudo ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo systemctl daemon-reload && sudo systemctl restart app
```

**Avoid**: Reloading Nginx without running `nginx -t` first, serving plain HTTP without a `301` HTTPS redirect, or omitting `nofail` on external block mounts in `/etc/fstab`.

**Source**: [SSL — Fireship Linux](https://fireship.dev/c/linux/remote-ssl), [Nginx — Fireship Linux](https://fireship.dev/c/linux/remote-nginx), [Mount a Volume — Fireship Linux](https://fireship.dev/c/linux/remote-volumes), [Final Checklist — Fireship Linux](https://fireship.dev/c/linux/remote-final-thoughts), [linux-course — fireship-io](https://github.com/fireship-io/linux-course)
