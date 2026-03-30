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
- break work into linked tasks over time

## Why It Matters
This project gives Atlas OS a clear path toward a real personal assistant layer instead of remaining only a repository and workflow framework.

## Current Status
Active — blueprint created and MVP specification defined.

## Current Phase
MVP specification

## Core Tools Involved
- ChatGPT
- Do Browser
- GitHub / ai-os
- future local runtime layer

## Linked Tasks
- `tasks/task-002-local-assistant-blueprint.md`
- `tasks/task-003-local-assistant-mvp-spec.md`

## Linked Project Files
- `projects/local-assistant-mvp-spec.md`
- `projects/local-assistant-implementation-options.md`
- `projects/local-assistant-mvp-build-sequence.md`

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
4. create the first build-oriented task for the MVP
5. test assistant-oriented task routing in live use
6. add more local-first components later

## Current Milestone Status
- blueprint and project scope: complete
- MVP specification: complete
- implementation direction selection: complete
- first build-oriented task: next

## Success Criteria
- the assistant effort is tracked as a project
- milestones are versioned
- linked tasks can be created incrementally
- the project stays practical and integration-focused
- the first build direction remains useful, controllable, and low-complexity

## Open Questions
- what exact local runtime wrapper should be adopted after the CLI-first version proves useful
- what voice path should be used first after the MVP core works
- how much memory should remain repo-based vs local-state-based in later versions

## Explicit Next Milestone After MVP Spec
Create the first build-oriented task for the CLI-first local assistant MVP and define the smallest shippable implementation pass.

## Next Best Action
Create `task-004` for the first CLI-first build pass of the local assistant MVP.
