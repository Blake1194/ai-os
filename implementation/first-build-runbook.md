# First Build Runbook

## Purpose
Provide the first exact human-facing execution sequence for starting the CLI-first assistant MVP build safely.

## Exact First Commands / Actions a Human Would Take
1. open the repo working copy
2. navigate to `/implementation/local-assistant-cli/src/`
3. create the first request-intake module file using the runtime/toolchain chosen later
4. copy the behavior requirements from `implementation/first-build-step.md`
5. implement only request normalization and safe invalid-input handling
6. do not add routing, file writes, or logging yet

## How to Start the First Script / Module
Start with the request-intake module only.
It should expose one small callable entry that:
- accepts a raw string
- returns a normalized request object or a safe invalid result

## Safe Testing Procedure
Use only small local/manual examples at first:
- a note-like request
- a task-like request
- a status-like request
- an empty request

Safe checks:
- valid input returns a normalized request object
- empty input returns a safe failure result
- no repo files are written
- no external calls occur

## Expected Output
A valid first pass should produce something like:
- `request_text` trimmed and normalized
- `mode` defaulted to `auto`
- a simple structure ready for the routing layer
- a safe invalid result for empty input

## What Success Looks Like
The first build run succeeds when:
- the first module exists
- it performs normalization reliably
- it rejects empty input safely
- it does not perform writes
- it creates a stable front door for the rest of the MVP
