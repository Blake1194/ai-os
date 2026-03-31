# Google-First Operations Plan

## Purpose
Define how Atlas OS should use Google Workspace as the preferred live operations lane while keeping GitHub as the core command, memory, and build spine.

## Recommended Split
### GitHub = Command / Memory / Build Spine
Use GitHub for:
- durable system memory
- architecture and workflow files
- tasks, projects, logs, decisions, and checkpoints
- implementation planning and code/build artifacts

GitHub should remain the authoritative system spine.

### Google Workspace = Live Operations Lane
Use Google Workspace for:
- fluid day-to-day operational surfaces
- structured tracking when rows/columns are more useful than markdown
- working notes, drafts, and collaborative operational artifacts
- future communication and scheduling workflows

Google should support live operations, not replace core memory.

### Do Browser = Browser Operator
Use Do Browser for:
- web execution
- interacting with GitHub and Google surfaces
- staged browser automation
- safe operation that stops before irreversible actions

### Future Local Assistant = Later Execution Shell
Use the future local assistant for:
- local-first interaction
- routing and execution shell behavior
- later voice or personal assistant behavior

This remains a later-stage execution surface, not the current source of truth.

## Operating Principle
Atlas OS should remain GitHub-centered for system memory and implementation planning, while Google Workspace becomes the preferred live operations lane.

## What This Means Now
- keep architecture, tasks, checkpoints, and implementation files in GitHub
- use Google tools for live working surfaces only when they reduce friction
- avoid moving core memory out of GitHub
- avoid creating duplicate authority between repo files and Google artifacts

## Use Now / Use Later / Avoid For Now
### Use Now
- GitHub for durable system state
- Google Sheets for structured tracking when markdown is awkward
- Google Docs for fluid working notes/spec drafts if needed
- Do Browser for operation across GitHub and Google surfaces

### Use Later
- Google Drive for broader asset storage patterns
- Gmail for communication workflows
- Google Calendar for schedule/reminder workflows
- Google Tasks / Keep if lightweight capture becomes useful
- Apps Script when there is a clear automation target

### Avoid For Now
- moving checkpoints, decisions, or implementation contracts out of GitHub
- using too many Google surfaces at once before the main implementation path stabilizes
- activating Apps Script before a real automation loop is ready
