# Google Sheets Tracker Commands

## Define or Refine the Tracker Schema
- "Define or refine the Atlas Google Sheets tracker as a lightweight live operations tracker. Keep the schema small, practical, and clearly subordinate to GitHub."
- "Review the current tracker fields and remove anything that duplicates durable repo memory instead of supporting live operational review."

## Use Sheets for Live Structured Tracking
- "Use the Atlas live tracker for active work items that change frequently and benefit from row-based status review, filters, and quick next-action scanning."
- "Add this item to the live tracker only if it is short, operational, and likely to move soon."
- "Keep tracker rows compact: status, next action, due window, current surface, and GitHub anchor when available."

## Sync Tracker Insights Back Into GitHub Notes or Tasks
- "Review the live tracker and write back any durable insight into the correct GitHub file: notes, task, log, decision, or checkpoint."
- "Promote all tracker rows marked for repo writeback into the appropriate GitHub artifacts before the session closes."
- "Convert the current tracker review into a repo update that preserves durable state and leaves the Sheet as a temporary operations surface."

## Avoid Duplicate Authority Between Sheets and GitHub
- "Before adding or expanding a tracker field, confirm whether GitHub already holds the durable source of truth. If yes, keep only a short row plus a GitHub anchor."
- "Do not use the tracker as the primary store for architecture, implementation planning, decisions, checkpoints, or full narrative history."
- "If a row starts carrying durable meaning, move that meaning into GitHub and reduce the Sheet back to a lightweight operational reference."

## Decide When a Row Should Become a Repo Task, Log, Decision, or Note
- "Promote a tracker row into a repo task when it becomes multi-step executable work."
- "Promote a tracker row into a session log when it records a completed operating block or meaningful execution pass."
- "Promote a tracker row into a decision when it changes rules, standards, boundaries, or operating structure."
- "Promote a tracker row into notes when it adds durable understanding without changing system rules."
- "Promote a tracker row into a checkpoint when resumption safety or cross-session continuity now matters."
