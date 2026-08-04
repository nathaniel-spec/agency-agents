# Eastern WA Office Refinance — Lender Outreach Kit

**Deal profile:** $1M–$5M · investment / tenant-leased office · refinance · Spokane / Eastern Washington

---

## Read this first: two problems with the SMS-blast plan

I built the lender list you asked for. But I want to be straight with you about the outreach channel before you spend money on a texting platform, because there are two independent problems and either one alone sinks it.

### 1. The numbers aren't textable

Every phone number a commercial lender publishes — main lines, commercial lending center lines, even the "direct dials" for named relationship managers — is a **desk landline**. Carriers silently drop SMS sent to landlines. You don't get a bounce; the message just never arrives and you conclude the lender ignored you.

Commercial loan officers' actual mobile numbers are essentially never published. You get them *after* the first conversation, when they hand you a card. So SMS can't be your first touch — it's a second-touch channel by nature.

This isn't a scraping problem I can engineer around. The data doesn't exist publicly.

### 2. Washington has a specific anti-texting statute, and your targets are all in Washington

**[RCW 19.190.060](https://app.leg.wa.gov/rcw/default.aspx?cite=19.190.060)** (the Commercial Electronic Mail Act, "CEMA") prohibits sending a commercial text message to any Washington cell number without the recipient's **clear and affirmative advance consent**. A violation is a per se violation of the Consumer Protection Act, with **damages up to $500 per message**. There is no small-sender exemption and no B2B carve-out.

Washington courts have recently **broadened** CEMA's reach — an [Arnold & Porter advisory](https://www.arnoldporter.com/en/perspectives/advisories/2025/10/washington-courts-broaden-cema-liability) covers rulings extending liability to employment-related texts, meaning "commercial" is being read expansively rather than narrowly.

There's a reasonable argument you fall outside it: CEMA targets messages promoting goods or services *for sale or lease*, and you're a buyer soliciting a quote, not a seller promoting anything. That argument is real. But it is an argument you'd be making after receiving a demand letter, not a safe harbor you can rely on in advance — and given the courts' current direction, I wouldn't build a campaign on it.

Separately, federal **TCPA** rules apply to texts to wireless numbers regardless of B2B status, and any bulk sending through Twilio/Telnyx/etc. requires **A2P 10DLC brand and campaign registration** before carriers will deliver your traffic at all. That's a multi-day approval process, and "cold outreach to scraped numbers" is a use case carriers routinely reject at registration.

### What I'd do instead

For 18 lenders, SMS is the wrong tool regardless of legality — it's a channel built for volume, and you have a list you could work personally in an afternoon. The sequence below will outperform a text blast substantially, because commercial lending is relationship-underwritten and a well-framed email with your deal metrics gets forwarded to a credit officer. A cold text does not.

Use SMS where it genuinely shines: **follow-up with lenders who've already engaged and given you their mobile.** At that point you have consent, the number is real, and a text is welcome. Templates for that are below.

---

## The outreach sequence that actually works

**Week 1 — Tier 1, personally.** Six lenders: Washington Trust, Banner, STCU, Gesa, Numerica, and one broker (CLS CRE). Call the commercial line, ask for a commercial relationship manager who handles investment CRE, and send the one-page summary the same day. Local portfolio lenders are your best pricing *and* your best odds on office.

**Week 2 — Tier 2 + broker quote.** Adds Columbia, Mountain West, First Interstate, ICCU. Run one broker in parallel purely for price discovery — it tells you whether your local quotes are competitive.

**Week 3 — Tier 3 and fallbacks**, only if Tier 1–2 comes back thin or the terms are bad.

**Throughout:** log every quote in the comparison sheet below. Lenders move on rate when they know they're being shopped, and knowing the spread is most of your negotiating leverage.

---

## First-touch email template

Subject is doing real work here — it needs to signal "qualified deal," not "shopping around."

> **Subject: Office refinance inquiry — $[X.X]M, [submarket], [XX]% occupied**
>
> Hi [Name],
>
> I'm refinancing a [SF] SF office property in [city/submarket]. Looking for a conventional, non-owner-occupied CRE refinance in the $[X]M–$[X]M range.
>
> Quick numbers:
> - Current occupancy: [XX]% · WALT [X.X] years
> - T-12 NOI: $[XXX,XXX]
> - Requested LTV: [XX]%
> - Estimated DSCR at [X.XX]% : [X.XX]x
> - Existing loan matures [date]
>
> Is this something [Lender] is actively quoting right now? Happy to send the full rent roll, T-12, and PSA/appraisal if it's a fit.
>
> [Your name] · [phone] · [email]

Leading with occupancy, WALT, and DSCR is deliberate. Office is the hardest asset class to finance in 2026, and a lender's first question is always whether the rent roll holds up. Answering it before they ask moves you ahead of everyone who sent a vague inquiry.

## Voicemail script (30 seconds)

> Hi [Name], this is [Your name]. I'm refinancing an office property in [submarket] — about $[X]M, [XX]% occupied, non-owner-occupied. Wanted to see if [Lender] is quoting office right now. I'll follow up by email with the numbers. Reach me at [phone]. Thanks.

## SMS templates — for lenders who have already engaged

Use these **only** after a lender has responded and given you a mobile number. That's consent, and it's a real number.

**Follow-up after sending a package:**
> Hi [Name] — [Your name] re: the [submarket] office refi. Sent the rent roll + T-12 Tuesday. Any read on whether it fits your box? Happy to jump on a call.

**Nudge on a pending quote:**
> Hi [Name] — checking in on the term sheet for [property]. I'm comparing a few options this week and want to make sure [Lender] is in the mix. Any timing estimate?

**Scheduling:**
> Hi [Name] — are you free [day] at [time] for 15 min on the [submarket] refi? Can also do [alt]. — [Your name]

Keep them short, always self-identify, and always reference the existing thread. Include opt-out language ("Reply STOP to opt out") if you ever route these through a platform rather than your own phone.

---

## Quote comparison sheet

Track every response here. The spread is your leverage.

| Lender | Contact | Date | Rate | Term / Amort | LTV | DSCR req. | Fees | Prepay | Recourse | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |

**Don't compare on rate alone.** On a $1M–$5M office note the things that move real money are:

- **Recourse vs. non-recourse** — often worth more than 50bps of rate
- **Prepayment structure** — step-down vs. yield maintenance vs. defeasance
- **Amortization** — 25yr vs. 30yr changes your DSCR and your cash flow materially
- **Rate reset terms** — most portfolio lenders write 5- or 7-year fixed with a reset, not 30-year fixed
- **Origination fees** — typically 0.5%–1.0%; negotiable, especially if you're bringing deposits

---

## Rate benchmarks (August 2026)

Context for judging quotes — these are **market benchmarks, not offers**, and none are office-specific:

- General commercial mortgage rates start around **5.70%–5.74%** ([Select Commercial](https://selectcommercial.com/commercial-mortgage-rates.php), Aug 3 2026)
- Washington commercial mortgage rates start around **5.57%**; Seattle around **5.63%** ([Select Commercial WA](https://selectcommercial.com/washington-commercial-mortgage.php))
- CMBS around **6.63%**
- Broad WA commercial range across all programs: **5.07%–12.75%** ([Clearhouse](https://www.clearhouselending.com/commercial-loans/washington))

**Expect to price above these.** Those headline numbers are multifamily-weighted, and multifamily is the most favored asset class there is. Investment office in a secondary market is at the other end. Realistically budget for a **meaningful spread over the headline rate**, with the exact premium driven by your occupancy, WALT, and tenant credit quality. A lender quoting you the multifamily headline number on an office deal is quoting a teaser, not a term sheet.

One genuine tailwind: office fundamentals turned positive in mid-2025 for the first time since 2020, with demand growing through Q1 2026 and Class A/B cap rates compressing to roughly 7.6%/8.0%. Class C expanded to 8.70%–9.40%, so if your asset is Class C expect materially tougher treatment.

---

## Documents to have ready before you call

Having these assembled is the single biggest differentiator between borrowers who get quoted fast and borrowers who get slow-rolled:

- Rent roll (current, with lease expiration dates)
- T-12 operating statement + 3 years historical
- Current mortgage statement and payoff/maturity date
- Property tax and insurance statements
- Personal financial statement + 3 years personal/entity tax returns
- Entity docs (operating agreement, EIN, certificate of good standing)
- Recent appraisal if you have one, plus any environmental reports
- Capital improvements schedule and major tenant lease abstracts

---

## Sources

- [RCW 19.190.060 — Commercial electronic text message prohibition](https://app.leg.wa.gov/rcw/default.aspx?cite=19.190.060)
- [Arnold & Porter — Washington Courts Broaden CEMA Liability](https://www.arnoldporter.com/en/perspectives/advisories/2025/10/washington-courts-broaden-cema-liability)
- [Select Commercial — Commercial Mortgage Rates](https://selectcommercial.com/commercial-mortgage-rates.php)
- [Select Commercial — Washington Commercial Mortgage](https://selectcommercial.com/washington-commercial-mortgage.php)
- [Clearhouse Lending — Commercial Real Estate Loans in Washington](https://www.clearhouselending.com/commercial-loans/washington)
- [STCU — Commercial Real Estate Loans](https://stcu.org/business/loans/commercial-real-estate)
- [Washington Trust Bank — Business Loans](https://www.watrust.com/commercial/lending/business-loans)
- [Banner Bank — Spokane & North Idaho Commercial Bankers](https://commercial.bannerbank.com/spokane--north-idaho.html)
- [Gesa Credit Union — Contact a Commercial Loan Officer](https://www.gesa.com/contents/commercial-banking-contact-a-loan-officer/)
- [Numerica — Commercial Banking Team](https://www.numericacu.com/business/commercial-banking-team)
- [Commercial Lending Solutions — Office Loans Spokane](https://clscre.com/property/office-spokane.html)

*Not legal advice — confirm CEMA/TCPA questions with a Washington attorney before any texting campaign.*
