# Task 006 — Memory Write/Read

## Task ID
006

## Title
Memory Write/Read

## Objective
Define and prepare the first repo-memory read/write behavior for the CLI-first local assistant MVP so the assistant can load small context sets and write only to approved targets.

## Source
Follow-on implementation-preparation task created from the MVP specification and the routing-layer task.

## Category
Mixed:
- implementation preparation
- memory behavior definition
- MVP build planning

## Current Status
Created as a concrete implementation-preparation task.

## Scope
- define the minimal context files the MVP may read
- define approved write targets
- define structured write expectations
- define safe refusal behavior for disallowed targets
- define read-before-write expectations

## Inputs
- `tasks/task-005-cli-routing-layer.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-storage-architecture.md`
- `memory/notes.md`
- `memory/decisions.md`

## Outputs
- minimal repo context read list
- approved write-target list
- write-safety rules
- memory read/write handoff definition for reporting

## Dependencies
- `tasks/task-004-cli-intake-layer.md`
- `tasks/task-005-cli-routing-layer.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-storage-architecture.md`

## Success Criteria
- the MVP read set is narrow and explicit
- approved write targets are fixed
- disallowed writes fail safely
- structured write expectations are clear
- the logging/reporting layer can rely on stable file-change outputs

## Reversible Actions
- refining approved targets
- refining read order
- refining write formatting rules
- refining safe refusal behavior

## Irreversible Actions
- none outside normal repository commits

## Approval Required
Approval is still required later for:
- installs
- runtime/toolchain setup
- external integrations
- writes outside approved repo structure

## Relation to MVP Spec
This task operationalizes the MVP promise that the assistant can read minimal context and write durable outputs into the correct repo structure.

## Step-by-Step Execution Instructions
1. define the smallest allowed read set for context
2. define the approved write targets for note, task, and log actions
3. define formatting rules for structured writes
4. define how disallowed targets are refused safely
5. define what metadata about file changes must be returned
6. create small example read/write scenarios
7. confirm all writes remain inside approved repo paths

## Execution Notes
- keep the read set narrow to avoid over-reading the repo
- keep write targets explicit and auditable
- this layer should expose changed-file information for reporting

## Next Best Action
Begin `task-007-logging-and-reporting.md` after memory read/write behavior is fixed.
