# Content to fill in

Everything factual on this site came from your own material — `~/Desktop/Resumes/src/resume_data.py`,
the previous site's project data, and the numbers legible in your own chart images. **Nothing about
your history, employers, metrics or skills was invented.**

Where a fact was needed that those sources don't contain, there's a `[[REPLACE: …]]` marker,
highlighted in yellow on the page so it's impossible to ship by accident.

Three sections below:

1. **Placeholders** — 19 markers you need to fill (all in case studies; `index.html` has none).
2. **Prose I wrote** — words that are mine, not yours. Read them in your own voice.
3. **Facts to verify** — things I took from your files that may have drifted.

---

## 1. Placeholders — 19 total

`index.html` is **publishable as-is**. Every placeholder is on a case study page.

Find them all at any time with:

```bash
grep -rn '\[\[REPLACE' index.html projects/
```

### The pattern repeated on all four pages

| What | Where | Notes |
|---|---|---|
| Dataset name, link, licence | Facts strip, line 90 of each page | Shows in the header block under **Source** |
| Dataset name and link | "The data", line 123 of each page | First sentence of the section |

That's 8 of the 19. Worth doing first — it's the same information four times, and naming your
sources is the single biggest credibility item on a portfolio built from public data.

### `projects/bank-customer-churn.html`

| Line | What's needed |
|---|---|
| 128 | **What was wrong with the extract.** Candidates: zero balances that are genuinely zero vs missing; how "active member" is defined and whether you trust it; duplicates; a column you chose not to use. If it was clean, say so — "the extract needed no cleaning, which is worth stating because most do not" is a good sentence. |
| 184 | **Why 3–4 product holders churn at 83% and 100%**, plus the group sizes (n). Without the n, a reader can't tell whether 100% means 400 customers or 4. |
| 235 | **The decision this enabled / your recommendation.** One or two concrete sentences: who acts, on what, what changes. |

### `projects/maven-toys-mexico.html`

| Line | What's needed |
|---|---|
| 128 | **What was wrong with it.** Stores opening mid-period breaking like-for-like; SKUs missing a cost and silently dropping out of margin; returns or zero-quantity lines. Give the row counts — "0.3% of lines" reads very differently from "12% of lines". |
| 136 | **The cost join.** Is cost on the transaction line or the product record? If it's on the product record, gross profit is at *current* cost, not cost at time of sale — which bounds what the bridge can claim. One honest sentence either way. |
| 198 | **Gross margin rate of Art & Crafts vs Electronics.** These two numbers are the mechanism of the entire finding; right now the reader has to infer them. |
| 238 | **Was the Jul 2023 → Sep 2023 margin recovery deliberate, or mix drifting back?** If you don't know, say that — an open question named as open is better than one implied closed. |
| 244 | **The decision this enabled / your recommendation.** |

### `projects/coffee-shop-sales.html`

| Line | What's needed |
|---|---|
| 141 | **Anything else you cleaned** — duplicate lines, refunds, null prices, timestamps outside trading hours. Rows affected, and whether you dropped or kept them. |
| 234 | **What you recommended off the daypart concentration** — staffing, pre-order, counter throughput, an off-peak play. This is the "turns a chart into a decision" moment. |

### `projects/airline-loyalty-program.html`

| Line | What's needed |
|---|---|
| 250 | **What you recommended against the month-8 cliff** — a retention contact before the lapse date, a renewal offer, changing the introductory term. |

> **Note on the missing-answer pattern:** four of the five "what decision did this enable" prompts
> are unfilled because your source material genuinely doesn't record it. This is the weakest part
> of the site until you fill it, and it's the part a hiring manager is most likely to ask about in
> an interview. If a project truly enabled no decision (it was a public dataset, nobody acted on
> it), the honest move is to write the recommendation you *would* make and label it as such —
> "on this evidence I'd recommend…" is credible; implying someone acted is not.

---

## 2. Prose I wrote — read it in your own voice

None of this is from your CV. It's built *on* your material, but the words and the reasoning are
mine, and you should be comfortable defending every sentence in an interview.

### `index.html`

| Where | What |
|---|---|
| Hero statement | *"I find the number that changes the decision — and say plainly what it can't prove."* Drawn from the pattern across your four projects (the grain check, the trend adjustment, the DiD caveat). It's the site's whole positioning — if it doesn't sound like you, change it here **and** in `assets/og-image.png` (regenerate — see README). |
| Hero location line | "Open to data and BI analyst roles" |
| About, both paragraphs | Synthesised from your CV summary and project list |
| Work section footnote | "All four are independent analyses of public datasets, worked through the Hebrew University Data Analysis programme brief. No client data is used anywhere on this site." — this matches the editorial note in your resume README about not overclaiming programme work. Keep it. |
| Contact intro | "The fastest way to reach me is email…" |
| `<meta name="description">` | Written by me |

### All four case studies

**Every word of Context, Approach and Result is mine.** The numbers are yours — pulled from your
resume source and read off your own charts — but the framing, the reasoning and the "why I chose
this method" arguments are my reconstruction of what you did.

Two specific claims to check, because if they're wrong the paragraph is wrong:

- **`bank-customer-churn.html` line ~186** — I wrote that you chose segmentation *instead of*
  fitting a churn model, and argued why. **If you did also build a model, this paragraph is
  false** and needs rewriting.
- **`coffee-shop-sales.html` line ~200** — I wrote that you decomposed before segmenting, and
  argued why that order. Confirm that's the order you actually worked in.

The "what this cannot show" caveat boxes are the strongest thing on the site for demonstrating
rigour. The airline one is nearly verbatim from your own chart annotation; the other three I
wrote by the same standard. Check they're true.

---

## 3. Facts to verify

| Item | Where | Issue |
|---|---|---|
| **GPA** | `index.html` education | Site says **89.5**; your CV says **90**; your profile says **89.53**. Pick one and make CV and site agree — a recruiter comparing the two will notice. |
| **Degree grades** | `index.html` education | I listed "126 credits · Final project graded 97 / 89" from your profile. Decide whether you want grades on a public site at all — many analysts don't. |
| **28× vs 29×** | `airline-loyalty-churn-concentration.png` | Your chart's headline annotation says the month-8 spike is **29×** the neighbouring months; its own caption box says **28×**. The site currently says 29×. **Fix it at source** and regenerate the chart — an inconsistency inside a single image is exactly what a sharp interviewer will point at. |
| **"Sole analyst — raw extract to dashboard"** | Facts strip, all four pages | I asserted this from context. Confirm it's accurate for each project. |
| **Phone number** | `index.html` contact, and the JSON-LD | Publicly listed and machine-readable. It's already on your public CV, so this is consistent — but if you'd rather not be scraped, remove it from both places. |
| **Experience bullets** | `index.html` experience | Your brief asked for *outcome-focused* bullets. Yours are **activity-focused** ("Manage budgets…", "Build presentations…") and I did not invent outcomes. Adding one number to each — how many departments, how many reports, budget size — would materially strengthen this section. That's a CV edit too. |
| **External links** | Everywhere | All 8 dashboard and repo links returned HTTP 200 when I checked. LinkedIn returns 999 to non-browsers, which is normal anti-bot behaviour, not a broken link. |

### Optional, not required

- **A photo.** The brief didn't ask for one and the design doesn't need it. If you want one, the
  hero is the place — `public/images/me*.png` from the old site is in git history.
- **Per-project OG images.** All pages currently share one card. Fine for now; per-project cards
  with each finding would share better on LinkedIn.
- **Hebrew version.** The CSS is written with logical properties throughout, so a `/he/` mirror
  is a content job (translate + `dir="rtl"`), not a rebuild.
