#!/usr/bin/env python3
"""
Daily SMS countdown to August 15, 2026.

Once a day this script works out how many whole days remain until
August 15, 2026 (counted in the Pacific/Honolulu timezone) and sends a
single text message about it via Twilio.

Message rules:
  * N > 1   -> "N days until August 15"
  * N == 1  -> "1 day until August 15"
  * N == 0  -> "August 15 is here"
  * N < 0   -> send nothing (the date has passed)

All the date math uses Python's ``zoneinfo`` so the day boundary lands at
local midnight in Hawaii, never at some arbitrary server hour. No naive
datetimes are used anywhere.

Twilio credentials and phone numbers are read from environment variables
(supplied by GitHub Actions secrets) and are never hardcoded.
"""

import os
import sys
from datetime import datetime, date
from zoneinfo import ZoneInfo

from twilio.rest import Client

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
    """Turn a day count into the text to send, or ``None`` to send nothing."""
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


def send_sms(body: str) -> None:
    """Send ``body`` as an SMS from the Twilio number to the personal number."""
    account_sid = get_required_env("TWILIO_ACCOUNT_SID")
    auth_token = get_required_env("TWILIO_AUTH_TOKEN")
    from_number = get_required_env("TWILIO_FROM_NUMBER")
    to_number = get_required_env("MY_PHONE_NUMBER")

    client = Client(account_sid, auth_token)
    message = client.messages.create(body=body, from_=from_number, to=to_number)
    print(f"Sent message {message.sid}: {body!r}")


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

    send_sms(body)


if __name__ == "__main__":
    main()
