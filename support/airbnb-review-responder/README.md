# 🏡 Airbnb Review Responder — Reference Kit

Everything to help a short-term rental host thank guests, ask for reviews,
respond to reviews, and answer new bookings fast — in a warm, personal,
5th-grade-level voice, with a built-in referral offer.

## What's here
| File | Use it for |
|------|-----------|
| [`../support-airbnb-review-responder.md`](../support-airbnb-review-responder.md) | The agent personality (identity, rules, workflow) |
| [`prompts.md`](prompts.md) | Copy/paste prompts for **Claude in Chrome** — find unreviewed guests, fast-reply to bookings, scrub your listing |
| [`listing-qa-knowledge-base.md`](listing-qa-knowledge-base.md) | Fill-in sheet of your listing facts — the "brain" for accurate guest answers |
| [`templates.md`](templates.md) | Review request, review response, and welcome message templates + guest rating grid |

## The referral offer (always the same)
**Refer a friend who books → the referrer gets $200, the new guest gets 10% off
their first stay.**

## How to use it
1. **Fill in** `listing-qa-knowledge-base.md` (or run Prompt 3 to auto-draft it).
2. **Install Claude in Chrome** (paid plan) so a Claude can see your logged-in
   Airbnb — this web chat cannot reach your browser.
3. **Run Prompt 1** on your Reviews page to find unreviewed guests and draft
   warm reviews.
4. **Run Prompt 2** on new booking messages for fast, accurate replies.
5. **Keep it review-and-approve** — you paste/send, so nothing posts without you.

## Important limits (honest notes)
- Airbnb has **no public messaging API** and blocks bots. A true "reply within
  one minute, automatically" system needs an official Airbnb partner tool
  (Hospitable, Hostaway, Guesty). This kit is the content/brain those tools —
  or you — plug in.
- Only say things that are **true**. Never invent guest details.
