# Local Assistant Build Order

## Recommended Sequence for Tasks 004–007
1. `tasks/task-004-cli-intake-layer.md`
2. `tasks/task-005-cli-routing-layer.md`
3. `tasks/task-006-memory-write-read.md`
4. `tasks/task-007-logging-and-reporting.md`

## Dependency Graph in Plain English
- The intake layer comes first because nothing else should exist until the assistant knows what a valid request looks like.
- The routing layer comes second because the system needs a stable way to turn normalized input into a known action path.
- The memory write/read layer comes third because writes should only happen after request shape and routing are stable.
- The logging and reporting layer comes fourth because it should describe real behavior that the earlier layers already define.

## What Must Be Finished Before the Next Task Starts
### Before Task 005 starts
Task 004 should fix:
- request shape
- supported intake modes
- unsupported input behavior

### Before Task 006 starts
Task 005 should fix:
- supported classifications
- route-to-action map
- blocked/unsupported routing behavior

### Before Task 007 starts
Task 006 should fix:
- approved read set
- approved write targets
- write formatting and refusal rules

## What Can Be Parallel Later
After the first pass is stable, these can be refined in parallel later:
- richer validation cases
- better fixtures
- more detailed implementation-local docs
- future voice placeholders or wrappers

## First Implementation Start Point
The first actual implementation start point should be the intake module described in `implementation/first-build-step.md`.
