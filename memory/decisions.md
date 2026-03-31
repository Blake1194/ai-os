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
- Bounded repo-local code execution and validation have now started; this decision now serves as the durable toolchain reference inside the existing narrow boundary.
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

## ChatGPT Controlled Relay Decision
- ChatGPT-thread interaction is allowed only as a controlled browser relay surface.
- The current ChatGPT thread may be treated as a readable browser page and controllable draft box, but not as an autonomous conversation target.
- ChatGPT relay mode remains draft-only unless explicit send authorization is given.
- GitHub remains the durable system spine; ChatGPT relay mode does not replace repo memory, checkpoints, or implementation state.
- Controlled relay mode must not alter prior messages, settings, or profile/account areas.

## ChatGPT Relay Preferences Decision
- The current approved ChatGPT thread may be used as a controlled draft relay surface.
- Draft-only behavior is the default operating rule for ChatGPT relay mode.
- Send requires explicit authorization and must not be inferred.
- ChatGPT relay behavior must remain low-risk, non-destructive, and subordinate to the repo lane.
- The purpose of relay mode is to reduce manual copy/paste friction, not create autonomous chat loops.

## Request Intake Revalidation Decision
- `request_intake_entrypoint.js` is confirmed first-pass validated only within the examples, contract checks, and boundary checks actually rerun.
- No refinement was needed in the current validation pass.
- `implementation/local-assistant-cli/src/routing_entrypoint.prep.md` remains the single safe follow-on preparation artifact.

## Routing First-Pass Boundary Decision
- `routing_entrypoint.js` is bounded to first-pass classification/output behavior only.
- The first routing pass may accept normalized intake output, map explicit supported modes, and refuse invalid or unsupported routing input safely.
- The first routing pass must not perform execution, memory actions, logging actions, repo reads/writes, or external integrations.
- Formal routing validation should run before memory/write work begins.

## Routing Validation Decision
- `routing_entrypoint.js` is confirmed first-pass validated only within the routing examples, prep boundary, validation-prep expectations, contract checks, and boundary checks actually rerun.
- No refinement was needed in the current routing validation pass.
- `implementation/local-assistant-cli/src/memory_write_read.prep.md` is now the single safe follow-on preparation artifact.

## Memory Write/Read Boundary Decision
- Memory write/read remains bounded to first-pass repo-safe behavior only.
- The memory layer may use only approved read targets and approved write target families in the first pass.
- The memory layer must not expand into logging/reporting behavior, broader automation, or uncontrolled file operations.
- `implementation/local-assistant-cli/src/memory_write_read.validation.md` is now the single safe follow-on artifact before any memory code exists.

## Memory Write/Read Validation Decision
- The memory write/read layer is confirmed first-pass validated only within the prep/spec/examples checks and boundary checks actually rerun.
- No refinement was needed in the current memory write/read validation pass.
- `implementation/local-assistant-cli/src/logging_reporting.prep.md` is now the single safe follow-on preparation artifact.

## Logging/Reporting Boundary Decision
- Logging/reporting remains bounded to first-pass repo-safe behavior only.
- The logging/reporting layer must not expand into broader automation, uncontrolled file operations, or later-stage orchestration.
- The first logging/reporting pass should remain a factual return-object boundary only, with no automatic repo log writes.
- `implementation/local-assistant-cli/src/logging_reporting.validation.md` is now the single safe follow-on artifact before any logging/reporting code exists.

## Logging/Reporting Validation Decision
- The logging/reporting layer is confirmed first-pass validated only within the prep/spec/examples checks and boundary checks actually rerun.
- No refinement was needed in the current logging/reporting validation pass.
- `implementation/first-pass-stack-status.md` now serves as the safe stack-status reference before the next bounded code step.

## Memory Write/Read Code Artifact Decision
- `memory_write_read.js` is bounded to first-pass repo-safe behavior only.
- The first memory code pass may accept validated routing output, map supported classifications to approved target sets, and refuse unsafe memory operations safely.
- The first memory code pass must not perform logging/reporting behavior, broader automation, or later-stage orchestration.
- `implementation/local-assistant-cli/src/memory_write_read.code_validation.md` is now the validation record for the actual first bounded memory code-validation pass.

## Memory Write/Read Code Validation Decision
- `memory_write_read.js` is confirmed first-pass validated only within the spec/example/code-example/contract/boundary checks actually run.
- One small refinement aligned the task/log placeholder write targets with the documented memory examples: `tasks/task-xxx.md` and `logs/session-log-xxx.md`.
- The refinement did not add dependencies, file operations, logging/reporting behavior, or broader automation/orchestration behavior.
- `implementation/local-assistant-cli/src/logging_reporting.code_prep.md` is now the single safe follow-on preparation artifact before any `logging_reporting.js` implementation step begins.

## Logging/Reporting Code Artifact Decision
- `logging_reporting.js` is bounded to first-pass repo-safe behavior only.
- The first logging/reporting code pass may accept validated memory output, map allowed reporting results to structured return output, and refuse malformed or unsafe reporting requests safely.
- The first logging/reporting code pass must not perform automatic repo log writes, uncontrolled file operations, broader automation, or later-stage orchestration.
- `implementation/local-assistant-cli/src/logging_reporting.code_validation.md` is now the validation record for the actual first bounded logging/reporting code-validation pass.

## Logging/Reporting Code Validation Decision
- `logging_reporting.js` is confirmed first-pass validated only within the code-prep/spec/example/code-example/contract/boundary checks actually run.
- No refinement was needed in the current logging/reporting validation pass.
- The validation did not add dependencies, file operations, broader automation/orchestration behavior, or later-stage behavior.
- `implementation/bounded-end-to-end-dry-run-plan.md` is now the single safe follow-on preparation artifact before any bounded end-to-end dry run begins.


## First-Pass Promotion Decision
- the current integrated first-pass Atlas OS stack is now promoted to the `First-Pass Readiness Milestone`.
- this promotion is based on validated code artifacts across intake, routing, memory write/read, and logging/reporting plus two successful bounded dry runs actually run inside the repo-local environment.
- promotion does not authorize installs, external integrations, uncontrolled file operations, broader automation/orchestration behavior, later-stage voice behavior, or autonomous looping.
- `checkpoints/checkpoint-003-first-pass-promoted-state.md` is now the durable promoted-state checkpoint to read first when resuming from the promoted state.

## Post-Promotion Next Move Decision
- `implementation/post-promotion-next-options.md` is now the single safe follow-on artifact after promotion.
- the recommended first post-promotion move category is operator adoption.


## Operator Adoption Decision
- the promoted first-pass stack is now ready for controlled operator adoption.
- controlled operator adoption means Blake should begin using the promoted first-pass stack in real sessions while GitHub remains the durable source of truth, Google remains the live-ops lane, ChatGPT remains the command center, and Do remains the execution surface.
- controlled operator adoption does not authorize uncontrolled expansion, broad automation rollout, or second-generation architecture work.
- `operator/operator-adoption-threshold.md` is now the single safe follow-on artifact for determining whether Atlas OS should stay in adoption mode longer or justify a later bounded expansion.


## First Operator Adoption Cycle Decision
- the first controlled operator adoption cycle result is: operator adoption cycle passed with minor friction.
- repo-only mode was the correct lane for the first controlled cycle because the work stayed fully inside GitHub repo artifacts and packaging.
- the runbook was sufficient for the cycle, but one small refinement was useful: it should explicitly point operators to `operator/first-pass-daily-usage.md` during live operator sessions and adoption cycles.
- Atlas OS should remain in adoption mode and prioritize repetition of additional small controlled cycles before any bounded expansion is considered.


## Second Operator Adoption Cycle Decision
- the second controlled operator adoption cycle result is: second operator adoption cycle passed with minor friction.
- repo-only mode was again the correct lane because the work stayed fully inside durable repo artifacts and operator packaging.
- the cycle-001 runbook refinement held up and improved startup consistency in cycle 002.
- operator adoption now looks stable enough for repeated real use inside the current promoted first-pass boundary, but not strong enough to justify bounded expansion consideration yet.
- the next safe move remains repetition: run one more controlled operator adoption cycle before considering any later bounded expansion discussion.


## Third Operator Adoption Cycle Decision
- the third controlled operator adoption cycle result is: third operator adoption cycle passed with minor friction.
- repo-only mode was again the correct lane because the work stayed fully inside durable repo artifacts and operator packaging.
- three consecutive low-risk repo-centered cycles now confirm a stable startup-to-closeout operator path inside the current promoted first-pass boundary.
- repeatability is now strong enough to justify the next move category decision of milestone packaging for repeated use, but not strong enough to justify bounded expansion consideration.
- more repetition across a wider variety of still-bounded session types would still be needed before any expansion is considered.


## Repeated-Use Milestone Decision
- the current first-pass Atlas OS stack is now packaged as the `Repeated-Use Ready Milestone`.
- repeated-use readiness is supported by validated first-pass code artifacts, successful bounded dry-run evidence, successful bounded refinement evidence, and three controlled operator adoption cycles that all passed with minor friction.
- the milestone is packaged with cautions: it supports repeated day-to-day use inside the current boundary, but it does not authorize bounded expansion consideration yet.
- `checkpoints/checkpoint-004-repeated-use-ready-state.md` is now the durable resume anchor for repeated daily use.
- `operator/post-repeated-use-next-options.md` is now the single safe follow-on artifact after repeated-use packaging, and the recommended first move is continued repeated use.


## First Repeated-Use Session Decision
- the first real repeated-use session result is: repeated-use session passed with minor friction.
- the repeated-use quickstart, checkpoint-004, and repo-only operating path held up in real bounded use without drift.
- repeated-use stability is now strong enough to support continued repeated use inside the current repeated-use-ready boundary.
- the current evidence still does not justify bounded expansion consideration; the next safe move remains continued repeated use.


## Second Repeated-Use Session Decision
- the second real repeated-use session result is: repeated-use session passed with minor friction.
- the repeated-use quickstart, checkpoint-004, and repo-only operating path held up again without drift.
- repeated-use stability now appears slightly stronger over time within the same bounded repo-centered operating lane.
- the next safe move remains continued repeated use; a later threshold review is optional only after more continued repeated-use evidence exists.


## Third Repeated-Use Session Decision
- the third real repeated-use session result is: repeated-use session passed with minor friction.
- the repeated-use quickstart, checkpoint-004, and repo-only operating path held up again without drift.
- repeated-use stability now appears slightly stronger over time across three repeated-use sessions in the same bounded repo-centered operating lane.
- the next safe move remains continued repeated use; threshold review is still later and optional only after more continued evidence exists.


## Fourth Repeated-Use Session Decision
- the fourth real repeated-use session result is: repeated-use session passed with minor friction.
- the repeated-use quickstart, checkpoint-004, and repo-only operating path held up again without drift.
- repeated-use stability now shows a slightly stronger trend over time across four repeated-use sessions in the same bounded repo-centered operating lane, but the gain is not yet material.
- the next safe move remains continued repeated use; threshold review is still later and optional only after more continued evidence exists.


## Fifth Repeated-Use Session Decision
- the fifth real repeated-use session result is: repeated-use session passed with minor friction.
- the repeated-use quickstart, checkpoint-004, and repo-only operating path held up again without drift.
- repeated-use stability is now approaching undeniable across five repeated-use sessions, but only within the same bounded repo-centered operating lane; it is still not broad or material enough to justify expansion consideration.
- the next safe move remains continued repeated use; threshold review is still later and optional only after more continued evidence exists.


## Sixth Repeated-Use Session Decision
- the sixth real repeated-use session result is: repeated-use session passed with minor friction.
- the repeated-use quickstart, checkpoint-004, and repo-only operating path held up again without drift.
- repeated-use consistency is now strong enough to justify a later threshold review for the same narrow repo-centered operating lane.
- this does not justify bounded expansion consideration; the next safe move is later threshold review inside the current boundary.


## Repeated-Use Threshold Review Decision
- the repeated-use threshold result is: threshold supports small operator-facing refinement next.
- the current repeated-use-ready state is strongly repeatable within the same narrow repo-centered operating lane, but not broad enough for broader readiness packaging or bounded expansion consideration.
- the single most justified next move is a small operator-facing refinement because the same minor source-of-truth navigation friction persisted across repeated-use sessions without blocking progress.
- `operator/post-threshold-next-step.md` is now the single safe follow-on artifact after the threshold review.

## Automation Control Layer Decision
- Atlas OS now has a bounded automation control layer for reducing manual coordination without enabling unsafe autonomy.
- the first automation layer is limited to approved file reads, safe lane resolution, next-action resolution within approved non-expansion categories, draft session packaging, and hard stop-gate enforcement.
- installs, credentials/logins, external integrations, destructive changes, bounded expansion, second-generation architecture work, and uncontrolled autonomous behavior remain blocked or manual-approval-only.
- `automation/first-automation-milestone.md` is now the single safe follow-on artifact for the first bounded automation implementation milestone.

## Bounded Session Coordination Implementation Decision
- the first implementation move after the automation control layer should package exact session-start, next-action-resolution, and session-close behavior as documentation before any code-facing automation step is considered.
- the first review gate after this implementation package should be manual review, not automatic progression.
- the bounded session-coordination dry-run plan should be treated as the exact review boundary for any later approved time-box in this lane.

## Sprint Mode Decision
- Atlas OS now has a reusable Sprint Mode template system for future time-boxed bounded-autonomy runs inside the current repo-safe boundary.
- approved reusable sprint lengths right now are 20, 30, and 45 minutes only.
- 60-minute mode is not approved from the current repo-safe evidence set.
- Sprint Mode should require manual review before another sprint whenever the template says review is required.
- `automation/sprint-mode-first-approved-use.md` is the single safe follow-on artifact for the first approved Sprint Mode use.

## Readiness Estimate Decision
- readiness estimates in Atlas OS must distinguish manual use, bounded Sprint Mode use, and broader automation.
- the current honest estimate is: ready to start using now inside the current narrow repo-safe boundary; limited and cautious readiness for review-only or documentation-only bounded Sprint Mode work; not ready for broader automation.
- Atlas OS must not claim "go to bed while it safely works" from the current evidence set.
- the single best next step for improving bounded sprint readiness is a manually approved tightly bounded session-coordination dry run followed by review.

## Manual Review Package Decision
- `implementation/manual-review-package-001.md` now serves as the human-facing approval package for deciding whether one tightly bounded session-coordination dry run should be approved.
- the package recommends approval of one tightly bounded dry run only, with the existing cautions and stop conditions still fully in force.
- this package does not itself approve or execute the dry run.

## V1 Launch Threshold Decision
- practical V1 for Atlas OS means Blake can start a normal repo-safe session, complete one bounded useful piece of work, capture the durable outcome, close cleanly, and resume later without rebuilding the rules.
- Atlas OS is not yet at that finish line until one manually approved tightly bounded session-coordination dry run succeeds inside the existing dry-run boundary.
- the next higher-output step should be execution, not another packaging pass.
- each future sprint should be judged by whether it produces one meaningful concrete outcome rather than more meta-documentation.

## Session-Coordination Dry Run Decision
- the first tightly bounded session-coordination dry run has now been executed inside the approved repo-safe boundary.
- startup, closeout, next-step preservation, and stop-gate handling were clear enough in the dry run actually run.
- Atlas OS has now reached the practical V1 usable checkpoint for repo-safe daily use, with cautions.
- the next move should be V1 freeze rather than another packaging pass.

## Usable V1 Freeze Decision
- the current narrow repo-safe Atlas OS boundary is now frozen as Usable V1, with cautions.
- usable V1 means practical daily repo-safe use now, not broader automation readiness.
- checkpoint-005 is now the primary resume anchor for real first-pass daily use inside the frozen boundary.
- the next move after freeze is the first real V1 session, not broader automation or second-generation work.

## First Real V1 Session Decision
- the first real V1 session has now been executed inside the frozen repo-safe boundary.
- startup, lane selection, closeout, and next-step preservation worked in practice without rebuilding the rules from scratch.
- Atlas OS now feels practically usable inside the frozen repo-safe lane, with cautions still in force.
- the next best package is a second real V1 session on a different still-bounded useful task type.

## Practical Use Confirmation Decision
- practical V1 use is now confirmed inside the frozen repo-safe boundary.
- this confirmation is supported by the bounded session-coordination dry run plus two real V1 sessions across more than one bounded real-use pattern.
- the confirmation remains narrow: broader automation, unattended overnight-safe use, external integrations, bounded expansion, and second-generation work are still not approved.
- the next best package is `operator/v1-use-package-003.md`.

## Ordinary Bounded Real-Use Confirmation Decision
- ordinary bounded real use is now confirmed inside the frozen repo-safe boundary, with cautions.
- this confirmation is supported by the session-coordination dry run plus three real V1 sessions across multiple bounded real-use patterns.
- the confirmation remains narrow: broader automation, unattended overnight-safe use, external integrations, bounded expansion, and second-generation work are still not approved.
- the next best large package is `operator/v1-package-004-next-large-block.md`.

## Controlled Expansion Mode Decision
- Atlas OS is now in controlled expansion mode.
- installs, external integrations, second-generation architecture work, and Android/mobile app work are now allowed when they are part of an explicit recorded package.
- credentials/logins still require explicit in-the-moment approval.
- destructive or irreversible changes still require explicit approval.
- the highest-leverage credential-free expansion outcome now created is the Atlas mobile shell scaffold at `implementation/atlas-mobile-shell/`.
- the next best major package is `implementation/expansion-next-major-package.md`.

## ChatGPT Thread Migration Decision
- the active ChatGPT continuation thread is now `Atlas OS Build Plan`.
- the older `Greeting exchange` thread remains reference-only and is no longer the primary continuation thread.
- thread continuity must be preserved through repo anchors first, with `operator/chatgpt-thread-registry.md` and migration files recording future thread changes.

## System Access And Multi-Agent Direction Decision
- Atlas should evolve toward transparent full-computer access through a local runtime with explicit capability gating, not through hidden or uncontrolled autonomy.
- Atlas copies should be implemented as bounded worker agents with supervisor control, expiry, logs, stop-gates, and hard operator override.
- microphone, camera, screen, filesystem write, terminal, app control, and live integrations should remain off by default and be operator-granted.
- a thin custom Atlas chatbot surface is desirable later, but it is not the core system spine.
- Base44 may be useful as a fast presentation layer later, but GitHub remains the durable spine.
- after a stable assistant baseline is achieved, Shopify finish-and-launch support becomes the preferred next commercial lane.
