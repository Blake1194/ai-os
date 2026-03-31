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
Active — the first-pass Atlas OS local-assistant stack is now packaged as the `Repeated-Use Ready Milestone` for bounded day-to-day use inside the current repo-safe boundary.

## Current Phase
Repeated-use milestone packaged; checkpoint-004 created; repeated-use quickstart created; post-repeated-use next options created

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
- first actual implementation file: revalidated (request_intake_entrypoint.js checked against examples, contracts, and boundary rules)
- first routing implementation file: first-pass validated within rerun checks (routing_entrypoint.js classification/output only)
- first memory write/read prep/spec layer: first-pass validated at the prep/spec/examples level
- first memory write/read code artifact: first-pass validated with minor refinements (`memory_write_read.js` checked against its spec/examples/code examples/contracts/boundary rules)
- first logging/reporting layer: first-pass validated at the prep/spec/examples level and first bounded code artifact first-pass validated within the checks actually run (`logging_reporting.js`)
- first logging/reporting code prep artifact: created (`implementation/local-assistant-cli/src/logging_reporting.code_prep.md`)
- first logging/reporting code examples and validation record: created (`implementation/local-assistant-cli/src/logging_reporting.code_examples.md` and `implementation/local-assistant-cli/src/logging_reporting.code_validation.md`)
- bounded end-to-end dry-run plan: created (`implementation/bounded-end-to-end-dry-run-plan.md`)
- first-pass promotion/readiness milestone: created (`implementation/first-pass-promotion-readiness-milestone.md`)
- promoted-state checkpoint: created (`checkpoints/checkpoint-003-first-pass-promoted-state.md`)
- post-promotion next options: created (`implementation/post-promotion-next-options.md`)
- first-pass promotion/readiness milestone session log: created (`logs/session-log-039.md`)
- operator adoption package: created (`operator/operator-adoption-plan.md`, `operator/operator-runbook.md`, `operator/first-pass-daily-usage.md`, `commands/operator-adoption-commands.md`)
- operator adoption threshold: created (`operator/operator-adoption-threshold.md`)
- operator adoption session log: created (`logs/session-log-040.md`)
- repeated-use milestone package: created (`operator/repeated-use-milestone-package.md`)
- repeated-use-ready checkpoint: created (`checkpoints/checkpoint-004-repeated-use-ready-state.md`)
- repeated-use quickstart: created (`operator/repeated-use-quickstart.md`)
- post-repeated-use next options: created (`operator/post-repeated-use-next-options.md`)
- repeated-use milestone session log: created (`logs/session-log-044.md`)

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
Use `operator/post-repeated-use-next-options.md` as the single safe follow-on artifact after the `Repeated-Use Ready Milestone` package.

## Next Best Action
Use `operator/post-repeated-use-next-options.md` and continue repeated real use inside the current boundary before any bounded expansion is considered.

## Runtime / Toolchain Update
- The minimal first runtime/toolchain decision is now defined in `implementation/runtime-toolchain-decision.md`.
- The recommended first code-facing file is `implementation/local-assistant-cli/src/request_intake_entrypoint.js`.
- Bounded repo-local code execution and validation have now started with no installs or tooling expansion.
- The next approval gate is now narrowly defined: permit the first bounded end-to-end dry-run execution step inside the existing first-pass boundary.

## First Code Artifact Update
- The first actual code artifact is now `implementation/local-assistant-cli/src/request_intake_entrypoint.js`.
- The first-pass example set now exists in `implementation/local-assistant-cli/src/request_intake_entrypoint.examples.md`.
- A Codex-ready handoff now exists in `implementation/codex-handoff.md`.
- Codex should only be used later inside the current first-pass boundary rather than as a reason to expand scope.

## First Code Validation Update
- The first code artifact is now treated as first-pass validated only within the checks actually rerun against the examples, spec, contracts, and boundary rules.
- The refreshed validation record exists at `implementation/local-assistant-cli/src/request_intake_entrypoint.validation.md`.
- No code refinement was needed in the current intake validation pass.
- `routing_entrypoint.js` is now treated as first-pass validated only within the checks actually rerun against its examples, prep boundary, contracts, validation-prep expectations, and task rules.
- The refreshed routing validation record exists at `implementation/local-assistant-cli/src/routing_entrypoint.validation.md`.
- `implementation/local-assistant-cli/src/memory_write_read.prep.md` now exists as the memory-layer boundary.
- `implementation/local-assistant-cli/src/memory_write_read.spec.md` and `implementation/local-assistant-cli/src/memory_write_read.examples.md` now exist as the bounded memory-layer spec artifacts.
- `implementation/local-assistant-cli/src/memory_write_read.validation.md` now exists as the bounded memory-layer validation record.
- `implementation/local-assistant-cli/src/memory_write_read.js` is now treated as first-pass validated only within the checks actually run against its spec, examples, code examples, contracts, and boundary rules.
- One small refinement aligned the task/log placeholder write targets with the documented examples: `tasks/task-xxx.md` and `logs/session-log-xxx.md`.
- The refreshed validation record now exists at `implementation/local-assistant-cli/src/memory_write_read.code_validation.md`.
- `implementation/local-assistant-cli/src/logging_reporting.prep.md` now exists as the logging/reporting boundary.
- `implementation/local-assistant-cli/src/logging_reporting.spec.md` and `implementation/local-assistant-cli/src/logging_reporting.examples.md` now exist as the bounded logging/reporting spec artifacts.
- `implementation/local-assistant-cli/src/logging_reporting.validation.md` now exists as the bounded logging/reporting validation record.
- `implementation/local-assistant-cli/src/logging_reporting.code_prep.md` now exists as the single safe follow-on preparation artifact before the logging/reporting code step begins.
- `implementation/local-assistant-cli/src/logging_reporting.js` is now treated as first-pass validated only within the checks actually run against its code prep, specs, examples, code examples, contracts, and boundary rules.
- `implementation/local-assistant-cli/src/logging_reporting.code_examples.md` now exists as the code-oriented logging/reporting example reference.
- The refreshed validation record now exists at `implementation/local-assistant-cli/src/logging_reporting.code_validation.md`.
- No code refinement was needed in the current logging/reporting validation pass.
- `implementation/bounded-end-to-end-dry-run-plan.md` now exists as the single safe follow-on preparation artifact before the first bounded dry-run execution step begins.
- `implementation/first-pass-stack-status.md` now exists as the stack status reference before the next bounded code step.
- Codex remains subordinate to the existing narrow boundary and should not expand scope.

## Automation Control Layer Update
- a bounded automation control layer now exists under `/automation/`.
- this layer is treated as a small operator-facing refinement inside the current repeated-use-ready boundary.
- the automation control package does not authorize uncontrolled autonomy, bounded expansion, or second-generation architecture work.
- the single safe follow-on artifact is `automation/first-automation-milestone.md`.

## Time-Box Sprint 001 Update
- the first automation milestone now has a concrete implementation package at `implementation/bounded-session-coordination-milestone.md`.
- the matching review boundary for the first bounded session-coordination dry run now exists at `implementation/bounded-session-coordination-dry-run-plan.md`.
- the next best action is manual review of this package before any further automation step is approved.

## Sprint Mode Update
- the reusable Sprint Mode template package now exists under `/automation/` and `/commands/`.
- Sprint Mode standardizes future time-boxed bounded-autonomy runs without widening the current repo-safe boundary.
- the single safe follow-on artifact is `automation/sprint-mode-first-approved-use.md`.

## V1 Execution Shift Update
- the practical V1 finish line is now defined in `implementation/v1-launch-threshold.md`.
- the minimum practical launch checklist now exists at `implementation/v1-launch-checklist.md`.
- the next higher-output sprint plan now exists at `automation/v1-execution-sprint-plan.md`.
- the single safe follow-on artifact is `automation/minimum-deliverable-rule.md`.

## Usable V1 Freeze Update
- the current repo-safe Atlas OS boundary is now frozen as Usable V1.
- the frozen-state record now exists at `implementation/v1-freeze-state.md`.
- the durable resume anchor is now `checkpoints/checkpoint-005-usable-v1-frozen.md`.
- the short human start guide now exists at `operator/usable-v1-start-here.md`.
- the single safe follow-on artifact is `operator/first-real-v1-session-plan.md`.

## First Real V1 Use Update
- the first real V1 session has now been executed inside the frozen repo-safe boundary.
- the practical-use session report now exists at `operator/first-real-v1-session-report-001.md`.
- practical use now works in practice inside the frozen lane, with cautions still in force.
- the single safe follow-on artifact is `operator/v1-real-use-next-package.md`.

## Practical Use Confirmation Update
- practical V1 use is now confirmed inside the frozen repo-safe boundary.
- the second real-use session report now exists at `operator/second-real-v1-session-report-002.md`.
- the cross-session comparison now exists at `operator/v1-real-use-comparison-001.md`.
- the honest practical-use confirmation now exists at `operator/v1-practical-use-confirmed.md`.
- the single safe follow-on artifact is `operator/v1-use-package-003.md`.

## Ordinary Bounded Real-Use Confirmation Update
- ordinary bounded real use is now confirmed inside the frozen repo-safe boundary, with cautions.
- the third real-use session report now exists at `operator/third-real-v1-session-report-003.md`.
- the three-session consolidation now exists at `operator/v1-practical-use-consolidation-001.md`.
- the honest ordinary-use state now exists at `operator/v1-ordinary-use-confirmed-with-cautions.md`.
- the single safe follow-on artifact is `operator/v1-package-004-next-large-block.md`.

## Controlled Expansion Mode Update
- Atlas OS is now in controlled expansion mode.
- the expansion rule layer now exists at `implementation/controlled-expansion-mode.md` and `implementation/expansion-permissions-matrix.md`.
- the expansion game plan now exists at `implementation/expansion-roadmap.md`, `implementation/expansion-sequence.md`, and `implementation/expansion-next-major-package.md`.
- the first concrete expansion outcome now exists at `implementation/atlas-mobile-shell/` as a second-generation mobile/product-shell scaffold.
- the primary expansion resume anchor is now `checkpoints/checkpoint-006-controlled-expansion-open.md`.

## Controlled Expansion Vision Update
- Atlas is now explicitly aiming toward a local runtime that can eventually access the operator's computer directly under visible consent and override rules.
- future Atlas copies should be implemented as bounded worker agents with supervisor control rather than uncontrolled self-replication.
- the desired future capability set now includes files, apps, terminal, voice, screen, optional camera/microphone, and selected external integrations.
- a thin Atlas chatbot/front-door surface is now considered desirable later, but only after the runtime/control spine is real.
- Shopify finish-and-launch support is now the preferred high-leverage post-stable commercial lane.
