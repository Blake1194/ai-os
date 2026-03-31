# Google Sheets Tracker Spec

## Purpose
Define the first practical Google Sheets tracker Atlas OS should use as part of the Google-first operations path.

The first tracker should be a **lightweight live operations tracker** rather than a large system database. Its job is to hold the current operational slice of work that benefits from row-based status review, while GitHub continues to hold durable memory, tasks, logs, decisions, checkpoints, and implementation artifacts.

## First Practical Tracker
**Recommended first tracker:** `Atlas Live Operations Tracker`

This tracker is for:
- active operating items that change frequently
- short structured follow-ups that are awkward in markdown lists
- quick review of status, next action, and current surface
- deciding when live operational work should be promoted back into GitHub

This tracker is **not** for replacing the repo task system or moving durable memory out of GitHub.

## Why Sheets Is the Right Live Surface
Google Sheets is the right first live surface for this use because it provides:
- fast row-based capture with minimal friction
- compact status review across many small active items
- easy filtering by status, due window, and operational surface
- better daily triage than scattered markdown bullets
- a lightweight operational dashboard without adding heavy new infrastructure

For this first use case, Sheets adds leverage specifically because the information is small, repetitive, and frequently updated.

## What Should Be Tracked Now
Track only items that are:
- currently active or likely to move soon
- short enough to fit cleanly into a row
- operational rather than architectural
- useful to review by status, next action, or due window
- likely to generate a GitHub follow-up once they become durable

Good first examples:
- active operating items from the daily loop
- follow-ups waiting on browser execution or review
- short implementation-prep items that still need triage
- lightweight coordination state such as `new`, `active`, `waiting`, `review`, or `done`
- candidate items that may become repo tasks, session logs, notes, or decisions

## What Should Not Be Tracked Yet
Do **not** use the first tracker for:
- durable architecture notes
- implementation contracts or code-facing specs
- long-form project plans
- full decision history
- checkpoint/resume state
- large research notes or transcripts
- anything that already has a clear durable home in GitHub

Those belong in repo files, with the Sheet holding only a short operational row if a live review surface is helpful.

## Relationship To GitHub Memory, Checkpoints, and Tasks
### GitHub remains the durable system spine
GitHub stays authoritative for:
- memory notes
- formal tasks
- projects
- session logs
- decisions
- checkpoints
- implementation docs and code-related artifacts

### Sheets becomes the live structured review surface
Sheets should hold:
- current operational rows
- compact status fields
- next-action visibility
- lightweight triage state
- promotion signals that indicate when something now deserves a repo artifact

## Authority Rules
### When Sheets should update GitHub
A tracker row should trigger a GitHub update when it becomes any of the following:
- a multi-step work item that deserves a repo task
- a durable operating outcome that belongs in a session log
- a system rule change that belongs in `memory/decisions.md`
- a meaningful new understanding that belongs in `memory/notes.md`
- a resume-critical state change that belongs in a checkpoint

### When GitHub should remain the source of truth
GitHub should remain authoritative whenever the item is:
- durable
- narrative
- architectural
- implementation-facing
- important for recovery/resume
- important enough to cite later as system memory

In those cases, the Sheet should store only a short operational reference plus a link or path back to the repo artifact.

## Recommended Operating Pattern
1. capture live operational items in the Sheet when row-based status tracking is useful
2. keep each row short and action-oriented
3. attach a GitHub anchor when a durable repo file already exists
4. promote rows into repo tasks/logs/notes/decisions/checkpoints when they become durable
5. archive closed rows instead of treating the Sheet as permanent memory

## Success Condition
The first tracker is successful if it:
- reduces friction in live operational review
- improves status visibility for current work
- helps identify what should be written back into GitHub
- avoids becoming a duplicate task system or duplicate memory store
