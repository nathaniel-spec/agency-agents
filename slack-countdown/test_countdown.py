"""Quick tests for the countdown logic.

Run with:  python -m pytest    (or just:  python test_countdown.py)

These tests cover the date math and message wording without ever touching
Slack, so they need no webhook URL and no network.
"""

from datetime import datetime
from zoneinfo import ZoneInfo

from countdown import days_remaining, build_message, TIMEZONE


def at(year, month, day, hour=12):
    """Helper: a timezone-aware Hawaii datetime."""
    return datetime(year, month, day, hour, tzinfo=TIMEZONE)


def test_days_remaining_counts_whole_days():
    assert days_remaining(at(2026, 8, 13)) == 2
    assert days_remaining(at(2026, 8, 14)) == 1
    assert days_remaining(at(2026, 8, 15)) == 0
    assert days_remaining(at(2026, 8, 16)) == -1


def test_day_boundary_is_hawaii_midnight():
    # 11:00 PM in Hawaii on Aug 14 is still "1 day" left...
    assert days_remaining(at(2026, 8, 14, 23)) == 1
    # ...but the same instant is already Aug 15 in UTC, which we must ignore.
    instant = datetime(2026, 8, 14, 23, tzinfo=TIMEZONE)
    assert instant.astimezone(ZoneInfo("UTC")).date().day == 15


def test_message_wording():
    assert build_message(5) == "5 days until August 15"
    assert build_message(1) == "1 day until August 15"      # singular
    assert build_message(0) == "August 15 is here"
    assert build_message(-1) is None                        # send nothing


if __name__ == "__main__":
    test_days_remaining_counts_whole_days()
    test_day_boundary_is_hawaii_midnight()
    test_message_wording()
    print("All tests passed.")
