# ChatGPT Controlled Relay Mode

## Purpose
Define how Atlas OS may use the current approved ChatGPT browser thread as a controlled relay surface without turning ChatGPT into an autonomous backend, uncontrolled loop, or separate system of record.

## Scope
This mode applies to the active ChatGPT continuation thread recorded in `operator/chatgpt-thread-registry.md`.

If a later migration changes the active continuation thread, the registry and matching migration file become the durable authority rather than the old thread alone.

## Allowed Actions
In controlled relay mode, Do may:
- switch to the active continuation thread tab
- read the latest visible assistant message if needed
- identify and focus the message input area
- type or paste a draft message into the input area
- leave the draft unsent by default unless sending is explicitly authorized
- clear an unsent draft if instructed or if safe cleanup is requested
- confirm whether the composer is empty, focused, and ready
- report the current relay state back into the repo lane
- migrate active continuation to a new ChatGPT thread when needed, so long as the migration is durably recorded in the repo

## Forbidden Actions
Do must not:
- press Send unless an instruction explicitly authorizes sending or relay continuation requires a clearly approved handoff action
- alter prior messages
- change ChatGPT settings
- open account, profile, personalization, or billing areas without need
- start loops, self-chat behavior, or uncontrolled autonomous conversation patterns
- treat ChatGPT as a backend integration or system API
- overwrite human-written draft text without instruction
- move outside the active continuation thread boundary without recording the migration in repo state

## Send Authorization Rule
No message should be sent from ChatGPT relay mode unless sending is clearly part of the approved continuation behavior or explicitly authorized.

## Repo Anchors
The reusable relay command layer lives at:
- `commands/chatgpt-relay-commands.md`
- `profile/chatgpt-relay-preferences.md`
- `operator/chatgpt-thread-registry.md`

Relay mode remains subordinate to:
- GitHub as the durable system spine
- repo checkpoints, logs, and decisions as the durable operating record
