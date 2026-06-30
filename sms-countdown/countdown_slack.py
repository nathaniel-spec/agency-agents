#!/usr/bin/env python3
"""
Daily countdown to August 15, 2026 — delivered to Slack.

This is the easy alternative to the Twilio/SMS version. Instead of a phone
number it posts a message to a Slack channel through an "Incoming Webhook"
URL. It needs no third-party packages at all (only the Python standard
library) and only one secret: SLACK_WEBHOOK_URL.

The date math, timezone handling, and message wording are shared with
``countdown.py`` — this file only swaps the delivery method.

Message rules (identical to the SMS version):
  * N > 1   -> "N days until August 15"
  * N == 1  -> "1 day until August 15"
  * N == 0  -> "August 15 is here"
  * N < 0   -> post nothing (the date has passed)
"""

import json
import urllib.request
from datetime import datetime

# Reuse the exact same logic as the SMS script so the two can never drift.
from countdown import (
    TIMEZONE,
    TARGET_DATE,
    days_remaining,
    build_message,
    get_required_env,
)


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


def main() -> None:
    # Timezone-aware from the start: no naive datetimes anywhere.
    now = datetime.now(TIMEZONE)
    days = days_remaining(now)
    body = build_message(days)

    if body is None:
        print(f"Target date {TARGET_DATE} has passed ({days} days). Nothing to send.")
        return

    send_slack(body)


if __name__ == "__main__":
    main()
