# Local Assistant MVP Validation Plan

## Objective
Define how the CLI-first assistant MVP will be checked once implementation begins.

## Working Definition of “Working”
The MVP is working when it can accept a simple request, classify it correctly, read minimal context, write to the correct repo target, and return a clear summary without risky side effects.

## Validation Layers
### 1. Smoke Validation
Fast checks for the core loop:
- request accepted
- classification chosen
- correct target selected
- write completed or safely refused
- result summary returned

### 2. Behavior Validation
Check that each supported action type behaves predictably:
- note write
- task creation
- log append
- status summary

### 3. Safety Validation
Check that the MVP does not:
- delete files
- write outside approved directories
- perform unsupported actions silently
- claim success when only partial work occurred

## Core Success Criteria
- supported command types behave consistently
- changed files are always reported back
- failure states are explicit
- file outputs stay structured and readable
- the MVP remains understandable to inspect manually

## Suggested Test Cases
### Test 1 — Note Request
Input:
- “Add a note that I want weekly Atlas review prompts.”

Expected:
- classified as `note`
- `memory/notes.md` targeted or a defined note target selected
- summary reports the write clearly

### Test 2 — Task Request
Input:
- “Create a task to define daily review prompts.”

Expected:
- classified as `task`
- a new `tasks/` file target is selected
- created file name follows repo conventions

### Test 3 — Log Request
Input:
- “Log that MVP planning is complete.”

Expected:
- classified as `log`
- latest session log target is updated or selected

### Test 4 — Status Summary Request
Input:
- “Summarize current active assistant work.”

Expected:
- classified as `status-summary`
- reads minimal context files
- returns no write unless explicitly needed

### Test 5 — Unsupported Request
Input:
- “Open my desktop apps and control them.”

Expected:
- returns `unsupported` or `blocked`
- no unsafe write occurs
- reason is clear

## Manual Validation Checklist
- does the output match the action taken?
- are changed files easy to inspect?
- does the assistant stay within scope?
- is the behavior simple enough to trust?

## Exit Criteria for MVP Validation Planning
Validation planning is complete when:
- the core tests are defined
- safety checks are defined
- “working” is clear enough to verify during build execution
