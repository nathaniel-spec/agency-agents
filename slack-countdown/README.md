# Daily Slack Countdown to August 15, 2026

Every morning at **8:00 AM Hawaii time**, this project posts one message to
your personal Slack channel:

> `42 days until August 15`

It runs entirely in the cloud on **free GitHub Actions** — you do not need to
leave a computer on. Days are counted in the **Pacific/Honolulu** timezone, so
the number ticks down at Hawaii's local midnight. There are **no third-party
Python packages** and only **one secret** to set up.

Message rules:

| Days left | Message you receive       |
|-----------|---------------------------|
| 42        | `42 days until August 15` |
| 1         | `1 day until August 15`   |
| 0         | `August 15 is here`       |
| past it   | *(nothing is posted)*     |

---

## Repo folder structure

These files are meant to live at the **root of a GitHub repository**. (GitHub
only runs workflows found in `.github/workflows/` at the repo root.)

```
your-repo/
├── countdown.py                  # Counts the days and posts to Slack
├── test_countdown.py             # Offline tests for the logic (no Slack needed)
├── README.md                     # This file
└── .github/
    └── workflows/
        └── countdown.yml         # The daily schedule + the step that runs it
```

There is no `requirements.txt` — the script uses only Python's standard
library, so nothing needs to be installed.

---

## How it works (the short version)

1. GitHub Actions wakes up once a day on a cron schedule.
2. It installs Python (no extra packages needed).
3. It runs `countdown.py`, passing your Slack webhook URL in as an environment
   variable.
4. The script figures out today's date **in Hawaii**, subtracts it from
   August 15, 2026, and posts the result to your Slack channel.

The cron line is `7 18 * * *`. GitHub cron is always in **UTC**. Hawaii (HST)
is UTC−10 with no daylight saving, so 8:00 AM HST = **18:00 UTC**. We use
**18:07** because GitHub's scheduler can lag, and an off-the-hour minute tends
to fire sooner.

---

## Setup — step by step

You only need to do this once. It takes about 5 minutes. It assumes you have a
GitHub account and a Slack workspace, but have never used Slack webhooks or
GitHub Actions before.

### Part A — Make a personal channel and a Slack webhook

A "webhook" is a private URL that posts a message to one specific channel
whenever you send it some text. We'll point it at a channel that only you are
in, so it acts as your personal countdown feed.

1. **Create your personal channel.** In Slack, click the **+** next to
   *Channels* → **Create a channel**. Name it something like `countdown`, set it
   to **Private**, and create it. Don't invite anyone — it's just for you.
   *(A private channel with only you in it is the reliable way to get a personal
   feed. Slack webhooks attach to a channel, so this works better than trying to
   DM yourself.)*
2. **Create a Slack app.** Go to **https://api.slack.com/apps** → **Create New
   App → From scratch**. Name it `Countdown`, pick your workspace, and create.
3. **Turn on webhooks.** In the app's left sidebar, click **Incoming Webhooks**
   and switch **Activate Incoming Webhooks** to **On**.
4. **Add the webhook to your channel.** Click **Add New Webhook to Workspace**,
   choose your `countdown` channel from step 1, and click **Allow**.
5. **Copy the Webhook URL.** It looks like
   `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXX`.
   Treat it like a password — anyone who has it can post to that channel.

### Part B — Put this code in a GitHub repository

1. On GitHub, click **New repository**, name it e.g. `slack-countdown`, and
   create it (private is fine).
2. Add these files to it, keeping the **folder structure** above — in
   particular, `countdown.yml` must be at `.github/workflows/countdown.yml` in
   the repo root.
3. Commit and push. From your computer:
   ```bash
   git init
   git add .
   git commit -m "Add daily Slack countdown"
   git branch -M main
   git remote add origin https://github.com/<your-username>/slack-countdown.git
   git push -u origin main
   ```
   (Or drag-and-drop the files in using GitHub's web uploader.)

### Part C — Add your one secret to GitHub

Secrets are encrypted values GitHub injects at run time. They never appear in
your code.

1. In your repo on GitHub: **Settings → Secrets and variables → Actions**.
2. Click **New repository secret**.
3. Name it exactly `SLACK_WEBHOOK_URL` (the workflow looks it up by this name)
   and paste your webhook URL as the value. Save.

### Part D — Test it now (don't wait until morning)

1. In your repo, open the **Actions** tab.
2. If GitHub asks you to enable workflows for the repo, click to enable them.
3. Pick **Daily Slack Countdown** in the left sidebar.
4. Click **Run workflow → Run workflow** (the manual trigger).
5. Within a minute the message should appear in your `countdown` channel. If it
   doesn't, click into the run and read the log — the script prints a clear
   error if the secret is missing.

That's it. From now on it runs by itself every morning until August 15, 2026,
then goes quiet.

---

## Running the tests locally (optional)

No Slack webhook or secret needed — these only check the date math and wording:

```bash
python test_countdown.py
# or, if you have pytest:  python -m pytest
```

---

## Common questions

**The message arrives a bit after 8:00 AM — is that normal?**
Yes. GitHub's free scheduler is best-effort and can be a few minutes (sometimes
more) late, especially at the top of the hour. That's why we use `:07`.

**It stopped after a couple of months.**
GitHub disables scheduled workflows on repos with **60 days of no commits**.
Just push any small commit, or click *Run workflow* once, to re-enable it.

**I want a different target date or wording.**
Edit `TARGET_DATE` and `TARGET_LABEL` near the top of `countdown.py`.

**Will this cost money?**
No. GitHub Actions is free for this (a few seconds a day) and Slack Incoming
Webhooks are free.
