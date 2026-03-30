# Request Intake Fixtures

## Purpose
Provide the smallest safe fixture set for the first request-intake module.

## Fixture 1 — Note-Like Request
Input:
- `Add a note that I want a Friday review reminder`

Expected:
- `valid: true`
- cleaned `request_text`
- `mode: auto`
- no writes

## Fixture 2 — Task-Like Request
Input:
- `Create a task to draft morning startup prompts`

Expected:
- `valid: true`
- cleaned `request_text`
- `mode: auto`
- no writes

## Fixture 3 — Status-Like Request
Input:
- `Summarize my active assistant work`

Expected:
- `valid: true`
- cleaned `request_text`
- `mode: auto`
- no writes

## Fixture 4 — Empty Request
Input:
- empty string

Expected:
- `valid: false`
- empty `request_text`
- safe error entry
- no writes
