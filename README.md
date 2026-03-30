# ai-os

ai-os is the central repository for **Atlas OS**, a personal Atlas-style AI operating system.

## Purpose
- serve as the command and memory spine for Atlas
- store architecture, workflows, commands, logs, and decisions
- support a voice-first, browser-assisted operating model
- make the system durable, editable, and expandable over time

## Core Roles
- **Command Center:** ChatGPT interprets goals, plans work, and routes tasks
- **Operator:** Do Browser executes browser tasks safely
- **Memory:** GitHub stores checkpoints, commands, logs, and decisions
- **Execution Layer:** workflows turn repeated tasks into repeatable operations

## Workflow Layer
The repository now includes an operating workflow layer that defines how Atlas handles:
- intake of new requests and materials
- routing and planning decisions
- safe task execution
- session review and closeout

Core workflow files live in `/workflows/` and define routing, execution, intake, and review behavior.

## Template Layer
The repository now includes a standardized template layer for recurring Atlas system objects such as tasks, projects, decisions, workflows, intake records, and session logs. These templates reduce ad hoc structure and make repeated system use more consistent.

## Local Assistant Direction
ai-os now includes an active blueprint and project structure for a future personalized assistant. This creates a practical path from Atlas workflows and memory into a branded local-first assistant effort.

## Recovery Checkpoints
The repository now includes a `/checkpoints/` folder with durable recovery snapshots so Atlas OS can be resumed quickly if chat context is lost or a browser session ends.

## Long-Term Vision
Atlas OS should become a personal AI operating environment that can:
- understand voice commands
- operate the browser
- reduce clicking and typing
- remember context over time
- manage files, tasks, and communication
- evolve toward a local assistant with its own identity

## First Live Workflow Instance
Atlas OS has now run its first real live task instance by defining the daily operating loop used for repeatable system operation. This proves the repository can do more than store structure — it can track and execute practical operating behavior through tasks, workflows, commands, memory, and logs.
