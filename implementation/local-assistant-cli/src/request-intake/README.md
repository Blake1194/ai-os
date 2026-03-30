# Request Intake Module

## Purpose
This is the first actual implementation piece defined for the CLI-first local assistant MVP.

Its job is to act as the stable front door for the assistant by accepting one raw request and normalizing it into the MVP request shape.

## Single Responsibility
- accept one raw text request
- normalize it
- return a small request object or a safe invalid result

It must not:
- classify into final route types beyond basic mode preservation
- write files
- read repo state
- call external systems
- perform logging

## Boundaries
### In Scope
- raw string acceptance
- trimming and normalization
- default `mode: auto`
- empty-input rejection
- invalid-input rejection when the request is unusable
- returning a stable handoff shape for later routing

### Out of Scope
- routing decisions
- memory reads
- file writes
- logging
- reporting summaries beyond the intake result object
- installs, integrations, or runtime-specific setup

## Expected Input
Suggested first-pass input shape:

```text
raw_request: string
mode: optional string
context_hint: optional string
```

First-pass assumptions:
- `raw_request` is the only required input
- `mode` is optional and defaults to `auto`
- `context_hint` may exist later but should not be required for the first pass

## Expected Output
### Valid Result
```text
{
  valid: true,
  request_text: string,
  mode: auto | note | task | log | status,
  errors: []
}
```

### Invalid Result
```text
{
  valid: false,
  request_text: "",
  mode: auto,
  errors: [string]
}
```

## Minimum Safe Behavior
- trims leading/trailing whitespace
- collapses obviously empty input into an invalid result
- preserves the cleaned request text
- returns `mode: auto` when no mode is supplied
- does nothing else

## Safe Test Behavior
Safe tests should use only small local/manual examples and fixture-driven examples.

Safe examples:
- note-like request
- task-like request
- summary-like request
- empty request

A safe first test passes if:
- valid input produces a normalized request object
- empty input produces an invalid result
- no repo files are changed
- no routing logic is triggered
- no external calls occur

## What Completion Proves
Completion of this first module proves:
- the assistant has a real implementation starting point
- the front door behavior is stable enough for routing to be added later
- implementation can begin without ambiguity while still staying very small

## Alignment
This module definition aligns with:
- `implementation/first-build-step.md`
- `implementation/first-build-runbook.md`
- `implementation/execution-checklist.md`
- `tasks/task-004-cli-intake-layer.md`
