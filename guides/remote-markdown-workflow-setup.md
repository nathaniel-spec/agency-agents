# 🔁 Setup Guide: Remote Markdown Workflow (Phone ↔ Cloud ↔ Desktop)

> **Goal:** Edit and reference your `.md` files from *any* device (phone, web, laptop), have those
> changes land on your Desktop automatically, and keep everything backed up — without any device
> reaching directly into another.
>
> **Your choices:** GitHub as the editing hub for markdown · Full two-way Google Drive for Desktop
> auto-sync · Google account = **Nathaniel@svrea.co**

---

## The one idea that makes this work

No Claude — on your phone, on the web, anywhere — can reach *directly* into your physical desktop.
The trick is to put a **cloud layer in the middle**. Every device talks to the cloud; the cloud
talks to your desktop. Nothing is ever device-to-device.

```
 📱 Phone Claude ─┐
                 ├─▶  ☁️ GitHub (edit .md here)  ─┐
 🌐 Web Claude ──┘                                │  local clone lives on your Desktop
                                                  ▼
                     ☁️ Google Drive (backup)  ◀──▶  💻 Your Desktop  (auto-syncs both ways)
```

- **GitHub** is where your markdown lives and where Claude reads/edits it. Claude already has
  read + write access to your `agency-agents` repo.
- **Google Drive for Desktop** mirrors your whole Desktop to the cloud and back — so the repo's
  local copy (and everything else on your Desktop) is continuously backed up and current.
- **Your Desktop** holds a local clone of the repo. You edit locally *or* remotely; both stay in sync.

**The remote loop:** Phone Claude edits a `.md` file on GitHub → you (or a scheduled pull) bring
it down to the Desktop clone → Drive backs it up. And the reverse: you edit on the Desktop → push
to GitHub → Claude sees it from anywhere.

---

## Part A — GitHub: your markdown editing hub

This is the piece that lets remote Claude actually **edit** your `.md` files (not just read them).

### One-time setup (at your desktop)

1. **Install Git** if you don't have it:
   - **Mac:** open Terminal, run `git --version` — if missing, it'll prompt to install, or get it from https://git-scm.com/download/mac
   - **Windows:** https://git-scm.com/download/win
2. **Clone the repo onto your Desktop** so the working copy lives in a synced location:
   ```bash
   cd ~/Desktop
   git clone https://github.com/nathaniel-spec/agency-agents.git
   ```
3. **Put your markdown where it belongs.** Keep campaign/working `.md` files in a clear folder,
   e.g. create `agency-agents/campaigns/` and drop them there.
4. **Push them up** so Claude can see them:
   ```bash
   cd ~/Desktop/agency-agents
   git add .
   git commit -m "Add campaign markdown files"
   git push
   ```

### The daily loop

| You want to… | Do this |
|---|---|
| Let remote Claude read/edit your `.md` | `git push` your latest, then ask Claude |
| Pull Claude's remote edits down to your Desktop | `git pull` in the repo folder |
| Work fully offline | Edit locally, `git push` when back online |

> **Tip:** Run `git pull` when you sit down at your desktop and `git push` before you leave.
> That's the whole ritual. Everything else is automatic.

---

## Part B — Google Drive for Desktop: full two-way auto-sync

This keeps your **entire Desktop** (including the repo clone) mirrored to the cloud continuously,
in both directions. It's your backup + safety net.

### What "auto-sync" actually means
- Changes sync **continuously, in near real-time** (within seconds of saving) — not on a fixed schedule.
- It syncs **only while the app is running and you're online.** Offline changes queue and upload on reconnect.
- **First sync takes a while** (minutes to hours depending on Desktop size); incremental changes after are near-instant.

### Setup — paste this into a DESKTOP-capable Claude

> ⚠️ **Where to run it:** the **Claude Desktop app with computer use**, or **Claude Code installed
> locally**. Do **not** paste it into a normal claude.ai chat or a Claude Code *web* session — those
> run in the cloud with no access to your physical desktop.

```
Set up and verify two-way sync between my desktop and Google Drive using
Google Drive for Desktop. Work autonomously and only stop to ask me when a
step genuinely requires my hands (a GUI login or an OS permission dialog).

Context:
- The Google account to use is: Nathaniel@svrea.co  (use THIS account — do not
  sign into any other one).
- End goal: my Desktop files live in the cloud and stay current automatically,
  so another tool can read them from Google Drive.

Steps:
1. Detect my OS. Check whether "Google Drive for Desktop" is already installed.
   - If not installed, install it from https://www.google.com/drive/download/
     (or the OS package manager), run the installer, and complete setup.
   - If a Google login window appears, pause and tell me exactly what to click.
2. Confirm the Google Drive process is running. Start it if it isn't.
3. Open Preferences → "My Computer" tab → "Add folder" → add my DESKTOP folder
   to the synced locations. Confirm it's set to sync with Google Drive.
4. On the "Google Drive" tab, set the mode to "Mirror files" (not "Stream").
5. Trigger and wait for the initial sync to finish (tray/menu-bar icon shows a
   checkmark, no spinning arrows).
6. VERIFY sync BOTH directions:
   a. Create "synctest-desktop.txt" on my Desktop. Wait, confirm it appears in
      Google Drive (local Drive folder or drive.google.com → "Computers").
   b. Create "synctest-drive.txt" in the Google Drive folder. Wait, confirm it
      appears on my Desktop.
   c. Once both are confirmed, delete both test files.
7. Report: what you installed/changed, the exact mirrored folder paths on both
   sides, and proof both test files synced. If blocked, tell me what to click.

Do not report success until both directions are verified. If a file doesn't
appear after a reasonable wait, say so plainly rather than assuming it worked.
```

---

## Part C — Using Claude remotely (phone or web)

Once A and B are set up, here's how you actually work from anywhere:

1. **From your phone / web:** ask Claude to read or edit a file in the `agency-agents` repo
   (e.g. "update `campaigns/outreach.md` with these new numbers"). Claude commits the change to GitHub.
2. **The change reaches your desktop** when the local clone pulls it — either you run `git pull`,
   or you set up an auto-pull (ask a local Claude Code to do it on a schedule).
3. **Drive for Desktop** backs up the updated files automatically.
4. **Reverse direction:** edit on your desktop → `git push` → Claude sees the new version from
   any device.

> **For "Claude doing research remotely":** you can start **Claude Code on the web** sessions right
> from your phone — they run in a cloud container against your GitHub repos. That's how *this* very
> session works. See https://code.claude.com/docs/en/claude-code-on-the-web

---

## ⚠️ The one thing that must match: the account

For remote Claude to *read from Google Drive*, the Drive connected to your Claude account must be
the **same** Google account your desktop syncs to (**Nathaniel@svrea.co**). If they differ, your
synced files are safely in the cloud but invisible to Claude.

- **This is why GitHub is your primary hub** — it sidesteps the account-matching problem entirely.
- If you *also* want Claude to read the Drive copies, confirm the connected Drive is `svrea.co`
  (Claude can run a test search to check), or share the folder from `svrea.co` to the connected account.

---

## ✅ Verification checklist

- [ ] Git installed; `agency-agents` cloned onto the Desktop
- [ ] Markdown files committed and **pushed** to GitHub (Claude can see them)
- [ ] `git pull` brings remote edits down to the Desktop
- [ ] Drive for Desktop installed, signed into **Nathaniel@svrea.co**, set to **Mirror files**
- [ ] Desktop folder added under **My Computer**; initial sync **complete**
- [ ] Both-direction sync test passed (desktop→drive AND drive→desktop)
- [ ] (If reading Drive via Claude) connected Drive account confirmed as `svrea.co`

## 🚀 Daily quickstart

1. Sit down at desktop → `git pull` (grab any remote edits).
2. Work — locally or ask remote Claude to edit files on GitHub.
3. Leaving → `git push` (send your local edits up).
4. Drive for Desktop handles backup automatically in the background.
