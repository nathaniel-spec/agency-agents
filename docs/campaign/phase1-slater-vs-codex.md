# [CODEX] Phase 1: $50,000 campaign, Slater versus Codex

Status: **DRAFTED for Nathan's review. Phase 2 NOT AUTHORIZED.** Research checked November 15, 2026, Pacific time. No campaign assets, automations, contacts, payments, bookings, domains or live pages were created or changed. The repository branch and this analysis are the only implementation in scope.

## 1. Recommendation and decision

**INFERRED: choose a conditional Hybrid, 85% conviction as an architectural judgment, not a revenue probability.** Use Slater's existing website, contact records, email, booking, checkout and members area where verified. Codex supplies original copy and the smallest custom quiz, application behavior, attribution and integration pieces that native tools cannot demonstrate. Use ManyChat for Instagram comment-to-DM. Reuse an existing approved SMS provider; do not create a new sender as the seven-day critical path.

Slater-only cannot yet be recommended for the exact specification: important native behaviors are **UNVERIFIED**. A fully custom replacement adds needless payment, calendar, delivery and operational risk. Hybrid also remains conditional on supported server integration and test isolation. If those fail, use an already authorized external CRM/automation host with demonstrated endpoints. Do not build against guessed Slater endpoints or silently omit requirements.

**UNKNOWN: $50K in seven days is not currently a defensible forecast.** Offer, price, audience, proof, budget, dates and closer capacity are missing. The scenario math below describes necessary conditions, not expected performance. The supplied teardown itself estimates roughly four to six weeks for its complete ecosystem with one operator and video help. Seven days of selling and seven days to create every asset are different commitments. The full A through H specification in seven days requires ready assets, quick owner decisions, supported integrations and sufficient production capacity. Otherwise change the start date or explicitly approve a narrower launch; this plan does not remove requirements.

Approval of Phase 1 would permit only the agreed Phase 2 test build. It would not approve public publishing, real messages, real charges or launch. Phase 3 must pass and Nathan must write **GO** before live launch.

## 2. Slater identity, account and evidence

### Precisely which Slater

**VERIFIED:** Nathan's current naming record identifies **Ben Slater's Systems for Business**, official site [usesfb.ai](https://usesfb.ai/), app [usesfb.ai/admin](https://usesfb.ai/admin). The official site's HTML describes an integrated online-business platform containing website, funnels, checkout, CRM, email, bookings, members and reporting. It is distinct from the Webflow JavaScript tool at [slater.app](https://slater.app/), and from Nathan's separate custom SV Hub. The latter two are outside this audit.

**VERIFIED by connected read:** `workspaces_list` and `workspace_get` identify the current owner workspace as `vita-recruiters`, ID 5, business Vita Talent Recruiting, currency USD, timezone America/Los_Angeles. The workspace listing labels its tier `agency`; that is not proof of a particular paid subscription or invoice. The campaign's intended company remains **UNKNOWN** because the offer is blank. Do not automatically attach a new offer to Vita just because this is the connected workspace.

**VERIFIED official advertised pricing:** the November 15 public site's JavaScript describes one Workspace plan at **US$97/month plus US$10/month per additional team member**, and free software while an eligible SFB client. Source: [official site](https://usesfb.ai/#pricing), public asset [`index-CmwxwFWc.js`](https://usesfb.ai/assets/index-CmwxwFWc.js), pricing block inspected read-only. This asset is a dated citation and may be replaced. **UNKNOWN:** Nathan's actual billed plan, client entitlement, seats, credit balances, email allowances, AI usage costs, video overages and payment processing fees. Check Billing before agreeing a budget. No upgrade or purchase is authorized here.

### Documentation and API reference coverage

**VERIFIED:** this Codex session exposes native SFB MCP tools with per-operation documentation. Read-only calls succeeded against the intended workspace. Tool documentation is a legitimate official capability source, but a described write path has not thereby passed an end-to-end campaign test.

**UNKNOWN / UNVERIFIED:** no standalone public documentation or REST/OpenAPI reference was confirmed. `/docs` and `/api` were candidate probes, not verified reference URLs; the website uses an app shell and an HTTP 200 alone does not establish a docs page. The web reader could not open these URLs; an ordinary public HTTP read retrieved the home page and public pricing asset. Do not cite guessed documentation endpoints as real APIs.

Before Phase 2, obtain the current **Settings → AI & API** documentation/reference link or vendor documentation covering external submissions, authentication/scopes, webhook delivery/signatures/retries, limits, sandbox isolation and API versioning. Use managed access or a secure key box, never secrets in chat or Git. Native MCP access already works, so a Slater password is not needed for Phase 1. General API availability advertised on the site does not verify every required endpoint.

### Evidence register

| ID | Evidence inspected | What it establishes and its limit |
|---|---|---|
| R1 | [Full supplied teardown](https://github.com/nathaniel-spec/agency-agents/blob/claude/upbeat-cannon-33c3fh/research/nick-puru-funnel-intel/index.html), research commit `1a6376c598b63fcffbc50763359a9a00fc8c4967` | Team's November 15 public observations, inferences and unknowns; not this campaign's results. |
| R2 | [Exact application definition](https://github.com/nathaniel-spec/agency-agents/blob/claude/upbeat-cannon-33c3fh/research/nick-puru-funnel-intel/evidence/forms/typeform_eUf7s5V4.txt) | Questions, hidden fields, routing and partial-response integration setting. Configuration is not proof that an abandoned person's message was delivered. |
| R3 | [Form walks](https://github.com/nathaniel-spec/agency-agents/tree/claude/upbeat-cannon-33c3fh/research/nick-puru-funnel-intel/evidence/form-walks) and [page data](https://github.com/nathaniel-spec/agency-agents/tree/claude/upbeat-cannon-33c3fh/research/nick-puru-funnel-intel/evidence/page-data) | Local copies inspected, including growth-plan, audit, workshop, application, VSL and pre-call evidence; final submissions blocked in source research. |
| S1 | Native `workspaces_list`, `workspace_get`, November 15 read | Owner workspace, currency/timezone, general weekly call cap 4, notice 24h. No billing invoice verified. |
| S2 | Native `domain_get`, `link_types_list`, `forms_list`, `forms_get(form_id=106)` | Existing domain connection; optional phone exists in a saved form; choice/long/text/email/tel fields and real grading rules; call-specific limits/settings. No new submit/booking performed. |
| S3 | Native `forms_template(name=blank)` | Default contact definition and grading schema. Default phone is required and default help text is unsuitable to copy as consent. Existing saved form proves optional phone is possible. |
| S4 | Native `email_numbers(days=7)`, `email_templates_list` | Connected SFB list has **0 subscribers**, 0 sends in this window; several application/booking/reminder templates lack an approved version. This does not mean Nathan's other lists are empty. |
| S5 | Official native tool descriptions, enumerated below | Documented platform capability, not executed writes or an independent end-to-end test. |
| S6 | Official home HTML and public pricing asset, read November 15 | Platform identity, advertised price and vendor claim of round-robin lead assignment. Lead assignment is not proof of pooled-calendar booking. |

Source R1 marks actual DMs, nurture messages, webinar content, mentorship price and conversion rates UNKNOWN. Preserve those limits. Growth-plan step 5 was skipped by the source walker, so its exact original team-size interaction is UNKNOWN. The seven-day email/SMS cadence in the brief is a proposed requirement, not a verified competitor sequence.

**VERIFIED structural difference:** the competitor routes applicants unwilling to commit to a call into the same downsell as low-income/not-ready applicants. Nathan explicitly requests nurture instead. Implement Nathan's requested branch if Phase 2 is approved. Do not copy the source's income guarantee or punitive no-reschedule wording.

## 3. Capability audit

`SUPPORTED` means the named subcapability is documented or observed. `PARTIAL` means some elements are supported and the remaining named elements are unresolved. `NOT SUPPORTED` requires affirmative evidence of absence or a documented restriction. `UNVERIFIED` means evidence is insufficient; it does not mean impossible. Evidence labels **VERIFIED / INFERRED / UNKNOWN** refer to the basis of a claim. No full campaign path is marked tested. Effort estimates are INFERRED: Low roughly 1 to 3 hours, Medium roughly half to one working day, High roughly 1 to 3 working days; not additive delivery promises.

| Requirement | Slater status | Evidence and exact coverage | Difficulty and closest workable path / check |
|---|---|---|---|
| Landing pages and funnel steps | SUPPORTED | VERIFIED docs: `site_save`, `site_page_save`, `site_document_write`, `funnel_save`; drafts and version history. | Medium. Native hosting, Codex-authored original pages. Test all navigation. |
| Custom domain | SUPPORTED | VERIFIED read S2: existing connected domain; `domain_get` and documented `domain_connect`. | Low if new approved subdomain; DNS changes to a live site require explicit scope. Leave existing live domain untouched in Phase 1. |
| Mobile layouts and mobile editing | PARTIAL | VERIFIED docs: `site_page_save` supports desktop/tablet/phone media queries; responsive output possible. UNKNOWN: editor usability on a phone. | Medium. Codex responsive code and real viewport QA; check native phone editor before promising mobile editing. |
| One-question screens, click advance, quiz branching | PARTIAL | VERIFIED S2/S3 choice fields and first-match grading. Official homepage advertises application steps. UNKNOWN: arbitrary per-question skip/jump and click-to-advance behavior. | High. Custom UI with server revalidation; test native unsaved grading via `forms_test` after approval. Grading is not screen branching. |
| Hidden fields and all UTMs/fbclid/fbp/fbc pass-through | PARTIAL | VERIFIED docs: `tracking_link`, `tracking_check`, attribution tools support source/campaign/click reporting. UNKNOWN: arbitrary hidden schema and all requested values stored through every form/booking/checkout hop. | High. Preserve all fields server-side in a campaign/session record and reconcile CRM; verify endpoint and cookie consent first. |
| Partial/abandoned application capture | UNVERIFIED | UNKNOWN: no demonstrated native partial-response API/event. `cart_emails_list` covers abandoned checkout, a different requirement. | High. First persist an anonymous draft; associate identity once supplied and disclosed. Custom autosave endpoint with supported CRM integration. Test abandonment, recovery, suppression and retention. |
| Personalized quiz results and private email link | PARTIAL | VERIFIED docs: arbitrary page HTML/scripts and email sequences. UNKNOWN: secure per-person result storage, token expiry and transactional link delivery from quiz answers. | High. Codex deterministic results and unguessable private token; no answers/PII in URL. Verify supported delivery API. |
| Calendar booking and qualification gating | SUPPORTED | VERIFIED S2 plus docs `link_types_create`, forms grading: green books, orange waits, red declined. | Medium. Confirm campaign-specific rules; no assumption red automatically goes to desired downsell. Enforce gate server-side, including direct calendar URL. |
| Round-robin booking, reminders, no-show handling | PARTIAL | VERIFIED vendor claims round-robin lead ownership; booking move/cancel/no-show tools and 24h email templates documented. UNKNOWN: pooled availability, exact 2h/10m reminders, no-show automation and owner assignment under concurrency. | High. Native if demonstrated; otherwise Calendly Teams, which documents round-robin and routing. Confirm all calendar/team entitlements. |
| CRM contacts and tags | SUPPORTED | VERIFIED docs `people_get`, `prospect_add`, `tags_list`, `person_tag_set`, `prospect_update`. | Medium. Use synthetic fixtures in a separate campaign/test scope after approval. Keep existing CRM authority and dedup rules. |
| Exact deal pipeline/stages | PARTIAL | VERIFIED docs prospect stage updates; forms have lead/prospect/customer/client categories. UNKNOWN: configurable Applied → Qualified → Booked → Showed → Offer made → Won/Lost plus No-show as actual deal stages and multiple opportunities per person. | Medium. Confirm stage schema; use existing authorized CRM deal pipeline if unsupported. Tags alone are not an equivalent deal history. |
| Email sequences and subscriber consent | SUPPORTED | VERIFIED docs `email_draft_save`, `email_preview`, `email_optin`, source triggers and opt-out handling. S4 shows native campaign/booking approvals still needed. | Medium. Runtime opt-in requires owner's systems API key, not an AI conversation. Confirm sender authentication, credits and whether per-person transactional merge data is supported. |
| SMS sequences, call/SMS consent, STOP, quiet hours | UNVERIFIED | UNKNOWN: no verified native SMS sending, bidirectional suppression or recipient-local scheduling contract. Timeline SMS logging is not a sending engine. | High. Existing approved SMS provider/CRM route, exact business/use case, consent audit, STOP and SKIP tests, local-hour enforcement. No claim that integration is already working. |
| Instagram keyword comment-to-DM | UNVERIFIED natively; third party documented | UNKNOWN native trigger; VERIFIED ManyChat official docs support keyword comment/private replies and tags [M1]. | Medium. ManyChat with correct Instagram identity/permissions; check duplicate triggers. A private reply/link click alone does not always open the 24h window. |
| Checkout, bump, downsell, payment plans | SUPPORTED in docs | VERIFIED `funnel_save` step routing, `funnel_get` bump/yes/no, `funnel_test_link`, `product_plan_set`, `product_plan_first_set`. New funnels documented to start in test mode. | Medium. Native checkout with Stripe, test all branches. No payment performed in Phase 1. |
| Processor integration and refunds | PARTIAL | VERIFIED docs identify Stripe/SamCart and payment/refund state. Stripe sandbox/refund APIs documented [P1 through P3]. UNKNOWN: this workspace's connection, modes, refund permissions and end-to-end ledger reconciliation. | Medium. Owner/provider dashboard for native refunds; Codex can prepare test/refund flow once exact authorized route verified. |
| Workshop registration, reminders, replay expiry | PARTIAL | VERIFIED forms/pages/email components. UNKNOWN: native timed event reminder scheduler, duplicate registrations, authenticated replay expiry or CDN expiry enforcement. | High. Existing workshop host plus custom timing/access gate. Server blocks replay at 72h; hiding a button is insufficient. |
| Community and course delivery | SUPPORTED basic; PARTIAL exact challenge | VERIFIED docs `members_area_save`, `members_lessons_list`, `members_access_set`, product access. UNKNOWN: submit → human rubric review → roadmap unlock, permissions and workload. | Medium/High. Native members area if tested; human reviewer with explicit rubric and approved unlock action. |
| Pixel, GA4 and browser custom events | PARTIAL | VERIFIED docs site head/scripts editable; native attribution exists. UNKNOWN: native installation/settings and consistent tags on checkout/member/cross-domain pages. | Medium. One GA4 property across owned pages; cross-domain configuration [G1]. |
| Meta CAPI, dedup, server step view/complete/error | UNVERIFIED | UNKNOWN native CAPI support/event IDs, receipt logs and each step's server events. Source competitor hidden fields do not prove their CAPI works. | High. Codex relay if supported runtime/keys; matched browser `eventID` and server `event_id` plus same event name [T1]. |
| APIs and server webhooks | PARTIAL | VERIFIED authenticated read MCP, documented draft writes; site advertises MCP/API. UNKNOWN external submission contracts, webhook signatures/retries, outbound events, public REST reference, rate limits and sandbox scopes. | High. Integration spike after approval. No invented endpoints; require docs or supported connector. |
| Daily reporting dashboards | PARTIAL | VERIFIED docs `workspace_metrics`, `funnel_numbers`, `vsl_page_numbers`, `email_report`, `attribution_report`, `score_board`. UNKNOWN exact dashboard's application starts/completions, campaign cohort joins and source-level CAC completeness. | Medium/High. Reconcile native outputs with event/payment ledger; missing coverage stays UNKNOWN, never zero. |
| Team, closers/setters, tier and monthly cost | PARTIAL | VERIFIED docs `team_get`, `team_invite` with sales/marketing/delivery roles; advertised Workspace $97 + $10/additional person. S1 shows owner access. UNKNOWN actual bill, staff permissions, booking pooling and usage costs. | Low/Medium. Billing and role checks; do not invite anyone before approval. |

No blanket `NOT SUPPORTED` labels are justified solely by a missing tool name. One explicit documented limitation: `email_optin` cannot record runtime opt-in through an AI conversation; it requires the owner's own systems API key. A backend or native form must record the person's actual act of consent.

## 4. What Codex can do in this setup

**VERIFIED now:** repository read/write tooling, local Git, authenticated GitHub via Composio, native SFB reads and local file/code production. The requested branch is isolated from main. Phase 1 uses read-only platform calls. I used the installed Composio CLI workflow for GitHub discovery/access; SFB has a sufficient native connector and was not available under the attempted Composio `sfb` toolkit slug.

**AVAILABLE, NOT TESTED AGAINST SLATER UI:** browser/computer automation and standing task-related saved-Chrome-login permission. If UI work is needed, use the required Work Chrome identity and verify the account. It is inaccurate to say Codex categorically cannot operate the UI, but no Slater UI workflow was exercised in this audit. Native APIs are preferred. Device unlock/MFA and unsupported UI actions may require Nathan.

**CAN PRODUCE AFTER PHASE 1 APPROVAL:** original responsive pages; deterministic quiz and results; application validation/branching/autosave; consent records and secure result links; webhook endpoints and retry/idempotency controls; Meta CAPI relay and GA4 event mapping; original copy, VSL/objection scripts, workshop copy, calendar files, all email/SMS messages, content calendar, strategy-call script and objection sheet; CRM field/config JSON; meaningful branch, payment, calendar, consent and tracking QA scripts. These are capabilities, not a claim that Phase 2 has been built or integrated.

**CANNOT HONESTLY PROMISE:** revenue, email/SMS deliverability, ad approval, API access not actually granted, unseen vendor features, production service uptime without hosting, consent on behalf of a prospect, legal approval, authentic proof that has not been supplied, or filming Nathan's actual delivery. A native tool description or green unit test is not production proof.

Access needed before build: exact campaign workspace/company; supported SFB external-submission/API docs and sandbox/key scopes if required; existing CRM and SMS connection with correct sender; email/domain access and authenticated sending identity; Meta dataset/pixel and authorized CAPI credential; GA4/GTM permissions; Stripe sandbox access and webhook secret through secure storage; calendar hosts and workshop/community accounts; isolated test contacts and approved sink inbox/number. First reuse managed connections. Do not request raw keys in chat or create a replacement account by default. No Supabase work is required by this plan; any later proposal must follow Nathan's authorized API-routing restriction.

Approval needed: Phase 1 decision and test build scope; exact copy/senders/recipient scope before real communications; separate domain/production/money changes where applicable; Phase 3 results and written GO. Phase 1 approval alone never starts real sends, subscriptions or charges. Do not enable paid model/API consumption or new subscriptions merely because they would help.

## 5. Comparison and division of labor

Scores are **INFERRED judgment**, 1 weakest to 5 strongest; for compliance risk/cost/workload, 5 means lowest risk/cost/owner effort. They are conditional on the evidence above, not measured benchmarks. “Codex-built” includes ordinary hosted infrastructure and payment/calendar providers, rather than writing a card processor.

| Criterion | Slater-only | Codex custom stack | Hybrid |
|---|---:|---:|---:|
| Time to live in seven days | 3: fast basics, exact gaps unresolved | 1: too much integration | 4: reuse native paths, bounded custom gaps |
| Reliability | 3: native paths, untested campaign | 2: newly assembled operations | 4: established native paths plus tested boundaries |
| Control/flexibility | 2 | 5 | 4 |
| Tracking quality | 2: exact event coverage unknown | 5: control, still needs QA | 4 |
| Compliance risk (5 = lower) | 2: consent/SMS/expiry gaps | 2: everything needs controls | 3: explicit consent/suppression/access boundaries |
| Cost (5 = lower) | 4 | 2: engineering/maintenance | 3 |
| Nathan's workload (5 = lower) | 3 | 2 | 4 |
| Total, unweighted /35 | 19 | 19 | 26 |

**INFERRED schedule:** with approved offer/price/proof, ready videos, cleared legal copy and access, core native setup can fit several working days; the full exact funnel is not guaranteed within seven days. Allow a dedicated QA window. Custom-only full scope is more reasonably a multiweek effort. Slater-only can be quick only if missing features are confirmed, not by waiving them.

| Component | Built in | Built by (Codex / me / Slater native / third-party tool) | Why |
|---|---|---|---|
| Offer, prices, promise, audience, proof, real deadline | Campaign brief | me (Nathan), with Codex analysis | These commercial facts cannot be invented. |
| Day 0 fields/tags/pipeline/consent/legal drafts | Slater, existing CRM if deal-stage gap confirmed | Codex + Slater native; me/lawyer approves | Reuse contact records, define source of truth and enforce real consent. |
| VSL page and pre-call video/proof pages | Slater website drafts | Codex copy/layout; me records; Slater native hosting | Custom responsive pages without replacing hosting. Proof placeholders stay until supplied. |
| Application screens, partials and qualification | Native form if demonstrated; otherwise custom app | Codex; Slater native grading/contacts via documented route | Required exact branches/autosave are unresolved natively. Server gate must protect booking. |
| Quiz, private results link and step metrics | Slater-hosted UI + approved server runtime/storage | Codex | Personalized secure output and every-step events need demonstrated backend support. |
| Calendar, reschedule and no-show | Slater; Calendly Teams only if native gaps fail | Slater native + Codex integration; third-party fallback | Preserve one calendar authority; pooled-calendar behavior needs testing. |
| Email confirmation, nurture, reminders, close | Slater email if timing/merge/suppression pass | Codex drafts/config; Slater native execution after send approval | Reuse subscriptions; exact event-relative scheduling is a gate. |
| SMS and suppression | Existing approved CRM/SMS provider | Third-party tool + Codex; me approves sender/content | Native Slater SMS is UNVERIFIED. Keep all sending in one approved engine. |
| IG comment-to-DM resource/tag/soft CTA | ManyChat | Third-party tool + Codex; me verifies IG identity | Purpose-built official comment triggers; platform messaging windows apply. |
| Workshop registration/thank-you/calendar files | Slater pages + existing live-event host | Codex + Slater native + third-party host; me presents | Three steps and four-part thank-you can be original; hosting is separate. |
| Replay 72h expiry and event timing | Approved server runtime + protected media host | Codex + third-party tool | Must block the actual media/link after expiry, including direct access. |
| Downsell/bump/payment plans/refunds | Slater test funnel + Stripe sandbox | Slater native + third-party tool; Codex config/QA; me approves live money | Native funnel documented, real money stays gated. |
| Challenge, human review, roadmap unlock | Slater members area; existing community if necessary | Slater native + Codex; me names reviewer | Delivery quality and turnaround need a real owner/rubric. |
| Pixel/CAPI/GA4/UTMs | All owned pages + small server relay | Codex + Meta/Google services | Server confirmation, consent and dedup matter more than a tag's presence. |
| Dashboard, QA, documentation | Native reports plus existing reporting destination | Codex + Slater native | One agreed cohort and payment ledger; no competing source of truth. |

**Third-party choices:** ManyChat for comment triggers [M1]; Stripe for processor/test/refund behavior [P1 through P3]; Calendly Teams only if true round-robin/routing fails native acceptance [C1]. Do not add Cal.com, another community, another CRM and another scheduler in parallel. Existing tools win when they pass the requirements. All account entitlements remain UNKNOWN until checked.

### Cost model

VERIFIED advertised Slater subscription: `97 + 10 × extra seats` USD/month; three extra seats would be $127/month, before usage/processor fees. Actual Nathan bill UNKNOWN. No campaign budget is authorized by this example.

| Option | Monthly cost basis | Unresolved cost |
|---|---|---|
| Slater-only | Advertised $97 + $10/additional seat, possibly existing client entitlement | Email/AI/media credits, processor fees, inability to fulfill exact features |
| Custom | INFERRED planning allowance $50 to $300/month for hosting, event storage, email/monitoring, before SMS/IG/calendar/payment fees | Engineering/maintenance time, scale and provider entitlements; not a quote |
| Hybrid | Slater formula + any needed ManyChat/SMS/runtime/event-host cost | INFERRED reserve $50 to $250/month beyond Slater, excluding ads, labor and payment fees; actual quotes required |

ManyChat pricing page did not expose a reliable plan amount to the reader, so its current price is **UNKNOWN**, not an outdated “starts at” guess [M2]. Calendly page advertises Teams $16/seat/month **billed yearly**, Standard $10/seat/month billed yearly; annual commitment and Nathan's current entitlement must be confirmed [C1]. Do not present that as a monthly cancellable quote. Paid acquisition, video production, lawyer review, message/carrier charges, taxes, Stripe fees and refunds are additional. No new subscriptions were bought.

## 6. Reverse math from $50,000

**UNKNOWN inputs:** actual core price, downsell, deposits/plans and refunds. No price from the competitor or historical Vita context is substituted. The following USD examples are internal planning scenarios, not public pricing or earnings claims.

**INFERRED assumptions, deliberately explicit:** traffic → captured unique lead 30%; lead → application start 20%; started → completed application 60%; completed → qualified 50%; qualified → booked 70%; booked → attended 75%; attended sales conversation → sale 20% / 30% / 40%. Every stage must happen inside the seven-day window. These are planning assumptions, not industry benchmarks or Nick's results. Workshop/replay audiences are deduplicated into these same stages; do not add them twice.

Formula, rounding UP at every stage: `sales = ceil(50000 / price)`; `shown = ceil(sales / close)`; `booked = ceil(shown / .75)`; `qualified = ceil(booked / .70)`; `completed = ceil(qualified / .50)`; `starts = ceil(completed / .60)`; `leads = ceil(starts / .20)`; `traffic = ceil(leads / .30)`.

| Core price | Close on attended calls | Sales | Shown calls | Booked | Qualified apps | Completed apps | App starts | Leads | Visits |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| $2,500 | 20% | 20 | 100 | 134 | 192 | 384 | 640 | 3,200 | 10,667 |
| $2,500 | 30% | 20 | 67 | 90 | 129 | 258 | 430 | 2,150 | 7,167 |
| $2,500 | 40% | 20 | 50 | 67 | 96 | 192 | 320 | 1,600 | 5,334 |
| $5,000 | 20% | 10 | 50 | 67 | 96 | 192 | 320 | 1,600 | 5,334 |
| $5,000 | 30% | 10 | 34 | 46 | 66 | 132 | 220 | 1,100 | 3,667 |
| $5,000 | 40% | 10 | 25 | 34 | 49 | 98 | 164 | 820 | 2,734 |
| $10,000 | 20% | 5 | 25 | 34 | 49 | 98 | 164 | 820 | 2,734 |
| $10,000 | 30% | 5 | 17 | 23 | 33 | 66 | 110 | 550 | 1,834 |
| $10,000 | 40% | 5 | 13 | 18 | 26 | 52 | 87 | 435 | 1,450 |

**Example interpretation:** at a hypothetical $5K core and 30% close, 10 sales require 34 attended / 46 booked calls, 132 completed applications, 1,100 captured leads and 3,667 visits. Across seven days that is about 6.6 booked slots/day and 524 visits/day. At 45 minutes including notes/buffer per booked slot, reserve 34.5 calendar hours before additional follow-up. Shortening the strategy script to 15 minutes does not prove the entire sale, payment and admin take 15 minutes.

**VERIFIED current constraint:** S1 general weekly cap is 4; S2 discovery link daily cap is 3. Effective availability also depends on shared schedule and Google conflicts. These settings cannot be assumed to provide 46 slots. At most four attended slots and even 100% closing at $5K yield only $20K; at assumed show/close rates they yield far less. Changing caps, adding verified closer calendars or choosing an appropriate higher-price offer would need approval and actual capacity. No settings were changed.

**Audience reality:** SFB reports zero native email subscribers, not zero total audience. Nathan's Instagram reach, active email list elsewhere, past buyers, partner distribution and prior funnel rates remain UNKNOWN. For the example, 3,667 visits require about 36,670 reachable people at an assumed 10% visit rate, or 73,340 at 5%. Email delivered recipients and unique social reach are different denominators; deduplicate cross-channel reach. An existing 1,100-person list cannot be assumed to create 1,100 fresh captures. Alternatively 1,100 already engaged, permissioned leads can enter the lead stage without recapture, but the remaining application assumptions still need evidence.

**Paid traffic sensitivity:** if all example visits cost an assumed $2/$5/$10 per visit, spend is $7,334/$18,335/$36,670 and CAC on ten sales is $733/$1,834/$3,667. These are arithmetic scenarios, not current ad quotes. Margin, fulfillment cost and refund risk determine affordability. Cold ads and a new sender are unreliable rescue plans within seven days.

**Cash versus contract value:** ten $5K contracts equal $50K contracted sales; with $2,500 initial payments they bring only $25K gross cash in the window. A $50K cash target then needs 20 paid deposits before refunds/fees, not ten. Future installments and hoped-for upsells do not count as cash collected. Net cash = successful cash received minus refunds; processor/bank settlement and accounting revenue recognition are separate measures. Confirm which target Nathan means before finalizing.

**Downsell formula:** `additional cash = unique downsell buyers × cash received per buyer + accepted bumps`, excluding buyers/orders already counted elsewhere and subtracting refunds. At purely illustrative $250/$500/$1,000 cash prices, downsell alone needs 200/100/50 buyers. No conversion or bump revenue is assumed in the core forecast. Buying the downsell should suppress its own pitch; qualification for an eventual core offer remains explicit.

**Plain assessment:** $50K can be plausible with a proven high-value offer, a warm audience capable of these volumes, ready proof, enough closer slots and money collected before close. With a small/cold audience, no offer or proof, no budget and current calendar caps, it is not a responsible seven-day expectation. Current evidence does not establish those prerequisites. Do not promise the target.

## 7. Required mechanics and compliance boundaries

These are Phase 2 design acceptance criteria, **INFERRED recommendations** rather than completed assets. Counsel review is required for the final jurisdiction/offer-specific language; a disclaimer cannot cure an unsupported claim [L1 through L3].

| Area | Acceptance criterion and conflict resolution |
|---|---|
| Originality/proof | Borrow step order and mechanics only. Fresh names, copy, design, scripts and media. Use `[REAL TESTIMONIAL NEEDED]` until a genuine, permission-cleared asset is supplied; hide/remove unfinished proof before live launch. No source headline, brand, guarantee, results claim or logo reuse. |
| Phone and consent | Adjacent plain-language named-seller SMS/call disclosure at EVERY phone field, including application, booking and checkout. Separate unchecked consent for marketing, requested reminders and automated calls where applicable; no consent inferred from merely typing a number. Not a condition of purchase. Frequency/rates, STOP/help and linked privacy/terms. No Do Not Call override wording. Lawyer confirms exact consent and jurisdictions [L1]. |
| STOP and hours | Central suppression before every enqueue and before send, queued sends cancelled on opt-out, provider STOP tested; authored SKIP wording per current Nathan preference only when SKIP also suppresses. Jurisdiction/provider-specific recipient-local hours, unknown timezone held. Consent, delivery, unsubscribe and suppression timestamps recorded. |
| Application abandonment | Brief's screen 6 contains contact details. People abandoning screens 1 to 5 are anonymous and cannot receive personal follow-up. Keep anonymous drafts; recover only those who supply contact details and an appropriate disclosed permission. Moving email earlier would be a material change to the requested eight-screen order and needs agreement. Privacy policy must explain partial saving, use and retention. |
| Application priority | Server checks all answers. IF lowest band OR investment=No THEN downsell; ELSE IF show-up=No THEN nurture with proper permission; ELSE qualifying calendar then pre-call. Bands and treatment of missing/prefer-not-to-say answers need owner approval; default unresolved answers to review, never an invented income. No bypass via a bare booking URL. |
| Quiz | Six diagnostic questions plus contact produce seven screens. Optional phone and independent follow-up opt-in; honeypot inaccessible to normal users. Results valid without marketing consent. Delivery of requested result separate from promotional nurture. A missing answer must not fabricate a personalized recommendation. |
| Deadline/replay | One timezone-aware close timestamp used by pages, scheduled messages and checkout. Product-close tool documented to refuse new orders after close; also test direct checkout URLs, old sessions, async payment attempts and timezone boundaries. Workshop date removed/closed after event. Replay protected media expires 72h from a precisely stated start; cannot promise a full 72h ending after a final sales deadline without explaining the different dates. |
| Call policy | Publish a reasonable reschedule/no-show policy, support approved cancel/move flow, cancel old reminders on reschedule. Native move tool documents a >24h requirement; clarify late changes and human assistance. No copied punitive ban. |
| Low-ticket delivery | Named reviewer, one concrete deliverable, published rubric, review turnaround and genuine roadmap unlock. Guarantee only a controllable deliverable/review or stated refund condition, not income or a client result. No unsafe silent fallback to a content library. |
| Income/claims/legal | Earnings disclaimer adjacent wherever income appears, plus substantiation/typicality assessment. Counsel reviews SMS/call consent, privacy/cookies/partial capture, terms, payment-plan/refund/guarantee terms, earnings and testimonial claims, workshop recording consent, retention and cross-border audiences. Legal pages linked on EVERY form. |

### Measurement contract to validate before launch

**INFERRED:** keep all brief hidden fields: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `fbclid`, `fbp`, `fbc`, `event_source_url`, `referrer`. Store first and latest touch separately with a stable anonymous/session/contact join. Preserve values through approved domain hops; never overwrite known first-touch with blank redirects. No identity/answers in public query parameters. Never manufacture a real click ID or consent state.

Server-observed step view/complete/error receipts need `event_id`, `campaign_id`, `form_id`, `step_id`, `session_id`, timestamp and sanitized error code. They show server receipt of a browser report, not independent proof a human looked at the screen. No free-text obstacles, income bands, names, emails or phone numbers in GA4 event payloads. Any Meta user-data use requires the appropriate consent and supported normalization/hashing; fbp/fbc remain in their documented format.

Use `Lead` on successful unique quiz/registration completion, `ApplicationStart` on first start, `ApplicationComplete` on validated submit, `Qualified` on server qualification, `Schedule` on confirmed booking and `Purchase` on confirmed processor success. Custom names versus standard Meta events must be mapped deliberately. Shared `event_id`/`event_name` for each browser/server pair [T1]; also deduplicate internally on provider event/order ID so duplicate webhooks do not double revenue, send messages or grant access twice. An application submission does not mean a booking, and a checkout thank-you view does not mean paid.

Daily dashboard denominators: opt-in = unique captures / unique entry visits; completion = completed / started apps; qualified = qualified / completed; booking = booked / qualified; show = attended / (attended + confirmed no-show), excluding future/cancelled/rescheduled slots; close = won / attended completed sales conversations; cash and contract value separate; CAC by source = attributed acquisition spend / new paying customers on the agreed attribution model. State as-of time/timezone, cohort/date filters and unknown source coverage. Reconcile spend/CRM/order/refund ledger; do not report missing feeds as zero.

## 8. Top ten launch risks

| # | What could stop launch | Mitigation and owner |
|---:|---|---|
| 1 | Offer, price, audience and campaign dates remain blank | Nathan supplies exact commercial brief and target definition before Phase 2; Codex reruns math. |
| 2 | Full ecosystem/video production exceeds seven days | Inventory ready assets, name production owners, require a real prelaunch QA window; adjust date or explicitly approve narrower scope. Codex never silently drops B/C/F. |
| 3 | Slater external API/partials/timing are undocumented | First test-build integration spike: one synthetic partial → CRM → correct suppressed/test notification. Require reference and sandbox; use existing authorized alternative if it fails. |
| 4 | Too few closer slots or too long a sales cycle | Nathan names closer(s), committed hours and same-window payment path; validate effective calendar caps/availability against scenarios. |
| 5 | Insufficient reachable audience or budget | Verify active list, recent unique reach/clicks, partner channels and budget; forecast from measured traffic, not followers. Change target/date if required. |
| 6 | SMS sender/registration/consent/STOP or quiet hours fail | Reuse matching approved provider; verify consent/suppression/local hours with isolated tests. Hold messaging if unresolved, do not reroute to an unrelated campaign. |
| 7 | Email approvals, domain authentication or list quality prevent delivery | Check S4 pending templates, SPF/DKIM/DMARC and credit limits; test sink inboxes and existing suppression before real enrollment. Native zero-subscriber count is not an import authorization. |
| 8 | Checkout modes, webhook retries, installments or refunds misstate cash | Stripe sandbox success/decline/3DS/bump/downsell/refund and duplicate event tests; reconcile cash, fees/refunds and future installments. |
| 9 | Lost attribution, double events or inaccessible consent corrupt reporting | One shared event/identity contract; cross-domain and dedup tests; no PII in analytics; dashboard reconciled before relying on CAC. |
| 10 | Missing proof/legal approval or unenforced close/replay undermines trust | Nathan supplies licensed proof; lawyer reviews named issues; server deadline/media expiry test before/at/after boundary, all direct links and old sessions; no GO with unresolved material defects. |

## 9. What Nathan needs to supply before Phase 2

1. **Offer and business:** product/service, intended company/workspace, buyer, core problem, concrete result, delivery model and capacity. Do not assume this is Vita.
2. **Money:** core/downsell/bump prices, currency, payment plan/deposit, guarantee/refund terms; $50K target means contract value, gross cash, net cash or accounting revenue?
3. **Audience and budget:** permissioned active email list size/location, recent delivered/click counts, Instagram identity/followers/reach, other audiences/partners, ad budget and proven acquisition/close rates if available.
4. **Proof/assets:** usable real results with permissions, original brand sources, ready videos/resource/VSL or filming time; `[REAL TESTIMONIAL NEEDED]` remains a placeholder until cleared.
5. **People:** closer/setter names, calendars, available hours, qualification thresholds, rubric reviewer and support owner. Confirm capacity before changing caps.
6. **Dates:** exact Day 1 and close date/time/timezone, workshop date/time, replay start/expiry and whether late buyers can still be fulfilled.
7. **Tools/access:** current Slater docs/API-reference link from Settings → AI & API, Billing entitlement/credits, intended domain, existing CRM/SMS/ManyChat/Stripe/GA4/Meta/calendar/event/community connections and isolated test destinations. Reuse managed authorization; never paste secrets into Git/chat.
8. **Review and scope:** lawyer contact/review route; accept or revise the conditional Hybrid and explicit unresolved-feature tests. Written Phase 1 approval authorizes the agreed test build only. Later written **GO** remains required for launch.

No real messages or bookings are needed to answer these questions. No competitor signup/purchase was performed.

## 10. Phase 2/3 handoff, still paused

After approval, preserve Nathan's order: Day 0 tracking/CRM/consent/legal; then D → E → F; B → A1 → A2; C → G; daily H. Each asset must include original full copy, exact fields/required/hidden values, IF/THEN routing, full trigger/wait/action messages/timing, event parameters and desktop/mobile test evidence. Include 2 to 3 daily content pieces across seven days, a 15-minute strategy-call script, objection sheet, VSL and objection-video scripts, and link/form/branch/payment/message go/no-go checklist. None is built by this analysis.

Phase 3 must cover every qualification/abandonment branch, tags/stages/enrollment; UTMs and click IDs in CRM; browser/CAPI dedup; email/SMS rendering, consent/STOP and hours; sandbox purchase/bump/downsell/refund; booking/reminders/reschedule/no-show; deadline/replay/direct-link enforcement and mobile/broken-link checks. Report individual PASS/FAIL and evidence on PR #2 as `[CODEX] [TO ALL] QA report`. Missing evidence is UNVERIFIED, not PASS. Live requires Nathan's written GO in chat or PR #2. Human owner merges; agents never merge.

## External reference links

- M1: [ManyChat Instagram comment trigger](https://help.manychat.com/en/articles/17741897-instagram-post-and-reel-comments-trigger), [Quick Automation](https://help.manychat.com/en/articles/17742037-quick-automation-auto-dm-links-from-comments), [messaging windows](https://help.manychat.com/en/articles/17742014-understanding-messaging-windows). Account eligibility and automation must still be tested.
- M2: [ManyChat pricing](https://manychat.com/pricing). No reliable amount extracted; obtain account quote.
- C1: [Calendly plans](https://calendly.com/pricing), Teams routing/round-robin and annual-billing prices checked November 15.
- P1: [Stripe testing](https://docs.stripe.com/testing). Sandbox transactions do not move money; do not use live cards for tests.
- P2: [Stripe webhooks](https://docs.stripe.com/webhooks). Verify signatures, handle retries/duplicates, acknowledge promptly.
- P3: [Stripe refunds](https://docs.stripe.com/refunds). Provider refund flow, not a fabricated CRM status change.
- T1: [Meta Pixel/CAPI deduplication](https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events). Matching name and ID for paired events.
- G1: [Google cross-domain measurement](https://developers.google.com/tag-platform/devguides/cross-domain), [GA4 Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4).
- L1: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200). Counsel must apply current federal/state/provider rules to this exact audience and communication purpose.
- L2: [FTC coaching offer cautions](https://consumer.ftc.gov/consumer-alerts/2026/04/how-spot-and-avoid-business-coaching-scams).
- L3: [FTC earnings-claim enforcement guidance](https://search.ftc.gov/news-events/news/press-releases/2021/10/ftc-puts-businesses-notice-false-money-making-claims-could-lead-big-penalties). No reliance on historical penalty amounts; substantiation and truthful net impression remain review topics.

Validation: source branches and COLLAB read; official native read calls and public-source checks documented above; all nine scenario rows independently recomputed with sequential ceilings. Campaign end-to-end tests were deliberately not run before approval. Repository-wide `./scripts/lint-agents.sh` ran: **FAIL, 16 errors and 81 warnings across 200 existing agent/strategy files**. Those files and the lint script match `origin/main`; this documentation-only change does not touch them. `git diff --check` passes. Existing lint failures must not be represented as a clean repository check.
