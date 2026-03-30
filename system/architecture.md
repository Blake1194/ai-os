# Architecture

## System Layers
1. **Command Layer**
   - Receives goals from the user
   - Classifies tasks and chooses tools
   - Sets priorities and planning direction

2. **Operator Layer**
   - Uses browser automation to navigate, inspect pages, and prepare actions
   - Executes safe reversible steps

3. **Memory Layer**
   - Stores checkpoints, notes, decisions, prompts, and logs in GitHub
   - Preserves system state across sessions

4. **Workflow Layer**
   - Defines repeatable process rules for intake, routing, execution, and review
   - Connects planning to action in a durable way

5. **File Layer**
   - Uses workspace files now and mounted local folders later

6. **Communication Layer**
   - Handles Gmail drafts, Loom summaries, and future outbound workflows

7. **Automation Layer**
   - Starts with workflow definitions and browser execution
   - Later expands into code-based automation

8. **Future Local Assistant Layer**
   - Future local model, voice, reminders, and system control

## Layer Connections
- **Command Center** decides what should happen
- **Workflow Layer** defines how it should happen
- **Operator** carries out browser-side execution
- **Memory Layer** records notes, decisions, logs, and state
- **Future Local Assistant** can later use the same workflow and memory structure through voice or local execution

## Information Flow
Human input -> Command Center -> Workflow Layer -> Operator -> Memory/Logs -> Human review -> final approved action

## Approval Rule
Atlas prepares work up to the final review point and stops before irreversible actions.
