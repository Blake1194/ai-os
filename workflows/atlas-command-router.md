# Atlas Command Router

## Objective
Define the master routing logic for how Atlas-style work should operate from request intake to final reporting.

## Roles in the System
- **Human**
  - provides goals, approvals, and corrections
- **Command Center**
  - handles planning, reasoning, architecture, and prioritization
- **Operator**
  - performs browser actions, setup steps, and execution tasks
- **Memory Layer**
  - stores notes, decisions, logs, and state tracking
- **Workflow Layer**
  - defines repeatable process rules
- **Future Local Assistant**
  - later voice and local execution interface using the same system logic

## Input Types
- strategic request
- research request
- setup request
- cleanup/organization request
- build request
- troubleshooting request
- daily operations request

## Routing Rules
- strategic and planning requests go first to the Command Center
- execution requests go to the Operator only after scope is defined
- mixed requests are split into planning first, then execution
- irreversible actions require explicit human approval
- all meaningful changes should be logged
- reusable patterns should be converted into commands or workflows
- architecture decisions should be written into `memory/decisions.md`

## Decision Rules
- if the goal is clear, proceed with safe reversible steps
- if the task is unclear, clarify only the smallest blocker
- if a pattern is likely to repeat, capture it as a workflow or command
- if the action changes live data, stop before the final confirmation step

## Human Approval Checkpoints
Approval is required before:
- submit
- publish
- send
- confirm
- delete
- purchase
- irreversible live changes

## Output Expectations
Every routed task should produce:
- a clear understanding of the goal
- the current page or working context
- the actions taken or prepared
- the exact stop point
- the next best action

## Logging Requirements
After meaningful work:
- record actions taken
- record changes made
- record decisions made
- record blockers or next actions
- update the relevant log or memory file when needed
