# Request Intake Examples

## Purpose
Provide small example inputs and expected normalized outputs for the first request-intake module.

## Example 1 — Note-Like Request
Input:
- `Add a note that I want weekly review prompts`

Expected shape:
- `request_text`: normalized note request text
- `mode`: `auto`
- `valid`: true

## Example 2 — Task-Like Request
Input:
- `Create a task to define morning startup prompts`

Expected shape:
- `request_text`: normalized task request text
- `mode`: `auto`
- `valid`: true

## Example 3 — Status Request
Input:
- `Summarize current assistant work`

Expected shape:
- `request_text`: normalized status request text
- `mode`: `auto`
- `valid`: true

## Example 4 — Empty Request
Input:
- empty string

Expected shape:
- `valid`: false
- clear safe error or unsupported result
- no writes
