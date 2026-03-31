# Integration Priority Stack 001

## Purpose
Decide which platforms should be integrated first so Atlas becomes more useful with fewer wasted moves.

## Priority Rule
Use platforms that reduce real operating friction first.
Do not integrate a tool just because it exists.

## Tier 1 — Core Atlas Spine
These remain the most important:
- GitHub — durable source of truth
- ChatGPT — planning / templates / reasoning / operator communication
- local Atlas runtime — future direct computer access layer
- Do / browser automation — active execution surface while desktop runtime matures

## Tier 2 — High-Leverage Next Integrations
These are likely worth integrating soon after the local runtime becomes interactive:
- Shopify — direct revenue and launch leverage
- Slack — communication triage and task routing
- Google Workspace — docs, sheets, mail, operations artifacts
- local notifications / reminders / task queue surfaces

## Tier 3 — Useful But Secondary
- Aha! — planning/product-management value if already active in the workflow
- Base44 — rapid front-end/dashboard/site surface
- extra planning or PM tools only if they clearly reduce work

## Base44 Position
Base44 may be good as:
- a fast website/dashboard prototype surface
- a lightweight front-end shell
- a quick presentation layer for Atlas outputs

Base44 should **not** be treated as the durable system spine.
GitHub should remain the durable memory/build/state anchor.

## ChatGPT Leverage Position
ChatGPT should be used heavily for:
- architecture drafts
- prompt/template generation
- system design synthesis
- transformation of rough ideas into structured packages
- fast operator-ready next-move blocks

ChatGPT should not become the only system of record.
Repo state must continue to hold the durable operating truth.

## Should Atlas Also Have Its Own Chatbot Surface?
Yes — but as a **thin front door**, not as the first core problem.

### Best framing
A custom Atlas chatbot should be:
- a user-facing entry surface
- voice-capable later
- customizable in personality and controls
- connected to the real Atlas runtime and memory system

### What not to do
- do not build a shiny chatbot front-end before the runtime/control spine is real
- do not mistake a chat UI for the assistant system itself

## Recommended Integration Order After Interactive Runtime Proof
1. Shopify
2. Slack
3. Google live ops surfaces
4. Base44 as optional dashboard/site/front-end layer
5. Aha! if it clearly reduces planning friction
