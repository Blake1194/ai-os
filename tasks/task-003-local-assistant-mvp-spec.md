# Task 003 — Local Assistant MVP Specification

## Task ID
003

## Title
Local Assistant MVP Specification

## Objective
Define the smallest useful MVP specification for my personalized local assistant so Atlas OS can move from broad assistant vision into a practical first implementation target.

## Source
Human request through the live Atlas OS workflow system.

## Category
Mixed:
- planning
- architecture
- MVP definition

## Current Status
Completed initial MVP specification and committed as a live Atlas task instance.

## Priority
High

## Owner / Roles
- Human
- Command Center
- Operator
- Memory Layer
- Workflow Layer

## Dependencies
- `templates/task-template.md`
- `workflows/intake-workflow.md`
- `workflows/atlas-command-router.md`
- `workflows/task-execution-workflow.md`
- `tasks/task-002-local-assistant-blueprint.md`
- `projects/project-001-local-assistant.md`
- `memory/notes.md`
- `memory/decisions.md`
- `checkpoints/checkpoint-001-current-state.md`

## Linked Project
- `projects/project-001-local-assistant.md`

## Related Files
- `tasks/task-002-local-assistant-blueprint.md`
- `projects/project-001-local-assistant.md`
- `projects/local-assistant-mvp-spec.md`
- `projects/local-assistant-implementation-options.md`
- `projects/local-assistant-mvp-build-sequence.md`
- `commands/local-assistant-mvp-commands.md`
- `logs/session-log-007.md`

## Inputs
- prior assistant blueprint
- current Atlas OS repo structure
- recovery checkpoint and memory state
- request to define the first practical assistant MVP

## Desired Output
A practical MVP specification, a project-facing summary, an implementation-options comparison, command templates, updated memory/decisions, and an updated checkpoint.

## Success Criteria
- `task-003` created and routed through workflow language
- smallest useful assistant MVP clearly defined
- project-facing MVP file created
- implementation options compared and one option recommended
- project file updated with MVP phase and linked task
- command file created for MVP design work
- notes, decisions, README, logs, and checkpoint updated
- next best action clearly identified

## Reversible Actions
- creating or refining documentation
- adjusting MVP boundaries
- comparing implementation options
- updating memory, checkpoint, project, log, and README files
- sequencing follow-on build planning inside the repository

## Irreversible Actions
- none outside normal repository commits
- no installs, integrations, or credential-backed actions are included

## Approval Required
Approval is still required later for:
- installs
- local runtime setup
- credentials
- external integrations
- live execution outside the repository

## Current Plan
1. route the task through Atlas intake and routing logic
2. define the smallest useful MVP outcome
3. separate true MVP scope from later ambition
4. compare realistic implementation directions
5. choose a recommended first implementation shape
6. update linked project, memory, checkpoint, README, and session log
7. add one safe follow-on repo-only planning step

## Actions Taken
- created the task record
- defined the MVP purpose, scope, flow, and component set
- separated in-scope features from explicitly out-of-scope work
- compared three realistic implementation options
- selected a recommended MVP direction
- updated the linked project, notes, decisions, checkpoint, and README
- created reusable MVP command templates
- added a safe follow-on build sequence file
- logged the session

## Decisions Made
- the assistant should advance through staged MVP-first progress
- the first implementation should optimize for usefulness, controllability, and low complexity
- the best first implementation direction is a CLI-first local assistant that reads/writes Atlas repo state and reports back clearly

## Notes
This task converts the local assistant effort from a broad blueprint into a bounded first implementation target that can realistically become build work next.

## Next Best Action
Create `task-004` for the first build-oriented implementation pass of the CLI-first local assistant MVP.

## Completion Review
Task completed as the first practical MVP-definition milestone for the local assistant effort.

---

## Intake Classification
Using `workflows/intake-workflow.md`, this input was classified as:
- task
- project continuation
- MVP-definition work
- decision candidate

## Routing Decision
Using `workflows/atlas-command-router.md`, the request was routed:
- first to Command Center for scoping and prioritization
- then to Operator for repository execution
- then to Memory Layer for durable updates

## Task Mode
This task is mixed:
- planning because the MVP had to be narrowed
- architecture because component boundaries had to be clarified
- execution because repo artifacts had to be created and updated

## Safe Execution Boundary
Safe execution includes specification work, comparison work, project updates, memory updates, checkpoint updates, and repo-only planning.
The boundary stops before installs, credentials, external integrations, or non-repo implementation.

---

# Local Assistant MVP Specification

## 1. MVP Purpose
The MVP should create the first genuinely usable assistant layer for Atlas OS.

What it is supposed to accomplish:
- accept a simple request
- classify the request into a small number of known action types
- route the request to the correct Atlas structure
- write notes, tasks, or logs into the right repo location
- report back clearly about what it did

Why it is the right first step:
- it makes the assistant useful without requiring a full voice stack or complex runtime
- it turns the assistant from concept into controlled execution
- it keeps the first version small enough to finish and test

What problem it solves first:
- the gap between “assistant vision” and “repeatable operational behavior”
- the need for a simple assistant shell that can capture work, store it correctly, and return a reliable summary

## 2. Smallest Useful Outcome
The minimum version that would still feel meaningfully useful is:
- you give the assistant a short request
- it classifies the request as note, task, log, or reference lookup
- it writes the result into the correct Atlas repo file or creates the correct new task/log file stub
- it returns a short summary of what it changed and where it stored it

Why this is enough:
- it saves manual sorting and file placement
- it proves command intake and routing work
- it creates durable memory updates without needing a complex agent system
- it feels operationally useful even before voice, UI, or full automation exist

## 3. In-Scope Features
True MVP scope:
- simple command intake
- request classification into a small set of types
- command routing to known repo targets
- note write behavior
- task capture behavior
- memory read/write behavior for notes and decisions context
- session/log write behavior
- simple reporting back after action
- optional voice input placeholder in the design only
- optional voice output placeholder in the design only

Practical first command categories:
- create note
- create task
- append session log
- update memory note
- summarize current active state from repo files

## 4. Explicitly Out of Scope
The first MVP should NOT include:
- full autonomous browsing
- complex multi-agent orchestration
- advanced desktop control
- deep smart-home replacement
- a broad plugin ecosystem
- a perfect Alexa/Siri-style replacement
- heavy local model orchestration
- background daemon behavior that must stay always-on
- rich voice stack implementation
- complex UI dashboard work

## 5. User Flow
First practical user flow:
1. I give the assistant a request.
2. The assistant normalizes the request into a small command format.
3. The assistant classifies the request type.
4. The assistant routes it to the right repo target.
5. The assistant writes the result into the appropriate file or file template.
6. The assistant records the action in the relevant log or status location.
7. The assistant reports back with what happened, what changed, and what the next step is.

Example:
- I say or type: “Create a task to define the MVP for my assistant.”
- the assistant classifies it as a task-creation request
- it creates the task file in the correct structure
- it updates the session log if needed
- it reports back with file path, task summary, and next best action

## 6. System Components for MVP
Minimal component set:
- **Command intake layer** — accepts simple text input now, voice placeholder later
- **Routing logic** — maps requests into note/task/log/status actions
- **Memory read layer** — reads a small set of repo context files before acting
- **Write target layer** — writes to notes, logs, tasks, or project files
- **Reporting layer** — returns a short structured result after execution
- **Simple local runtime concept** — a later CLI or script entry point, not a heavy service yet
- **Optional interface direction** — CLI first, optional simple wrapper later

## 7. What Can Be Simulated First
These parts can be simulated through repo-driven workflow before being fully coded:
- command classification rules
- routing behavior
- file target choices
- note/task/log update patterns
- reporting format
- memory read order
- voice input/output placeholders in the spec

This means Atlas can prove the operating model before real runtime work begins.

## 8. What Requires Real Implementation Later
These parts need actual software/runtime work after the spec is stable:
- CLI or local runtime execution
- file-watching or persistent session behavior
- true voice input/output integration
- automated command parsing beyond simple patterns
- stronger local state handling outside the repo
- packaging, distribution, and persistent UX

## 9. MVP Success Criteria
The MVP is successful when:
- a user can issue a simple request to the assistant
- the assistant can classify it correctly into a small known set
- the assistant can write to the correct Atlas repo target reliably
- the assistant can create or update tasks, notes, or logs with predictable structure
- the assistant can report back clearly about what it did
- the first implementation stays small, understandable, and controllable

## 10. Best First Implementation Direction
### Chosen Direction
**CLI-first local assistant**

Why this is the best first shape:
- lowest complexity while still feeling real
- easy to test repeatedly
- keeps behavior explicit and controllable
- maps cleanly to repo-driven writes and reads
- can later become a service or voice wrapper without discarding the MVP core

What the first CLI-first version should do:
- accept a small command or request
- classify it
- read a few key Atlas files for context
- write into the right repo target
- return a concise result summary

Why not larger options yet:
- a service-first build adds unnecessary runtime complexity
- a voice-first build introduces too many variables too early
- a broader assistant shell risks solving too many problems at once
