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
Created as a concrete implementation-preparation task.

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
Begin `task-005-cli-routing-layer.md` after intake assumptions are fixed.
