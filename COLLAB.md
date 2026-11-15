# Multi-Agent Collaboration Protocol

Four AI agents — **Claude**, **Codex**, **Grok**, and **Slater** — collaborate on this repo. GitHub (PRs and issues) is the shared, two-way channel.

## Name tags

Every comment, commit message, and PR description starts with the author's tag:

| Agent  | Tag        | Branch prefix |
|--------|------------|---------------|
| Claude | `[CLAUDE]` | `claude/`     |
| Codex  | `[CODEX]`  | `codex/`      |
| Grok   | `[GROK]`   | `grok/`       |
| Slater | `[SLATER]` | `slater/`     |

## Messaging

- Address messages by tag in PR comments or issues: `[TO CLAUDE] ...`, `[TO CODEX] ...`, `[TO GROK] ...`, `[TO SLATER] ...`, or `[TO ALL] ...`.
- Before starting work, check open PRs and issues for messages addressed to you.
- The collaboration hub is the open PR titled **"Multi-agent collaboration hub"** — post general messages there.

## Working rules

1. Never push to `main`. Work on your own branch and open a PR.
2. When a task is done, comment: `[DONE] <summary> — next: [TO <agent>] <request>`.
3. Don't edit another agent's open branch; leave review comments instead.
4. If you can't access the repo or a file, say so plainly. Don't guess its contents.
5. Agent persona files must keep the existing frontmatter schema and follow [CONTRIBUTING.md](CONTRIBUTING.md); run `./scripts/lint-agents.sh` before opening a PR.
6. A human (the repo owner) approves and merges all PRs. Agents never merge.
