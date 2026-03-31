# Do Resource Leverage Plan

## Purpose
Define how Atlas OS should use already-available tools, integrations, sessions, and browser lanes without creating unnecessary complexity.

## Operating Principle
Atlas OS should maximize leverage from already-available resources, but avoid multi-lane sprawl until the main implementation path is stable.

## Current Confirmed Resource Areas

### 1. Do Browser Operator
**What it is**
The primary browser operator lane that executes repo work, page interaction, uploads, and web-based task handling.

**What it is good for**
- safe browser execution
- GitHub repo manipulation
- inspection of current browser context
- staged task execution that stops before irreversible actions

**What it should be used for now**
- repo updates
- browser-based verification
- safe implementation-path progress
- structured operating tasks inside GitHub and the browser

**What it should not be used for yet**
- over-fragmented multi-lane operations
- sprawling parallel sessions unless clearly necessary
- heavy external integration setup

**Classification**
Core

**Risk of confusion if overused**
Moderate. Too many active Do lanes can make state, intent, and current action unclear.

---

### 2. Background Mode
**What it is**
Do’s ability to keep work running or staged without requiring constant foreground interaction.

**What it is good for**
- longer repo-update runs
- staged autonomous work blocks
- keeping work continuity without constant manual intervention

**What it should be used for now**
- longer repository build passes
- verification and multi-file update flows
- autonomous repo-only runs with clear stop conditions

**What it should not be used for yet**
- hidden multi-system automation
- concurrent task branches with unclear ownership

**Classification**
Core-supporting

**Risk of confusion if overused**
Moderate. Background work can become invisible if not paired with logs and checkpoints.

---

### 3. Current Do Thread / Session Lane
**What it is**
The current active execution lane for this Atlas OS build.

**What it is good for**
- maintaining continuity
- keeping the implementation path coherent
- avoiding unnecessary session fragmentation

**What it should be used for now**
- the main Atlas implementation track
- repo planning, updates, and implementation preparation

**What it should not be used for yet**
- unrelated exploratory branches
- side-topic detours that break implementation continuity

**Classification**
Core

**Risk of confusion if overused**
Low if kept focused, high if it becomes a catch-all lane for unrelated work.

---

### 4. Possible Additional Do Thread / Session Lane
**What it is**
A possible second Do lane for separate work.

**What it is good for**
- isolating a truly separate task stream
- keeping main execution clean when a side operation is genuinely independent

**What it should be used for now**
- only if a second lane has a clear purpose that cannot be handled sequentially in the current lane

**What it should not be used for yet**
- casual experimentation
- splitting the same implementation path across multiple lanes
- redundant browsing or duplicate repo updates

**Classification**
Optional / experimental

**Risk of confusion if overused**
High. Multiple Do lanes can easily create state drift and duplicated effort.

---

### 5. Google Sheets Connection / Integration
**What it is**
A connected structured-tracking surface available to Atlas OS.

**What it is good for**
- structured tables
- lightweight tracking dashboards
- implementation checklists and inventories
- status summaries that benefit from rows/columns instead of markdown prose

**What it should be used for now**
- only when structured tracking clearly helps more than markdown files
- small implementation checklists, inventories, or comparison tables if needed

**What it should not be used for yet**
- replacing repo memory
- becoming a second source of truth for core architecture, decisions, or checkpoints
- unnecessary parallel tracking of what is already clear in repo files

**Classification**
Optional

**Risk of confusion if overused**
High. Sheets can create duplicate state if the repo and sheet both try to be authoritative.

---

### 6. GitHub Repo as Command / Memory Spine
**What it is**
The durable system spine for Atlas OS.

**What it is good for**
- architecture docs
- tasks and projects
- checkpoints and logs
- implementation planning
- durable memory and versioned state

**What it should be used for now**
- primary command/memory surface
- implementation planning and implementation-start artifacts
- checkpoints, logs, notes, decisions, and contracts

**What it should not be used for yet**
- bulky media storage
- runtime caches
- external-service dependency logic

**Classification**
Core

**Risk of confusion if overused**
Low if it stays the primary memory spine. Confusion rises only if too many parallel systems compete with it.

---

### 7. Chrome / Browser-Tab Environment
**What it is**
The active browser environment Do can inspect and operate.

**What it is good for**
- web execution
- reading current repo pages
- navigating tool tabs
- validating browser-based state

**What it should be used for now**
- GitHub operations
- confirming visible resources and browser context
- lightweight web-native execution tasks

**What it should not be used for yet**
- excessive tab sprawl
- using too many unrelated active tabs as part of the same execution path

**Classification**
Core-supporting

**Risk of confusion if overused**
Moderate. Too many active tabs increase context drift.

---

### 8. Persistent Workspace / Local Working Files
**What it is**
The persistent workspace used to draft, stage, and verify files before pushing them into the repo.

**What it is good for**
- safe drafting
- file generation
- intermediate verification
- preserving artifacts across runs

**What it should be used for now**
- local staging before repo upload
- scratchpad generation for repo changes
- safe intermediate artifact storage

**What it should not be used for yet**
- becoming a hidden second authoritative memory system separate from the repo

**Classification**
Core-supporting

**Risk of confusion if overused**
Moderate. Local staging should support the repo, not replace it.

---

## Use Now / Use Later / Avoid For Now

### Use Now
- GitHub repo as command/memory spine
- current Do thread/session lane
- Do Browser as operator
- background mode for longer repo-only work blocks
- browser/tab environment in a controlled way
- persistent workspace for staging before repo updates

### Use Later
- Google Sheets, but only for clearly structured tracking that markdown handles poorly
- an additional Do lane, but only if a second task stream is truly separate and justified

### Avoid For Now
- unnecessary parallel Do lanes
- duplicate tracking across repo + Sheets + extra lanes
- opening more browser lanes than the main path requires
- treating optional tools as core before the implementation path is stable

## Recommended Operating Stance
1. keep the repo as the primary source of truth
2. keep the current Do lane as the main execution lane
3. use Sheets only when structure genuinely adds leverage
4. avoid multi-lane sprawl until the first implementation path is stable
5. promote optional resources to core only when they reduce work instead of adding coordination cost
