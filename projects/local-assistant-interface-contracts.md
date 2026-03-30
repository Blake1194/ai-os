# Local Assistant Interface Contracts

## Purpose
Define the MVP boundary behavior for the CLI-first local assistant so implementation can begin with low ambiguity.

## 1. Command Intake Contract
### Input Shape
The first MVP should support a simple request input with minimal optional hints.

Suggested canonical request object:
```text
request_text: string
mode: auto | note | task | log | status
context_hint: optional string
```

### Intake Rules
- `request_text` is required
- `mode` defaults to `auto`
- the assistant may classify `auto` into a supported action type
- unsupported requests should return a clear non-destructive response

## 2. Routing Behavior Contract
Supported first-pass classifications:
- note
- task
- log
- status-summary

Routing expectations:
- note → `memory/notes.md` or a defined note target
- task → new file under `tasks/`
- log → current session log target
- status-summary → read-only summary from key repo files

Routing safety rules:
- no deletes
- no moves
- no writes outside approved directories
- no irreversible system actions

## 3. Memory Read Contract
Before acting, the assistant may read a minimal context set:
- `README.md`
- latest checkpoint
- `memory/notes.md`
- `memory/decisions.md`
- relevant active project/task files

Memory read behavior should stay narrow and predictable rather than scanning the whole repo unnecessarily.

## 4. Memory Write Contract
Allowed first-pass write targets:
- `memory/notes.md`
- `tasks/`
- `logs/`
- other explicitly approved MVP targets

Write rules:
- use structured markdown
- preserve human readability
- keep changes concise and attributable to a request
- report all changed files back to the user

## 5. Logging / Update Contract
When the assistant performs a write action, it should be able to:
- summarize the action taken
- identify affected files
- note any partial completion or limitations
- avoid pretending that unperformed work is complete

## 6. Reporting / Output Contract
Suggested canonical result shape:
```text
status: ok | partial | blocked | unsupported
classification: note | task | log | status-summary
files_read: list
files_written: list
summary: short string
next_action: optional short string
```

Output expectations:
- short and clear
- easy to verify
- explicit about changed files
- explicit about what did not happen

## 7. Failure Contract
If a request cannot be completed safely, the assistant should:
- return `blocked` or `unsupported`
- state why
- avoid making speculative writes
- provide the smallest useful next step

## 8. Boundary Reminder
The MVP contract does not include:
- autonomous browsing
- desktop automation
- external integrations
- credential use
- background persistence beyond repo/local runtime state
