# Task 001 — Atlas Daily Operating Loop

## Task Title
Atlas Daily Operating Loop

## Objective
Establish the first practical daily operating loop for Atlas OS so the system can be used in a simple, reliable, repeatable way.

## Source of Request
Human request through the live Atlas OS browser operator flow.

## Task Category
Mixed:
- planning
- execution
- operating-system design

## Current Status
Completed initial definition and committed into the repository as the first live workflow instance.

## Owner / Roles Involved
- **Human** — provides goals, approvals, and corrections
- **Command Center** — classifies the task, defines the loop, and sets priorities
- **Operator** — updates repository files and stages the system behavior
- **Memory Layer** — captures notes, decisions, and logs
- **Workflow Layer** — provides intake, routing, execution, and session review logic

## Dependencies
- `workflows/intake-workflow.md`
- `workflows/atlas-command-router.md`
- `workflows/task-execution-workflow.md`
- `workflows/session-review-workflow.md`
- existing `README.md`
- existing `memory/notes.md`
- existing `memory/decisions.md`

## Reversible Actions
- creating task records
- creating command files
- updating notes and decisions
- updating README content
- adding logs
- refining workflow text

## Irreversible Actions
- none outside normal repository commit history
- any future live execution using this loop still requires human approval before irreversible actions

## Approval Needs
Human approval is required for:
- final submits
- publishing
- sending
- deleting
- live system changes outside the repository

## Desired Output
A durable daily operating loop that defines how Atlas starts the day, takes in work, routes it, executes safely, logs results, and reviews progress.

## Success Criteria
- task is recorded in `/tasks/`
- daily operating loop is clearly defined
- reusable command templates are created
- memory is updated
- logging is updated
- README reflects the first live workflow instance

---

## Intake Classification
Using `workflows/intake-workflow.md`, this request was classified as:
- **task** because it requires action and a defined outcome
- **workflow candidate** because it defines repeatable system behavior
- **command candidate** because it produces reusable operating prompts
- **decision** because it affects how the human interacts with Atlas OS day to day

## Routing Decision
Using `workflows/atlas-command-router.md`, the task was routed as follows:
- first to **Command Center** for classification, planning, and system fit
- then to **Operator** for repository execution and file creation
- then to **Memory Layer** for notes, decisions, and logging updates
- then to **README** for system-level visibility of the new capability

## Why This Task Belongs in the System
This task defines the practical human-to-system operating pattern for Atlas OS. Without it, the repo contains structure but no repeatable daily usage loop.

## Task Mode
This task is **mixed**:
- planning, because the loop had to be designed
- execution, because repository files had to be created and updated
- workflow, because the result becomes reusable operating behavior

## Safe Execution Boundary
Safe execution includes:
- creating and updating repository documentation
- defining commands and operating patterns
- logging the completed work

The boundary stops before:
- any external tool integration
- any live account changes outside the repo
- any destructive or credential-based action

---

# Daily Operating Loop v1

## 1. Daily Startup
- begin by opening the Atlas command center context
- review active tasks, recent logs, and current blockers
- identify the top one to three goals for the day
- enter goals as plain-English requests through Atlas
- let the system classify whether each item is planning, execution, research, or mixed
- choose the first actionable item based on urgency, dependencies, and clarity

## 2. Task Intake
- new requests are captured from voice, text, Loom, screenshots, emails, or browser context
- requests go first into Atlas intake/routing logic
- Atlas classifies each request as a task, note, decision, workflow candidate, command candidate, or deferred item
- actionable work becomes a task record or workflow run

## 3. Command and Execution
- Command Center decides what the task is and what tools should be used
- Operator executes safe reversible steps once scope is defined
- execution begins after classification and route selection
- approval is required before submit, publish, send, delete, confirm, purchase, or any irreversible live change
- if blocked, the smallest blocker is surfaced and the task pauses there

## 4. Memory and Logging
- logs record what was attempted, what changed, and what comes next
- decisions go into `memory/decisions.md`
- working context and observations go into `memory/notes.md`
- reusable patterns become commands or workflows
- live task instances go into `/tasks/`

## 5. End-of-Day Review
- review what was attempted and completed
- identify what changed in the repo or system
- close what is done
- roll unfinished work forward into the next session
- record the next best action
- capture any reusable operating pattern discovered during the day

## 6. Weekly Stabilization
- clean up duplicate tasks, overlapping tools, and outdated notes
- review what should be promoted into stable commands or workflows
- identify repeated actions that should become automation candidates
- review decisions for consistency
- prune low-value or redundant operating patterns
