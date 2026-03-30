# Task 007 — Logging and Reporting

## Task ID
007

## Title
Logging and Reporting

## Objective
Define and prepare the logging and result-reporting behavior for the CLI-first local assistant MVP so each action can be summarized clearly, safely, and in a way that is easy to verify.

## Source
Follow-on implementation-preparation task created from the MVP specification and the memory read/write task.

## Category
Mixed:
- implementation preparation
- reporting definition
- validation support

## Current Status
Created as a concrete implementation-preparation task.

## Scope
- define result summary shape
- define files-read / files-written reporting behavior
- define log-update expectations where appropriate
- define blocked/partial/unsupported response behavior
- define the minimum success/failure signal the user should see

## Inputs
- `tasks/task-006-memory-write-read.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-mvp-validation-plan.md`
- `logs/session-log-008.md`

## Outputs
- result summary contract
- reporting behavior for success/partial/blocked states
- logging/update guidance for the MVP
- safer validation of what actually changed

## Dependencies
- `tasks/task-004-cli-intake-layer.md`
- `tasks/task-005-cli-routing-layer.md`
- `tasks/task-006-memory-write-read.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-mvp-validation-plan.md`

## Success Criteria
- a clear result shape exists
- files-read/files-written reporting is explicit
- blocked and partial states are defined
- the user can verify what happened without guesswork
- the MVP has a stable reporting boundary for testing

## Reversible Actions
- refining output schema
- refining log-update rules
- refining partial/blocked wording
- refining reporting examples

## Irreversible Actions
- none outside normal repository commits

## Approval Required
Approval is still required later for:
- installs
- runtime/toolchain setup
- any external reporting integrations

## Relation to MVP Spec
This task turns the MVP “report back clearly” requirement into a concrete build layer that can be implemented and tested.

## Next Best Action
Begin the first actual implementation step described in `implementation/first-build-step.md` once tasks 004–007 are accepted.
