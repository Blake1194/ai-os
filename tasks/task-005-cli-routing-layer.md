# Task 005 — CLI Routing Layer

## Task ID
005

## Title
CLI Routing Layer

## Objective
Define and prepare the routing layer for the CLI-first local assistant MVP so normalized requests can be classified and sent to the correct action path.

## Source
Follow-on implementation-preparation task created from the local assistant MVP specification and the intake-layer task.

## Category
Mixed:
- implementation preparation
- routing definition
- MVP build planning

## Current Status
Created as a concrete implementation-preparation task.

## Scope
- define first-pass classifications
- map supported request types to target actions
- define safe unsupported-route handling
- define routing output shape for downstream write/report steps

## Inputs
- `tasks/task-004-cli-intake-layer.md`
- `tasks/task-003-local-assistant-mvp-spec.md`
- `projects/local-assistant-interface-contracts.md`
- `implementation/local-assistant-build-order.md`

## Outputs
- a first routing map
- classification rules for supported request types
- a routing output contract
- a safe no-route / blocked behavior definition

## Dependencies
- `tasks/task-004-cli-intake-layer.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-mvp-spec.md`

## Success Criteria
- supported classifications are fixed
- route-to-action mapping is explicit
- unsupported requests fail safely
- downstream memory/log/report behavior has a clear handoff contract

## Reversible Actions
- refining classification rules
- refining action mappings
- refining blocked/unsupported responses
- updating routing documentation

## Irreversible Actions
- none outside normal repository commits

## Approval Required
Approval is still required later for:
- installs
- runtime/toolchain setup
- external integrations

## Relation to MVP Spec
This task turns “command routing” from the MVP spec into a concrete, testable build layer.

## Next Best Action
Begin `task-006-memory-write-read.md` after the routing map is fixed.
