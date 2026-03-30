# Local Assistant MVP Specification

## Objective
Define the first practical MVP for the personalized local assistant so Atlas OS can move from assistant blueprint into a realistic, buildable first implementation target.

## Scope
The MVP focuses on a small assistant shell that can:
- accept a simple request
- classify it into a small set of supported command types
- route it to the correct Atlas repo target
- write notes, tasks, logs, or memory updates
- report back clearly on what was done

## Non-Goals
This MVP does not attempt to be:
- a full autonomous browser agent
- a perfect voice assistant replacement
- a smart-home controller
- a plugin platform
- a complex always-on local runtime
- a heavy local model orchestration system

## User Flow
1. user gives a short request
2. assistant interprets the request category
3. assistant reads minimal Atlas context files if needed
4. assistant routes the request to the right repo location
5. assistant writes the result
6. assistant reports back with changed files and next step

## Components
- command intake
- request classification
- routing logic
- repo write targets
- memory/context read layer
- result reporting layer
- CLI-first runtime direction

## Success Criteria
- small set of command types works reliably
- repo writes are predictable and structured
- output is understandable and easy to verify
- the MVP is useful before voice or service layers exist
- the implementation stays low-complexity and easy to control

## Next Milestone After MVP
Turn the MVP spec into the first implementation task for a CLI-first assistant shell that reads Atlas context, writes to the repo, and reports back clearly.
