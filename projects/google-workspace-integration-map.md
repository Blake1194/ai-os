# Google Workspace Integration Map

## Purpose
Map the most relevant Google lanes for Atlas OS and define how they should be used now versus later.

---

## 1. Google Sheets
**Best for**
- structured tracking
- implementation inventories
- checklists and status tables
- quick operational dashboards

**Use for now**
- structured tracking that markdown handles poorly
- compact implementation or operations tables

**Use for later**
- richer operational dashboards
- recurring status tracking
- cross-workflow inventories

**Classification**
Core-operational optional

**Risk of overuse**
High if it duplicates repo memory or becomes a second source of truth.

---

## 2. Google Drive
**Best for**
- asset storage
- bulky reference material
- exports, screenshots, transcripts, media

**Use for now**
- mostly planned, not central yet

**Use for later**
- durable storage for large non-code artifacts that should not live in GitHub

**Classification**
Backup / later-use operational lane

**Risk of overuse**
Moderate if Drive becomes a hidden memory layer instead of an asset store.

---

## 3. Google Docs
**Best for**
- fluid working notes
- drafts
- collaborative specs
- long-form operational writing before durable repo capture

**Use for now**
- optional working notes/spec drafting when more fluid than markdown

**Use for later**
- living operational docs or shared drafting surfaces

**Classification**
Optional

**Risk of overuse**
Moderate to high if core architecture or decisions drift away from GitHub.

---

## 4. Gmail
**Best for**
- communication workflows
- sending summaries, follow-ups, and operational messages

**Use for now**
- not central yet

**Use for later**
- communication workflows once Atlas handles more external coordination

**Classification**
Later-use operational lane

**Risk of overuse**
Moderate if communication state becomes detached from repo memory/logging.

---

## 5. Google Calendar
**Best for**
- scheduling
- reminders
- recurring operating loops
- time-based workflow triggers

**Use for now**
- mostly planned, not central yet

**Use for later**
- reminder and scheduling workflows tied to Atlas review loops and operating cadence

**Classification**
Later-use operational lane

**Risk of overuse**
Low to moderate, but only useful if it connects to real recurring workflows.

---

## 6. Google Tasks / Keep
**Best for**
- lightweight capture
- quick reminders
- small personal task notes

**Use for now**
- generally unnecessary while repo tasks remain the main system

**Use for later**
- optional lightweight personal capture if it complements, not replaces, repo tasks

**Classification**
Optional / backup-lightweight

**Risk of overuse**
High if it becomes a parallel task system alongside GitHub.

---

## 7. Apps Script
**Best for**
- Google-native automation
- simple Google Workspace workflows
- moving structured data between Sheets, Docs, Drive, Gmail, and Calendar

**Use for now**
- evaluation only

**Use for later**
- once there is a clear operational automation target inside Google Workspace
- after the main implementation path is stable

**Classification**
Later-use automation layer

**Risk of overuse**
High if activated before Atlas has a stable operational workflow worth automating.

---

## Recommended Now / Later / Avoid
### Recommended Now
- Google Sheets for structured tracking
- Google Docs for fluid working notes when markdown is too rigid

### Recommended Later
- Google Drive for large asset storage
- Gmail for communication workflows
- Google Calendar for reminder/scheduling workflows
- Apps Script for Google-native automation once clear use cases exist

### Avoid For Now
- using Tasks/Keep as a parallel core task system
- moving checkpoints, decisions, architecture, or implementation contracts out of GitHub
- activating Apps Script before live Google workflows are actually stable
