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

## Local Assistant MVP Specification
ai-os now includes a defined MVP direction for the personalized assistant effort. The repository contains a bounded first implementation target, a comparison of realistic implementation options, and a recommended CLI-first direction for the first practical assistant shell.

## Implementation Readiness
ai-os now includes the implementation-readiness layer for the first usable CLI-first assistant shell: build tasks, interface/contracts, validation criteria, storage guidance, an implementation folder skeleton, and an implementation-ready checkpoint.

## Implementation Start
ai-os now includes the first-build execution package for the CLI-first assistant MVP: task-level execution steps, a first-build runbook, an execution checklist, intake examples, a defined request-intake module boundary, an implementation-start entrypoint specification layer for intake, and an implementation-start entrypoint specification layer for routing.

## Resource Leverage
ai-os now includes a resource-leverage layer for using current tools, browser lanes, integrations, and sessions deliberately. The repo and the current Do lane remain the core operating surfaces; optional systems should be adopted only when they clearly reduce work instead of adding coordination overhead.

## Google-First Operations
ai-os now includes a Google-first operations layer. GitHub remains the durable command, memory, and build spine, while Google Workspace becomes the preferred live operations lane for structured tracking, working documents, communication workflows later, and future Google-native automation when justified.

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

## Google Sheets Tracker
ai-os now includes the first concrete Google Sheets structured-tracking layer for Atlas OS. The first Google operational surface is a lightweight live operations tracker that keeps row-based status review in Sheets while GitHub remains the durable source of truth for system memory, tasks, logs, decisions, checkpoints, and implementation artifacts.
