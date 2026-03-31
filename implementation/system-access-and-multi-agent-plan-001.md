# System Access And Multi-Agent Plan 001

## Purpose
Define the next-generation Atlas direction requested by the operator:
- move beyond browser-only control toward full-computer access
- support multiple concurrent Atlas worker copies
- allow optional access to camera, microphone, screen, files, apps, and connected services
- preserve hard operator override, visible consent, and durable control

## Important Boundary
This plan is for a transparent, operator-controlled personal system.

It is **not** a stealth agent, hidden persistence layer, uncontrolled self-replicator, or silent surveillance tool.

## Desired End State
A practical Atlas system where:
- ChatGPT remains the planning/brain layer
- a local Atlas runtime can act on the computer directly
- multiple scoped worker agents can run in parallel
- voice is a first-class interaction path
- the operator can grant, revoke, pause, or override capabilities at will
- GitHub remains the durable system spine

## Recommended High-Level Architecture
1. **Planner / Brain Layer**
   - ChatGPT remains the high-level reasoning and planning surface
   - Atlas prompts, templates, routing rules, and durable logic stay repo-backed

2. **Local Device Runtime Layer**
   - a local Atlas runtime runs on the operator's computer
   - this layer can control files, terminal, windows, browser, apps, and approved APIs
   - this runtime is where computer-level permissions live

3. **Capability Gateway Layer**
   - every sensitive access path is mediated through a capability gateway
   - examples: filesystem, terminal, app control, screen capture, camera, microphone, Slack, Shopify
   - permissions are explicit, visible, revocable, and logged

4. **Worker / Copy Layer**
   - Atlas copies should be implemented as scoped worker agents, not as open-ended self-copying behavior
   - each worker gets:
     - a task
     - a time limit
     - a tool limit
     - a write limit
     - a stop condition
   - a supervisor coordinates workers and merges results

5. **Voice / Presence Layer**
   - voice-to-voice interaction should sit on top of the planner + runtime stack
   - microphone access should be session-gated and visibly active
   - future camera/screen context can be added only through explicit consent gates

6. **Operator Control Layer**
   - pause all workers
   - stop one worker
   - revoke one capability
   - revoke all live capabilities
   - require confirmation on destructive or risky actions
   - show current active permissions and active workers

## Capability Classes
### Base Capability Set
- browser automation
- local file read/write
- terminal execution
- window/app launching
- clipboard access
- notifications

### Extended Capability Set
- screen capture / screen understanding
- microphone input
- speaker / voice output
- camera input
- local database access
- mounted folders / sync folders

### Connected Service Capability Set
- GitHub
- Google Workspace
- Slack
- Shopify
- Aha!
- future project-management or CRM surfaces

## What "Copies Of Atlas" Should Mean In Practice
The safe and useful meaning is:
- one supervisor Atlas
- several temporary task workers
- shared memory rules
- independent execution sandboxes where possible
- no uncontrolled self-spawning

### Recommended Worker Types
- **research worker** — gathers information only
- **build worker** — edits code/config inside an approved workspace
- **ops worker** — handles dashboards, logs, statuses, notifications
- **commerce worker** — Shopify/product/revenue tasks only
- **communication worker** — drafts Slack/email/docs only

## Required Safety Properties
- all workers are named and visible
- every worker has a bounded role
- every worker has an expiry time
- every worker writes to logs
- every worker can be stopped immediately
- high-risk capabilities stay gated even when the system grows

## Recommended Build Order
1. finish the first interactive mobile-shell/live runtime proof
2. add the first local desktop runtime with explicit computer-level permissions
3. add screen + file + terminal control behind a capability gateway
4. add voice in/out
5. add worker orchestration for parallel tasks
6. add selected integrations
7. add optional camera/context tools
8. add commerce workflows for Shopify finish + launch support

## What Should Not Be Done Early
- uncontrolled full-device autonomy
- always-on camera/mic by default
- silent background workers without visible state
- unbounded self-copying logic
- destructive system actions without explicit control gates

## What This Means For Atlas Product Direction
The next-generation Atlas should be framed as:
- **a personal local-first operator system**
- with **visible powers**
- **user-granted senses and tools**
- **parallel workers**
- **hard override**
- and **durable repo-backed memory**
