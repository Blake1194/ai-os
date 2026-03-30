# Task 005 — CLI-First Assistant Routing and Actions

## Task ID
005

## Title
CLI-First Assistant Routing and Actions

## Objective
Define and implement the first routing and file-action behavior for the CLI-first assistant MVP so a request can be classified, routed, written, and reported back predictably.

## Source
Follow-on build task created from the MVP breakdown after foundation planning.

## Category
Mixed:
- build planning
- behavior definition
- implementation preparation

## Current Status
Ready after `task-004` foundation work begins.

## Priority
High

## Owner / Roles
- Human
- Command Center
- Operator
- Memory Layer

## Dependencies
- `tasks/task-004-cli-first-assistant-foundation.md`
- `projects/local-assistant-interface-contracts.md`
- `projects/local-assistant-mvp-spec.md`

## Linked Project
- `projects/project-001-local-assistant.md`

## Reversible Actions
- defining command types
- defining router logic
- defining write actions
- refining result summary behavior

## Irreversible Actions
- none outside normal repository commits

## Approval Required
Approval is still required later for:
- runtime/toolchain setup
- live external integrations

## Success Criteria
- supported command types are fixed
- request classification rules are documented
- repo write targets are mapped
- reporting format is fixed
- failure handling expectations are defined

## Planned Implementation Outputs
- classifier rules
- routing table
- writer responsibilities
- output summary structure
- safe failure responses

## Next Best Action
Begin `task-006` once routing and action behavior is locked.
