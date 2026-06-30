#!/usr/bin/env python3
"""
Daily Slack countdown to August 15, 2026.

Once a day this script works out how many whole days remain until
August 15, 2026 (counted in the Pacific/Honolulu timezone) and posts a
single message to a Slack channel via an "Incoming Webhook".

Message rules:
  * N > 1   -> "N days until August 15"
  * N == 1  -> "1 day until August 15"
  * N == 0  -> "August 15 is here"
  * N < 0   -> post nothing (the date has passed)

All the date math uses Python's ``zoneinfo`` so the day boundary lands at
local midnight in Hawaii, never at some arbitrary server hour. No naive
datetimes are used anywhere.

This script uses only the Python standard library — there are no
third-party dependencies to install. The Slack webhook URL is read from an
environment variable (supplied by a GitHub Actions secret) and is never
hardcoded.
"""

import os
import sys
import json
import urllib.request
from datetime import datetime, date
from zoneinfo import ZoneInfo

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

# The day we are counting toward. Change this single line to reuse the
# script for a different target date.
TARGET_DATE = date(2026, 8, 15)

# Human-friendly label used inside the message body.
TARGET_LABEL = "August 15"

# We count days as they are experienced in Hawaii, which is UTC-10 all
# year (Hawaii does not observe daylight saving time).
TIMEZONE = ZoneInfo("Pacific/Honolulu")


# ---------------------------------------------------------------------------
# Core logic
# ---------------------------------------------------------------------------

def days_remaining(now: datetime) -> int:
    """Return the number of whole days from ``now`` until the target date.

    ``now`` must be a timezone-aware datetime. We take its calendar date in
    Hawaii and subtract, so the result only changes at local midnight.

    Examples (target = Aug 15):
        Aug 13  ->  2
        Aug 14  ->  1
        Aug 15  ->  0
        Aug 16  -> -1
    """
    today_in_hawaii = now.astimezone(TIMEZONE).date()
    return (TARGET_DATE - today_in_hawaii).days


def build_message(days: int) -> str | None:
    """Turn a day count into the text to post, or ``None`` to post nothing."""
    if days < 0:
        # The target date is in the past. Nothing to say.
        return None
    if days == 0:
        return f"{TARGET_LABEL} is here"
    if days == 1:
        # Singular: "1 day", not "1 days".
        return f"1 day until {TARGET_LABEL}"
    return f"{days} days until {TARGET_LABEL}"


# ---------------------------------------------------------------------------
# Sending
# ---------------------------------------------------------------------------

def get_required_env(name: str) -> str:
    """Read an environment variable or exit with a clear error if it's missing."""
    value = os.environ.get(name)
    if not value:
        sys.exit(
            f"ERROR: required environment variable {name!r} is not set. "
            "Add it as a GitHub Actions secret (see README)."
        )
    return value


def send_slack(body: str) -> None:
    """Post ``body`` to Slack via an Incoming Webhook URL."""
    webhook_url = get_required_env("SLACK_WEBHOOK_URL")

    # Slack Incoming Webhooks accept a simple JSON payload; "text" is the
    # message that shows up in the channel.
    payload = json.dumps({"text": body}).encode("utf-8")
    request = urllib.request.Request(
        webhook_url,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    with urllib.request.urlopen(request) as response:
        # Slack returns the literal text "ok" (HTTP 200) on success.
        result = response.read().decode("utf-8").strip()
        print(f"Slack responded {response.status}: {result!r} for {body!r}")


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main() -> None:
    # ``datetime.now(TIMEZONE)`` is timezone-aware from the start, so the
    # whole program stays free of naive datetimes.
    now = datetime.now(TIMEZONE)
    days = days_remaining(now)
    body = build_message(days)

    if body is None:
        print(f"Target date {TARGET_DATE} has passed ({days} days). Nothing to send.")
        return

    send_slack(body)


if __name__ == "__main__":
    main()
