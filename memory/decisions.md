# Decisions

## Key Decisions
- GitHub will serve as the central system spine for Atlas OS.
- ChatGPT will serve as the primary command and reasoning layer.
- Do Browser will serve as the browser operator layer.
- The first build will stay simple and structured.
- The system will favor workflow definitions before full automation code.
- The system will stop before irreversible actions by default.
- Local assistant features will be added in later stages, not before the core system works.

## Daily Operating Decisions
- Atlas OS will use a daily operating loop as the primary human-to-system interaction pattern.
- Reusable operating behavior should be captured as command templates and workflows.

## Template Decisions
- Future repeatable work in Atlas OS should use templates whenever possible instead of ad hoc structure.

## Local Assistant Decisions
- The local assistant effort will be developed as a project with versioned milestones.
- Early versions should prioritize usefulness and integration over perfection.

## Local Assistant MVP Decisions
- The assistant will be developed through staged MVP-first progress.
- The first implementation should optimize for usefulness, controllability, and low complexity rather than maximum ambition.
- The recommended first implementation direction is a CLI-first assistant that reads and writes Atlas repo state before voice or service layers are added.

## Implementation Readiness Decisions
- The first implementation layer should live under `/implementation/local-assistant-cli/`.
- The MVP should use explicit interface/contracts before broader runtime complexity is added.
- The repo remains the durable state layer for notes, tasks, logs, checkpoints, small code, and small fixtures.
- Large media, bulky exports, and future runtime caches should stay out of the normal repo path.

## Resource Leverage Decisions
- Atlas OS should maximize already-available resources carefully, but avoid multi-lane sprawl until the main implementation path is stable.
- The GitHub repo and the current Do lane remain the core operating surfaces.
- Google Sheets should be used only for clearly structured tracking that adds real leverage over markdown.
- A second Do lane should be treated as optional and justified only when it reduces confusion instead of increasing it.
