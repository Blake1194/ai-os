# Local Assistant MVP Build Sequence

## Purpose
Translate the MVP specification into the safest next repo-only build sequence so the first implementation task can start from a clear order of operations.

## Recommended Build Order
1. define the supported MVP command types
2. define the minimal input format for the CLI-first assistant
3. define the routing table from command type to repo target
4. define the write rules for notes, tasks, logs, and summaries
5. define the result-reporting format
6. create the first build task from this sequence

## Suggested MVP Command Types
- create-note
- create-task
- append-log
- update-memory-note
- summarize-current-state

## Minimal Runtime Contract
The first implementation should:
- accept one request
- classify it
- load minimal repo context
- write to one or more approved targets
- return a concise execution summary

## Why This Was the Best Safe Continuation
This step stays fully inside the repository, turns the spec into an ordered build path, and makes the next implementation task easier to create without adding technical risk.

## Recommended Next Task
Create `task-004` for the first CLI-first build pass using this sequence as the implementation backbone.
