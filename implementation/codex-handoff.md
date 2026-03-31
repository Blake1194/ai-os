# Codex Handoff

## Current Atlas OS Phase
Atlas OS is now in the first actual code-artifact phase of the CLI-first local assistant MVP.

The first concrete implementation file now exists, but the implementation boundary is still intentionally narrow.

## Files Codex Should Read First Later
1. `implementation/runtime-toolchain-decision.md`
2. `implementation/first-code-file-spec.md`
3. `implementation/local-assistant-cli/src/request_intake_entrypoint.md`
4. `implementation/local-assistant-cli/src/module-contracts.md`
5. `implementation/local-assistant-cli/src/implementation-notes.md`
6. `tasks/task-004-cli-intake-layer.md`
7. `implementation/local-assistant-cli/src/request_intake_entrypoint.examples.md`
8. `checkpoints/checkpoint-002-implementation-ready-state.md`

## Exact Purpose Of request_intake_entrypoint.js
`request_intake_entrypoint.js` is the first real code-facing front door for the CLI-first local assistant MVP.

Its exact purpose is to:
- accept one raw request payload
- normalize supported first-pass input into the agreed MVP request shape
- return either a structured valid result or a structured refusal result

## First-Pass Boundaries Codex Must Respect
Codex must keep the first pass limited to:
- plain Node.js + JavaScript
- no framework
- no external dependencies
- no file writes
- no routing behavior
- no logging behavior
- no external calls
- no memory reads
- no hidden heuristics beyond the agreed first-pass rules

## What Codex Should Not Expand Yet
Do not expand into:
- routing
- persistence
- CLI packaging
- argument-parsing libraries
- test-framework sprawl
- TypeScript conversion
- Google integration
- browser automation
- assistant loop behavior
- repo read/write behavior
- architecture refactors outside the first-pass file boundary

## What “Done” Means For The First Code File
For this first file, “done” means:
- the file exists at the approved path
- it implements the agreed input/output contract
- it trims and normalizes supported input safely
- it rejects empty input safely
- it rejects unsupported input safely
- it returns structured results without side effects
- it stays inside the first-pass boundary without expanding scope

## Codex Use Rule
Codex should only be used later inside this existing first-pass boundary.
It should not use the first code file as a reason to broaden tooling, runtime scope, or assistant architecture.
