# Airbnb Review Responder — Ready-to-Use Prompts

Copy/paste prompts for **Claude in Chrome** (or the Claude Desktop app with
Computer Use). Run these in the browser tab where you are **already logged into
Airbnb** — that is the only place a Claude can see your live account. This web
chat cannot reach your browser.

> Safety: keep these **read-and-draft only**. Never let the agent submit,
> post, or change account settings without your review. Don't run it on a
> login/password screen. Airbnb may flag automated activity — go slow and stay
> supervised.

---

## Prompt 1 — Find unreviewed guests and draft their reviews

Open your Airbnb **Reviews** page first (Profile → Reviews → "Reviews to write"),
then paste:

> You are my Airbnb hosting assistant working in this browser tab.
>
> 1. **Find who needs a review.** Read my Airbnb Reviews page in this tab. List
>    every past guest I have **not yet reviewed** — name and stay dates. Use the
>    "Reviews to write" / pending section if it exists.
> 2. **Learn each guest.** For each one, open their reservation/message thread
>    and pull **one specific, true detail** (a birthday trip, a dog, spotless
>    checkout, great communication). Never invent details — if there's nothing
>    specific, keep it warm and general.
> 3. **Rate honestly, then draft.** Quietly rate each guest 1–5 on cleanliness,
>    communication, respecting house rules, and care of the home. Then write a
>    **short, warm review** for each. Rules for every draft:
>    - 5th-grade reading level — short sentences, simple words.
>    - Short and sweet — 2 to 4 sentences.
>    - Say specific amazing things and use the real detail you found.
>    - Invite them back.
>    - Include this exact line: **"Refer a friend who books and you get $200 —
>      and they get 10% off their first stay."**
> 4. **Output a clean list**, one guest per block: name + dates, the specific
>    detail used, and a ✅ ready-to-paste review (or review-*request* if I still
>    need to ask them).
>
> Do NOT submit or post anything. Draft it and show me so I can paste each one
> myself. Ask before any action that changes my account.

If it can't find the list, add: *"Go to airbnb.com/reviews and check the
'Reviews to write' tab."*

---

## Prompt 2 — New-booking fast reply (answer a guest in under a minute)

Use this when a new inquiry or booking comes in. Works best after you've filled
out `listing-qa-knowledge-base.md` so answers are accurate.

> A guest just messaged me on Airbnb (see the open thread in this tab). Using
> ONLY the facts in the knowledge base I gave you (below), write a warm reply
> that:
> - Answers their question directly and correctly.
> - Is 5th-grade reading level, short and friendly.
> - If I don't have the answer in the knowledge base, say so plainly and flag it
>   for me instead of guessing.
> - Ends with a warm welcome and, if it fits naturally, the referral line:
>   "Refer a friend who books and you get $200 — and they get 10% off."
>
> Show me the draft. Do not send it until I say go.
>
> [Paste the contents of listing-qa-knowledge-base.md here]

---

## Prompt 3 — Scrub my listing into a Q&A sheet

Open your **listing page** (the public view, or your listing editor), then paste:

> Read my Airbnb listing in this tab. Pull out every fact a guest might ask
> about and fill in this template: address/area, check-in & check-out times,
> self/host check-in method, wifi, parking, pets, smoking, guest count, bedrooms
> & beds, bathrooms, kitchen, laundry, AC/heat, pool/hot tub, house rules, quiet
> hours, trash day, local tips, and anything unusual. If something isn't stated,
> mark it "UNKNOWN — ask host." Output as clean Markdown I can save.
