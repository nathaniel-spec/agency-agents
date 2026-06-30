# Daily Countdown to August 15, 2026

Every morning at **8:00 AM Hawaii time**, this project sends you one message:

> `42 days until August 15`

It runs entirely in the cloud on **free GitHub Actions** — you do not need to
leave a computer on. Days are counted in the **Pacific/Honolulu** timezone, so
the number ticks down at Hawaii's local midnight.

Message rules:

| Days left | Message you receive    |
|-----------|------------------------|
| 42        | `42 days until August 15` |
| 1         | `1 day until August 15`   |
| 0         | `August 15 is here`       |
| past it   | *(nothing is sent)*       |

## Pick how it reaches you

There are two delivery options. **Pick one** — don't enable both, or you'll get
two messages a day.

| | **Slack (easiest)** | **Text message (SMS) via Twilio** |
|---|---|---|
| Setup effort | ~3 minutes | ~15 minutes |
| Accounts needed | A Slack workspace | A Twilio account |
| Cost | Free | Small per-text + monthly number fee |
| Phone number to buy | No | Yes |
| Secrets to add | 1 (`SLACK_WEBHOOK_URL`) | 4 |
| Python dependencies | None | `twilio` |
| Script / workflow | `countdown_slack.py` / `countdown-slack.yml` | `countdown.py` / `countdown.yml` |

If you don't specifically need an SMS to your phone, **Slack is the simpler
path** — jump to *Setup — Slack option* below and ignore the Twilio parts.
(There's no first-party "free WhatsApp" API, so Slack is the genuinely
no-cost messaging route here.)

After you've chosen, **delete the workflow you're not using** so it doesn't run:
- Using Slack? Delete `.github/workflows/countdown.yml`.
- Using SMS?   Delete `.github/workflows/countdown-slack.yml`.

---

## Repo folder structure

These files are meant to live at the **root of a GitHub repository**. (GitHub
only runs workflows found in `.github/workflows/` at the repo root.)

```
your-repo/
├── countdown.py                  # Shared date logic + the SMS (Twilio) sender
├── countdown_slack.py            # The Slack sender (reuses countdown.py's logic)
├── requirements.txt              # Python dependency: twilio (SMS path only)
├── test_countdown.py             # Offline tests for the logic (no accounts needed)
├── README.md                     # This file
└── .github/
    └── workflows/
        ├── countdown.yml         # Daily schedule for the SMS version
        └── countdown-slack.yml   # Daily schedule for the Slack version
```

Keep both scripts even if you only use one — `countdown_slack.py` imports the
date logic from `countdown.py`. Just delete the workflow you aren't using.

---

## How it works (the short version)

1. GitHub Actions wakes up once a day on a cron schedule.
2. It installs Python and the Twilio library.
3. It runs `countdown.py`, passing your four secrets in as environment
   variables.
4. The script figures out today's date **in Hawaii**, subtracts it from
   August 15, 2026, and texts you the result through Twilio.

The cron line is `7 18 * * *`. GitHub cron is always in **UTC**. Hawaii (HST)
is UTC−10 with no daylight saving, so 8:00 AM HST = **18:00 UTC**. We use
**18:07** because GitHub's scheduler can lag, and an off-the-hour minute tends
to fire sooner.

---

## Setup — Slack option (easiest)

Do this once; it takes about 3 minutes. You need a Slack workspace where you can
add an app (your own free workspace works fine).

### Part A — Create a Slack Incoming Webhook

A webhook is a private URL that posts a message to one channel when you send it
some text.

1. Decide which channel the message should land in (e.g. a private channel
   called `#countdown`, or your own DMs). Create it in Slack if needed.
2. Go to **https://api.slack.com/apps** and click **Create New App → From
   scratch**. Give it a name like `Countdown` and pick your workspace.
3. In the app's left sidebar, click **Incoming Webhooks** and toggle
   **Activate Incoming Webhooks** to **On**.
4. Click **Add New Webhook to Workspace**, choose the channel from step 1, and
   **Allow**.
5. Copy the **Webhook URL** it gives you. It looks like
   `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXX`.
   Treat it like a password — anyone with it can post to that channel.

### Part B — Put this code in a GitHub repository

Follow *Part B — Put this code in a GitHub repository* under the SMS setup
below (it's identical). Then delete `.github/workflows/countdown.yml` so only
the Slack workflow runs.

### Part C — Add the one Slack secret to GitHub

1. In your repo: **Settings → Secrets and variables → Actions → New repository
   secret**.
2. Name it exactly `SLACK_WEBHOOK_URL` and paste the webhook URL as the value.

### Part D — Test it now

1. Open the repo's **Actions** tab (enable workflows if prompted).
2. Click **Daily Slack Countdown → Run workflow → Run workflow**.
3. Within a minute the message should appear in your chosen Slack channel. If
   not, open the run's log — the script prints a clear error if the secret is
   missing.

That's the whole Slack setup. You can stop here and ignore the Twilio section.

---

## Setup — SMS option (Twilio)

You only need to do this once. It takes about 15 minutes. It assumes you have a
GitHub account but have never used Twilio or GitHub Actions.

### Part A — Create a Twilio account and get a phone number

Twilio is the service that actually sends the text message.

1. Go to **https://www.twilio.com/try-twilio** and sign up. It's free to start
   and includes trial credit.
2. Verify your email and your own mobile number when asked. On a **trial
   account, Twilio can only text phone numbers you have verified**, so make
   sure your personal cell number is verified (Twilio Console →
   **Phone Numbers → Manage → Verified Caller IDs**). This is fine for personal
   use; if you ever want to text un-verified numbers, upgrade the account by
   adding a little credit.
3. Get a Twilio phone number that can send SMS:
   - In the Twilio Console, go to **Phone Numbers → Manage → Buy a number**.
   - Check the **SMS** capability box and buy a US number (a few dollars/month,
     covered by trial credit to start).
   - Write the number down in full international format, e.g. `+18085551234`.
4. From the **Twilio Console dashboard** (the home page after you log in), copy
   these two values — you'll need them in Part C:
   - **Account SID** (starts with `AC...`)
   - **Auth Token** (click to reveal). Treat this like a password.

You now have four pieces of information:

| What                | Looks like        | Where it came from               |
|---------------------|-------------------|----------------------------------|
| Account SID         | `ACxxxxxxxx...`   | Twilio dashboard                 |
| Auth Token          | `your-secret`     | Twilio dashboard (click reveal)  |
| Twilio number (FROM)| `+18085551234`    | The number you bought            |
| Your phone (TO)     | `+18085550000`    | Your own verified cell number    |

### Part B — Put this code in a GitHub repository

1. On GitHub, click **New repository**, give it a name like `sms-countdown`,
   and create it (private is fine).
2. Add these files to it. The easiest path:
   - Download/copy the files from this folder.
   - Make sure the layout matches the **Repo folder structure** above — in
     particular, `countdown.yml` must be at `.github/workflows/countdown.yml`
     in the repo root.
3. Commit and push. If you're doing it from your computer:
   ```bash
   git init
   git add .
   git commit -m "Add daily SMS countdown"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sms-countdown.git
   git push -u origin main
   ```
   (Or just drag-and-drop the files into the repo using GitHub's web uploader.)

### Part C — Add your four secrets to GitHub

Secrets are encrypted values GitHub injects at run time. They never appear in
your code.

1. In your repo on GitHub, go to **Settings → Secrets and variables → Actions**.
2. Click **New repository secret** and add each of these four, one at a time.
   The **names must match exactly** (the workflow looks them up by name):

   | Secret name           | Value to paste                          |
   |-----------------------|-----------------------------------------|
   | `TWILIO_ACCOUNT_SID`  | Your Account SID (`AC...`)              |
   | `TWILIO_AUTH_TOKEN`   | Your Auth Token                         |
   | `TWILIO_FROM_NUMBER`  | Your Twilio number, e.g. `+18085551234` |
   | `MY_PHONE_NUMBER`     | Your cell number, e.g. `+18085550000`   |

   Use full international format for the phone numbers (a `+`, country code,
   then the number, no spaces or dashes).

### Part D — Test it right now (don't wait until morning)

1. In your repo, open the **Actions** tab.
2. If GitHub asks you to enable workflows for the repo, click to enable them.
3. Pick **Daily SMS Countdown** in the left sidebar.
4. Click **Run workflow → Run workflow** (this is the manual trigger).
5. Within a minute you should get a text. If you don't, click into the run and
   read the log — the script prints a clear error if a secret is missing.

That's it. From now on it runs by itself every morning until August 15, 2026,
then goes quiet.

---

## Running the tests locally (optional)

No Twilio account or secrets needed — these only check the date math and
wording:

```bash
pip install -r requirements.txt
python test_countdown.py
# or, if you have pytest:  python -m pytest
```

---

## Common questions

**The text arrives a bit after 8:00 AM — is that normal?**
Yes. GitHub's free scheduler is best-effort and can be a few minutes (sometimes
more) late, especially at the top of the hour. That's why we use `:07`.

**It stopped after a couple of months of inactivity.**
GitHub disables scheduled workflows on repos with **60 days of no commits**.
Just push any small commit, or click *Run workflow* once, to re-enable it.

**I want a different target date or wording.**
Edit `TARGET_DATE` and `TARGET_LABEL` near the top of `countdown.py`.

**Will this cost money?**
GitHub Actions is free for this (a few seconds a day). Twilio charges a small
amount per SMS and a small monthly fee for the number, covered by trial credit
to start.
