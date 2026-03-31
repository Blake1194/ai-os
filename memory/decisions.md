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

## Google Operations Decisions
- Atlas OS should remain GitHub-centered for system memory and implementation planning.
- Google Workspace should become the preferred live operations lane.
- Browser + Google + GitHub is the preferred near-term operating stack.
- Future integrations should favor simplicity and continuity over scattered tool expansion.

## Google Sheets Tracker Decisions
- The first Google operational surface should be a lightweight Google Sheets tracker.
- The first tracker should be used for live structured operational review, not as a replacement for repo tasks or memory.
- GitHub remains the durable system spine and source of truth for notes, tasks, logs, decisions, checkpoints, and implementation planning.
- Any row that becomes durable should be promoted back into the repo as a note, task, log, decision, or checkpoint instead of remaining authoritative in Sheets.

## Google Live Ops Validation Decision
- Google Sheets is now validated for live structured tracking of real Atlas OS work.
- GitHub remains the durable source of truth for any promoted outcome from the live tracker.
- The live tracker should be used for short operational items, not as a second authority for tasks, memory, or implementation planning.

## Atlassian Decision
- Atlassian is optional for Atlas OS and must not replace GitHub as the system spine.
- GitHub remains the command, memory, checkpoint, and implementation source of truth.
- Google Workspace remains the preferred live operations lane.
- Jira may be used later as a narrow execution layer only if it clearly reduces operational friction.
- Do not adopt Bitbucket, Trello, Confluence, Rovo, or broad Atlassian rollout at this stage.
- Any Atlassian use must stay subordinate to the existing GitHub-first operating model.

## Runtime / Toolchain Decision
- The first runtime/toolchain choice is plain Node.js + JavaScript.
- The first real code-facing implementation file should be `implementation/local-assistant-cli/src/request_intake_entrypoint.js`.
- No actual code execution or install starts yet; this decision only defines the next approval gate clearly.
- TypeScript, frameworks, bundlers, external dependencies, and broader tooling should remain deferred until the first narrow code pass proves they are needed.

## First Code Artifact / Codex Decision
- The first actual code artifact is now started at `implementation/local-assistant-cli/src/request_intake_entrypoint.js`.
- The first code pass must remain limited to request normalization and structured refusal behavior.
- Codex should only be used later within the existing first-pass boundary and must not expand scope, tooling, or architecture prematurely.
- The existence of the first code file does not authorize installs, runtime expansion, or broader implementation behavior beyond the defined boundary.

## First Code Validation Decision
- The first code artifact is now treated as first-pass validated based on the examples, refusal cases, and boundary checks actually run.
- No code refinement was needed during this validation pass.
- The next prep artifact is `implementation/local-assistant-cli/src/routing_entrypoint.prep.md`.
- Routing code should remain the next implementation step only within the same narrow first-pass boundary.
