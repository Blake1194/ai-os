# Project 001 — Local Assistant

## Project Name
Local Assistant

## Vision
Build a personalized local-first assistant that fits inside Atlas OS and can grow into a branded, practical alternative to generic assistants.

## Outcome
A staged assistant system with versioned milestones, clear scope, reusable architecture decisions, and a practical path from specification to implementation.

## Scope
- define assistant identity and role
- define versioned build path
- define technical direction and system boundaries
- define the smallest useful MVP
- prepare the first implementation phase
- break work into linked tasks over time

## Why It Matters
This project gives Atlas OS a clear path toward a real personal assistant layer instead of remaining only a repository and workflow framework.

## Current Status
Active — the intake and routing implementation-start specification layers now exist under the implementation source layer.

## Current Phase
Implementation start package complete; intake and routing entrypoint specifications defined

## Core Tools Involved
- ChatGPT
- Do Browser
- GitHub / ai-os
- future local runtime layer

## Linked Tasks
- `tasks/task-002-local-assistant-blueprint.md`
- `tasks/task-003-local-assistant-mvp-spec.md`
- `tasks/task-004-cli-first-assistant-foundation.md`
- `tasks/task-005-cli-first-assistant-routing-and-actions.md`
- `tasks/task-006-cli-first-assistant-validation-and-readiness.md`
- `tasks/task-004-cli-intake-layer.md`
- `tasks/task-005-cli-routing-layer.md`
- `tasks/task-006-memory-write-read.md`
- `tasks/task-007-logging-and-reporting.md`

## Linked Project Files
- `projects/local-assistant-mvp-spec.md`
- `projects/local-assistant-implementation-options.md`
- `projects/local-assistant-mvp-build-sequence.md`
- `projects/local-assistant-mvp-build-breakdown.md`
- `projects/local-assistant-implementation-repo-structure.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-mvp-validation-plan.md`
- `projects/local-assistant-storage-architecture.md`
- `implementation/local-assistant-build-order.md`
- `implementation/first-build-step.md`
- `implementation/first-build-runbook.md`
- `implementation/execution-checklist.md`

## Implementation Layer
- `implementation/local-assistant-cli/README.md`
- `implementation/local-assistant-cli/src/README.md`
- `implementation/local-assistant-cli/src/request-intake/README.md`
- `implementation/local-assistant-cli/src/request_intake_entrypoint.md`
- `implementation/local-assistant-cli/src/routing_entrypoint.md`
- `implementation/local-assistant-cli/src/module-contracts.md`
- `implementation/local-assistant-cli/src/implementation-notes.md`
- `implementation/local-assistant-cli/tests/README.md`
- `implementation/local-assistant-cli/tests/fixtures/README.md`
- `implementation/local-assistant-cli/tests/fixtures/request-intake-fixtures.md`
- `implementation/local-assistant-cli/tests/fixtures/routing-fixtures.md`
- `implementation/local-assistant-cli/docs/README.md`

## Linked Workflows
- `workflows/atlas-command-router.md`
- `workflows/task-execution-workflow.md`
- `workflows/intake-workflow.md`

## Risks
- trying to build too much too early
- overcommitting to one technical stack before proving usefulness
- confusing command-center responsibilities with local assistant responsibilities
- adding runtime complexity before the first narrow assistant loop works

## Dependencies
- stable Atlas workflow system
- template layer
- memory/logging structure
- MVP-first discipline
- later local environment setup

## Milestones
1. define blueprint and project scope
2. define the smallest useful MVP specification
3. compare implementation options and choose a first direction
4. define build breakdown, contracts, validation, and storage rules
5. prepare the implementation layer structure
6. create the implementation-preparation task set for intake, routing, memory, and reporting
7. define the first actual implementation piece under the implementation layer
8. define the implementation-start specification layer for intake
9. define the implementation-start specification layer for routing
10. begin the first actual implementation file
11. test assistant-oriented task routing in live use
12. add more local-first components later

## Current Milestone Status
- blueprint and project scope: complete
- MVP specification: complete
- implementation direction selection: complete
- build breakdown/contracts/validation/storage: complete
- implementation layer structure: complete
- implementation-preparation task set created: complete
- first actual implementation piece defined: complete
- intake implementation-start specification layer: complete
- routing implementation-start specification layer: complete
- first actual implementation file: next

## Success Criteria
- the assistant effort is tracked as a project
- milestones are versioned
- linked tasks can be created incrementally
- the project stays practical and integration-focused
- the first build direction remains useful, controllable, and low-complexity
- implementation can begin with minimal ambiguity

## Open Questions
- what exact runtime/toolchain should be used when build execution starts
- what voice path should be used first after the MVP core works
- how much memory should remain repo-based vs local-state-based in later versions

## Explicit Next Milestone
Create the first actual `request_intake_entrypoint` implementation file under `/implementation/local-assistant-cli/src/`.

## Next Best Action
Start the first concrete implementation file for the `request_intake_entrypoint` when approved, then follow with the `routing_entrypoint` implementation file.

## Runtime / Toolchain Update
- The minimal first runtime/toolchain decision is now defined in `implementation/runtime-toolchain-decision.md`.
- The recommended first code-facing file is `implementation/local-assistant-cli/src/request_intake_entrypoint.js`.
- No actual code execution or install has started yet.
- The next approval gate is now narrowly defined: permit the first single-file Node.js + JavaScript implementation pass.
