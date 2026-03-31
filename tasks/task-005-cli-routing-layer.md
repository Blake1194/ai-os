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
The first routing implementation-preparation layer now exists under the implementation source layer and the task is ready for the first concrete routing implementation file after intake implementation begins.

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

## Related Implementation Files
- `implementation/local-assistant-cli/src/routing_entrypoint.md`
- `implementation/local-assistant-cli/src/module-contracts.md`
- `implementation/local-assistant-cli/tests/fixtures/routing-fixtures.md`

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

## Step-by-Step Execution Instructions
1. define the supported classifications: note, task, log, status-summary
2. define how normalized input is matched to a classification
3. map each classification to its next action path
4. define blocked and unsupported routing behavior
5. define the routing result object passed to memory/write logic
6. create example routing decisions from sample requests
7. confirm routing itself does not perform writes

## Execution Notes
- routing should stay small and explicit
- avoid hidden heuristics in the first pass
- the output must be predictable enough for memory and reporting layers to trust

## Next Best Action
Create the first concrete `routing_entrypoint` implementation file after the request-intake implementation file exists.
