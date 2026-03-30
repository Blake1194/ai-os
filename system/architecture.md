# Architecture

## System Layers
1. **Command Layer**
   - Receives goals from the user
   - Classifies tasks and chooses tools

2. **Operator Layer**
   - Uses browser automation to navigate, inspect pages, and prepare actions

3. **Memory Layer**
   - Stores checkpoints, notes, decisions, prompts, and logs in GitHub

4. **File Layer**
   - Uses workspace files now and mounted local folders later

5. **Communication Layer**
   - Handles Gmail drafts, Loom summaries, and future outbound workflows

6. **Automation Layer**
   - Starts with workflow definitions and browser execution
   - Later expands into code-based automation

7. **Local Assistant Layer**
   - Future local model, voice, reminders, and system control

## Information Flow
User input -> ChatGPT command router -> Do Browser execution -> GitHub memory/logging -> user approval -> final action

## Approval Rule
Atlas prepares work up to the final review point and stops before irreversible actions.
