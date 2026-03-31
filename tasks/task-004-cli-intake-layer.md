# Task 004 — CLI Intake Layer

## Task ID
004

## Title
CLI Intake Layer

## Objective
Define and prepare the first concrete intake layer for the CLI-first local assistant MVP so a raw request can be accepted, normalized, and passed safely into the rest of the MVP flow.

## Source
Follow-on implementation-preparation task created from the local assistant MVP specification and implementation-ready planning state.

## Category
Mixed:
- implementation preparation
- interface definition
- MVP build planning

## Current Status
The first request-intake module definition and implementation-start specification layer now exist under the implementation layer, the first concrete implementation file exists, and that file is now first-pass validated against the documented examples and boundaries.

## Scope
- define the expected command/request input shape
- define normalization behavior
- define supported first-pass modes
- define safe unsupported-input handling
- define the intake handoff to the routing layer

## Inputs
- `tasks/task-003-local-assistant-mvp-spec.md`
- `projects/local-assistant-interface-contracts.md`
- `implementation/first-build-step.md`
- `checkpoints/checkpoint-002-implementation-ready-state.md`

## Outputs
- a clear intake-layer contract
- the first module responsibility definition
- normalization rules for simple requests
- a safe unsupported-input path

## Dependencies
- `tasks/task-003-local-assistant-mvp-spec.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-mvp-build-breakdown.md`

## Related Implementation Files
- `implementation/local-assistant-cli/src/request-intake/README.md`
- `implementation/local-assistant-cli/src/request_intake_entrypoint.md`
- `implementation/local-assistant-cli/src/module-contracts.md`
- `implementation/local-assistant-cli/src/implementation-notes.md`
- `implementation/local-assistant-cli/tests/fixtures/request-intake-fixtures.md`

## Success Criteria
- the first input object shape is fixed
- intake rules are small and testable
- unsupported input handling is defined
- handoff into routing is clear
- the first implementation step can begin with low ambiguity

## Reversible Actions
- refining input shape
- refining normalization behavior
- narrowing supported modes
- updating intake documentation

## Irreversible Actions
- none outside normal repository commits

## Approval Required
Approval is still required later for:
- installs
- runtime/toolchain setup
- execution outside the repository

## Relation to MVP Spec
This task implements the first boundary of the CLI-first MVP by turning “simple command intake” into a concrete build target.

## Step-by-Step Execution Instructions
1. define the exact raw input the module accepts
2. define the normalized request object shape
3. define default behavior when no mode is provided
4. define empty-input and unsupported-input handling
5. define the handoff output for the routing layer
6. record small example inputs and normalized outputs
7. confirm no file writes are part of this task

## Execution Notes
- keep the first intake layer text-only
- do not mix routing or file writes into this module
- the goal is a stable front door, not a full assistant loop

## Next Best Action
Use `implementation/local-assistant-cli/src/routing_entrypoint.prep.md` to begin the narrow routing implementation step when approved, while preserving the same first-pass boundary discipline.

## Live Ops Promoted Outcome
- The next smallest real code-facing action for this task is to create the first concrete `request_intake_entrypoint` implementation file when runtime/toolchain approval exists.
- That first code-facing pass should stay limited to raw request validation, whitespace trimming, `mode` defaulting to `auto`, supported-mode validation, and safe invalid-result handling.
- The first code-facing pass should not add routing, file writes, logging, or external calls.
- The implementation contract remains `implementation/local-assistant-cli/src/request_intake_entrypoint.md`.

## Runtime / Toolchain Gate
- The smallest practical runtime/toolchain choice is now defined in `implementation/runtime-toolchain-decision.md`.
- The recommended first path is plain Node.js + JavaScript with no framework, no TypeScript, and no external dependencies for the first file.
- The exact first code-facing file is defined in `implementation/first-code-file-spec.md`.
- No install or execution has started yet; this only reduces ambiguity for the next approval gate.

## First Code Artifact Started
- `implementation/local-assistant-cli/src/request_intake_entrypoint.js` now exists as the first real code-facing implementation file.
- `implementation/local-assistant-cli/src/request_intake_entrypoint.examples.md` now exists as the first example/output reference set for this file.
- The first pass stays limited to request normalization and structured refusal behavior only.
- Routing, file writes, logging, external calls, and broader tooling expansion remain deferred.

## First Code Artifact Validation
- `request_intake_entrypoint.js` was validated against the documented examples, refusal cases, and first-pass boundary rules.
- No code refinement was needed in the validation pass.
- The validation record now exists at `implementation/local-assistant-cli/src/request_intake_entrypoint.validation.md`.
- The next prep artifact now exists at `implementation/local-assistant-cli/src/routing_entrypoint.prep.md`.
