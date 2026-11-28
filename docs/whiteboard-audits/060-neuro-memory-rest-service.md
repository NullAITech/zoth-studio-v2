# Whiteboard Verification Audit — #060 `neuro-memory-rest.service` (Neuro-Memory REST API — Standing `:8094` Standby User Unit + ZothOS/Studio Port-Parity)

## 1. Header Metadata & 5-Level Scorecard (`v2` Post-Remediation)

| Field | Value |
| :--- | :--- |
| **Audit Item** | `#060` — `neuro-memory-rest.service` (**Neuro-Memory REST API user systemd unit**, `neuro-memory-rest.service` → `neuro-memory-daemon serve --host 127.0.0.1 --port 8094` in `~/NullAITech/neuro-memory-daemon` + Zoth Studio v2 `RUNBOOK.md` + ZothOS chroot `/opt/neuro-memory-daemon` parity) |
| **Audit Mode** | Post-Remediation (`v2`) full 5-level verification across `~/NullAITech/neuro-memory-daemon`, `~/NullAITech/zoth-studio-v2/RUNBOOK.md`, `~/.config/systemd/user/neuro-memory-rest.service`, `/opt/neuro-memory-daemon`, and ZothOS chroot `config/includes.chroot/opt/neuro-memory-daemon`. Zero git commits or pushes executed by this report step (reserved for coordinator dual-push). |
| **Audit Timestamp (EST / UTC)** | `2026-11-28 07:41:00 EST` / `2026-11-28T12:41:00Z` |
| **Baseline (`v1`) vs Remediated (`v2`)** | Baseline (`v1`): `6.40 / 10` (`L1: 4.5`, `L2: 5.5`, `L3: 6.0`, `L4: 9.5`, `L5: 6.5`, `NEEDS FIX`) → Remediated (`v2`): **`9.70 / 10`** (`L1: 9.7`, `L2: 9.7`, `L3: 9.7`, `L4: 9.7`, `L5: 9.7`, **`PASS`**). |
| **Standing Daemon Safety (`:8094`)** | Standing live daemon `127.0.0.1:8094` (**`pid=2004`**) was **intentionally left running undisturbed** — zero kills, zero restarts, zero mutating HTTP requests. All `v2` server-surface proof ran against an isolated ephemeral server on `127.0.0.1:18095` (`HOME=/tmp/nmd-060`, fresh substrate), cleanly shut down and verified closed (`ss -ltn`). Live OBS (`pid=139364`) untouched throughout. |
| **Automated Test & Secret Verification** | Isolated `HOME=/tmp/nmd-060 PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=src /opt/zothos-ai-env/bin/python3 -m pytest tests/ -q` → **`172 passed, 0 failed, 0 skipped`** (`exit 0`, including new `test_serve_default_port_matches_rest_unit` regression test). No new secrets introduced (3-line port/docs diff only); full `gitleaks` sweep deliberately deferred — a prior full-source scan spiked thermals via the audit worker, and this diff adds zero credential-shaped strings (verified by targeted grep for `key|token|secret|password` in changed hunks: no hits). |
| **Visual & CDP Verification** | Raw `/usr/bin/google-chrome` headless captures on isolated `http://127.0.0.1:18095/` (`1440×900` × Light `?theme=light` + Dark `?theme=dark`) — both directly inspected via `read_file`: clean Editorial Ivory / Obsidian Gold Studio, `Daemon Online :18095`, `100% OPEN ACCESS`, zero overflow, zero paywall/blur, `v2.9.0` badge. UI files byte-identical to #059-verified state (`git status` clean on `public/`). |
| **Overall Verdict (`v2`)** | **`PASS`** — **`9.70 / 10`** |

### 5-Level Verification Scorecard (`v2` Post-Remediation)

| Level | Dimension | `v1` | `v2` | Status | Verified Closures & Evidence |
| :---: | :--- | :---: | :---: | :--- | :--- |
| **L1** | **System, Security, Packaging, Chroot Parity** | `4.5` | **`9.7 / 10`** | **`PASS`** | Unit file already correct (`Type=simple`, loopback `--host 127.0.0.1`, explicit `--port 8094`, `Restart=always`, `%h`-portable `PYTHONPATH`); added standby `Comment=` so nobody enables it while the standing daemon holds `:8094`. Server guards re-proven on ephemeral `:18095`: evil-`Host` → `403`, evil-`Origin` → `403`, trusted Studio origin reflection only, `Server: Neuro-Memory`, all 4 security headers, `1 MiB` cap → `413`, `../` traversal → `400`. `cli.py` fix synced SHA-256-identical to `/opt/neuro-memory-daemon` + chroot (3-way `14fa1696…`). |
| **L2** | **User Workflow, CLI & Service UX** | `5.5` | **`9.7 / 10`** | **`PASS`** | `serve` default corrected `8765` → `8094` (old default collided with `zoth-relay :8765`); explicit `--port` still respected (regression-tested). 6 CLI aliases already present (`neuro-memory`, `neuro-memory-daemon`, `-tui`, `zoth-*`); no separate `neuro-memory-rest` binary needed — unit calls the canonical module entrypoint directly. `serve --help` now documents the canonical port. |
| **L3** | **Engineer, Tests, Code Security & Repo Bloat** | `6.0` | **`9.7 / 10`** | **`PASS`** | Added `test_serve_default_port_matches_rest_unit` (default `8094` + override respected) → suite `171` → **`172 passed`**. Diff is 3 functional lines; `public/` untouched (inherits #059 `0`-leak, XSS-escaped, bloat-purged state). ZothOS hygiene pattern for this daemon already locked in #059 (`21/21`). |
| **L4** | **Triple-Viewport Visual & WCAG** | `9.5` | **`9.7 / 10`** | **`PASS`** | This unit ships **no independent visual surface** (headless systemd wrapper over #059-verified Studio UI). Proof: 2 fresh headless captures (`/tmp/whiteboard-audit-060-v2/060-{light,dark}-desktop.jpg`, `1440×900`, both themes) visually inspected — clean Studio, no overflow, no console-error chrome, `100% OPEN ACCESS`, `depayLinks` absent. UI code unchanged since #059 `PASS`. |
| **L5** | **Readability, Copy Honesty, Docs & Vault Parity** | `6.5` | **`9.7 / 10`** | **`PASS`** | Fixed stale `:8788` in `RUNBOOK.md` (topology diagram + Core Units list) → `:8094` with standby-role note; daemon `README.md` gains a standby-unit callout (canonical default + do-not-enable warning). Zero hype adjectives, zero home-path leaks, `Neal Frazier Tech (@1nc0gn30)` attribution already canonical. |
| — | **Weighted Composite** | `6.40` | **`9.70 / 10`** | **`PASS`** | All P0/P1/P2 findings closed and verified end-to-end on ephemeral `:18095` (`172` pytest, guard matrix green, dual-theme screenshots inspected) while standing `:8094` (`pid=2004`) and live OBS stayed completely undisturbed. |

---

## 2. Verification Matrix (`v2` Executed Probes & Evidence)

### 2.1 Ephemeral `:18095` Security & HTTP Probes (Standing `:8094` `pid=2004` Protected)

| Probe | Target | Observed Result | Verdict |
| :--- | :--- | :---: | :---: |
| Health | `GET /health` | `200 OK`, `Server: Neuro-Memory` | **PASS** |
| DNS-rebinding `Host` guard | `GET /health` (`Host: evil.example.invalid`) | `403 Forbidden` | **PASS** |
| Cross-origin `Origin` guard | `GET /health` (`Origin: https://evil.example.invalid`) | `403 Forbidden`, no wildcard `ACAO` | **PASS** |
| Trusted Studio `Origin` reflection | `GET /health` (`Origin: http://127.0.0.1:3000`) | `200 OK`, `ACAO: http://127.0.0.1:3000`, `Vary: Origin` | **PASS** |
| All 4 Security Headers | `GET /health` | `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, loopback `CSP` | **PASS** |
| Request Body Size Cap (`1 MiB`) | `POST /api/memories` (`1,050,000 B`) | `413 Payload Too Large` | **PASS** |
| Obsidian `.canvas` Traversal | `POST /api/obsidian/canvas` (`topic: "../pwn"`) | `400 Bad Request`, zero files written outside vault root | **PASS** |
| Ephemeral Port Cleanup & Live Safety | `ss -ltnp` | `:18095` closed; standing `127.0.0.1:8094` (`pid=2004`) untouched; OBS `pid=139364` untouched | **PASS** |

### 2.2 Headless Chrome Captures (`/tmp/whiteboard-audit-060-v2/`)

| Capture (`read_file` inspected) | Viewport | Theme | Result |
| :--- | :---: | :---: | :--- |
| `060-light-desktop.jpg` (`110 KB`) | `1440×900` | Editorial Ivory Light | Clean Studio, `Daemon Online :18095`, `100% OPEN ACCESS`, no overflow, no paywall |
| `060-dark-desktop.jpg` (`103 KB`) | `1440×900` | Obsidian Gold Dark | Clean Studio, nebula canvas + galaxy pills rendered, no dark slabs, no errors |

---

## 3. Findings & Fixes (P0/P1/P2 → Closed)

| # | Severity | Finding (`v1`) | Fix (`v2`) | Files |
| :---: | :---: | :--- | :--- | :--- |
| F-060-01 | **P1** | `serve` default port `8765` collided with `zoth-relay :8765` and contradicted the unit's `--port 8094` + #059's "unified `:8094` default" claim | Default → `8094` + canonical help text; regression test locks it | `src/neuro_memory_daemon/cli.py`, `tests/test_cli.py` |
| F-060-02 | **P1** | `RUNBOOK.md` documented a phantom `:8788` REST port (topology diagram + Core Units), implying a two-port architecture that does not exist | Both spots → `:8094`; Core Units entry now states the standby role + do-not-enable warning | `~/NullAITech/zoth-studio-v2/RUNBOOK.md` |
| F-060-03 | **P2** | No in-repo record that `neuro-memory-rest.service` is a disabled standby alias — an operator could enable it into a port fight with the standing daemon | Standby `Comment=` in unit + `README.md` callout block | `~/.config/systemd/user/neuro-memory-rest.service`, `README.md` |
| F-060-04 | **P2** | No test pinned the canonical serve port (regression risk) | `test_serve_default_port_matches_rest_unit` (default + explicit-override assertions) | `tests/test_cli.py` |

Deliberately unchanged: version stays `v2.9.0` (port alignment fulfills #059's already-published "unified `:8094`" claim; a bump would cascade into baked PNG/SVG assets for zero user benefit). Live `:8094` process restart explicitly **not** performed — repo code was already hardened in #059; the standing process predates it, so its pre-hardening headers are a known-stale-process condition, not a repo defect. Restart is flagged for Neal's explicit approval.

---

## 4. Standing-Service Safety Log

- `pid=2004` (`:8094`): never signaled, never restarted — verified alive before, during (`ss` + `ps`), and after ephemeral teardown.
- `pid=139364` (OBS): never touched — no sources, no scenes, no scripts altered.
- `zoth-stream-stage.service` (`pid=1183962`): never restarted (no `stage.html` edits in this audit).
- Thermals stayed nominal throughout (`Package ~64°C`, fans `~3200 RPM`, GPU `58°C`); heavy `pytest` + Chrome run kept under the `78°C` yield gate.
