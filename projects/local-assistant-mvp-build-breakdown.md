# Local Assistant MVP Build Breakdown

## Objective
Turn the CLI-first assistant MVP specification into a concrete, low-ambiguity build sequence for the first implementation phase.

## Build Principle
Build the smallest useful assistant shell first:
- one request in
- one classification decision
- one routing path
- one or more safe repo writes
- one clear result summary out

## Build Sequence Overview
### Phase 1 — Foundation
Linked task:
- `tasks/task-004-cli-first-assistant-foundation.md`

Purpose:
- create the implementation layer structure
- define the minimal runtime contract
- prepare the source, tests, docs, and fixture locations

Outputs:
- implementation folder scaffold
- CLI entry expectations
- context-loading rules
- safe write-target list

### Phase 2 — Routing and Actions
Linked task:
- `tasks/task-005-cli-first-assistant-routing-and-actions.md`

Purpose:
- define supported command types
- implement classification and routing behavior
- define file write actions for notes, tasks, logs, and summaries

Outputs:
- routing map
- action contract
- allowed target rules
- reporting behavior

### Phase 3 — Validation and Readiness
Linked task:
- `tasks/task-006-cli-first-assistant-validation-and-readiness.md`

Purpose:
- define smoke tests and validation criteria
- confirm storage boundaries
- verify the MVP is controllable and safe

Outputs:
- validation checklist
- test cases
- readiness criteria
- implementation handoff rules

## Dependency Order
1. `task-003` MVP spec must exist
2. `task-004` foundation comes first
3. `task-005` depends on foundation decisions
4. `task-006` depends on routing/actions being defined

## Definition of Build-Ready
The MVP is build-ready when:
- the folder structure is defined
- interfaces/contracts are documented
- action types and write targets are fixed
- tests/validation are defined
- storage rules are clear
- the next implementation task can begin without major architectural ambiguity

## Recommended Implementation Start
Start with `task-004` and create the first real implementation skeleton under `/implementation/local-assistant-cli/`.
