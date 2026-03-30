# Local Assistant Storage Architecture

## Objective
Define what belongs in the GitHub repo, cloud storage, local machine storage, and future runtime state for Atlas OS and the local assistant MVP.

## 1. GitHub Repo
Use the repo for durable, versioned, human-readable assets such as:
- architecture docs
- workflows
- tasks
- projects
- commands
- logs
- checkpoints
- implementation docs
- small source code files
- small test fixtures

The repo should remain the system spine for durable logic and history.

## 2. Cloud Drive
Use cloud storage later for assets that are durable but too bulky or awkward for the repo, such as:
- screenshots
- exported reports
- transcripts
- media files
- large reference files
- backups of non-code project materials

Cloud storage should complement the repo, not replace it.

## 3. Local Machine
Use the local machine for:
- active implementation working copy
- runtime caches
- temporary files
- dev environment assets
- short-lived exports before they are archived or deleted

Local-only artifacts should not be treated as the primary memory spine.

## 4. Future Runtime State
Future runtime state should hold:
- ephemeral session state
- recent command history
- queued actions
- cached context
- temporary result objects

Future runtime state should stay outside the repo unless a summary or durable artifact needs to be committed back.

## 5. Asset Placement Guidance
### Screenshots
- primary home: cloud drive or local archive
- repo: only if tiny and directly needed for docs/tests

### Transcripts
- summary in repo if useful
- full bulky transcript in cloud/local if needed

### Exports / Reports
- repo if small and structural
- cloud/local if large or binary

### Notes / Decisions / Tasks / Logs
- repo

### Media Files
- cloud/local, not normal repo storage

### Code
- repo

## 6. Storage Guardrails
Do not put in the repo by default:
- secrets
- credentials
- large media
- large binaries
- bulky unstructured exports
- temporary runtime caches

## 7. Backup Guidance
Recommended durable pattern:
- repo for structure, code, decisions, logs, and checkpoints
- cloud drive for large durable artifacts
- local machine for active work and temporary runtime state

## 8. MVP Implication
The CLI-first assistant MVP should treat the repo as the primary durable state layer and avoid depending on large local or cloud asset systems in the first implementation pass.
