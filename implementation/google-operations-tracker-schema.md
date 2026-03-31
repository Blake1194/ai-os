# Google Operations Tracker Schema

## Recommended Spreadsheet Name
`Atlas OS Live Operations Tracker`

## Recommended Sheet / Tab Names
### 1. `Live Tracker`
Primary working tab for current operational rows.

### 2. `Archive`
Closed rows moved out of the live view after they are complete or no longer active.

Keep the first version to these two tabs only.

## First Sheet Structure
Use the following columns in `Live Tracker`.

| Column | Required | Purpose |
|---|---|---|
| `ops_id` | yes | Stable row identifier such as `OPS-001`. |
| `created_at` | yes | Date the row was first created. |
| `updated_at` | yes | Most recent date the row was meaningfully updated. |
| `item_type` | yes | Short type label such as `intake`, `task-candidate`, `follow-up`, `review`, or `blocker`. |
| `title` | yes | One-line description of the active item. |
| `status` | yes | Current state such as `new`, `active`, `waiting`, `review`, `done`, or `archived`. |
| `due_window` | no | Short urgency window such as `today`, `this-week`, or `later`. |
| `current_surface` | yes | Main place where the next action lives: `github`, `google-sheet`, `google-doc`, `browser`, or `other`. |
| `next_action` | yes | Clear next visible action for the item. |
| `github_anchor` | no | Repo path or link to the durable GitHub artifact tied to the row. |
| `repo_promotion_target` | yes | `none`, `note`, `task`, `log`, `decision`, or `checkpoint`. Indicates whether the row now needs durable writeback. |
| `notes_short` | no | One short clarification note only. Keep this compact. |

## Field Purpose Guidance
### `ops_id`
Provides a stable handle for discussion, filtering, and safe updates.

### `item_type`
Keeps the tracker lightweight without forcing many separate sheets.

### `status`
Allows quick operational review without long narrative notes.

### `current_surface`
Shows where the next action should happen so Atlas does not lose lane context.

### `github_anchor`
Prevents duplicate authority by pointing the row back to the durable repo record when one exists.

### `repo_promotion_target`
Makes writeback explicit. A row should not silently become durable memory inside Sheets.

## Example Rows
| ops_id | created_at | updated_at | item_type | title | status | due_window | current_surface | next_action | github_anchor | repo_promotion_target | notes_short |
|---|---|---|---|---|---|---|---|---|---|---|---|
| OPS-001 | 2026-03-31 | 2026-03-31 | review | Review current Atlas implementation queue | active | today | github | Re-check task-004 through task-007 and confirm next executable step | `tasks/task-004-cli-intake-layer.md` | note | Keep review short and action-focused |
| OPS-002 | 2026-03-31 | 2026-03-31 | task-candidate | Decide when request intake work becomes active build work | review | this-week | github | Promote to repo task only when build execution is approved | `implementation/first-build-step.md` | task | Avoid duplicating the build plan in Sheets |
| OPS-003 | 2026-03-31 | 2026-03-31 | follow-up | Sync Google tracker lessons back into repo memory | new | later | github | Update notes or decisions if tracker usage changes system behavior | `memory/notes.md` | decision | Only promote if operating rules actually change |

## Update Rules
- every live row must have a clear `status` and `next_action`
- update `updated_at` whenever `status`, `next_action`, or `repo_promotion_target` changes
- keep `title` short enough to scan in a filtered view
- keep `notes_short` to one compact clarification, not a narrative log
- if a row becomes durable, write back to GitHub and set `github_anchor`
- move completed rows to `Archive` after they are no longer useful in the live view
- do not delete rows just to keep the sheet clean; archive them unless removal is clearly safe

## How Do Should Use the Tracker Safely
Do should:
- treat the tracker as a live operating aid, not durable memory
- create or update rows only for short active items
- keep rows compact and operational
- prefer archive over deletion
- stop before any unrelated Google action outside the tracker task
- write durable outcomes back into GitHub before treating the tracker as complete

## How The Tracker Avoids Duplicating Core GitHub Memory
The tracker avoids duplication by:
- storing only a short operational slice of work
- using `github_anchor` to point back to durable repo files
- using `repo_promotion_target` to signal when GitHub writeback is required
- avoiding long-form narrative, architecture, decisions, checkpoints, and implementation detail in the Sheet
- moving long-lived meaning into GitHub instead of expanding the tracker into a second memory system
