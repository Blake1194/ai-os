# Request Intake Entrypoint

## First Module / File Name To Be Created
`request_intake_entrypoint`

The exact runtime file extension can be chosen later, but the first concrete implementation file should keep this role and boundary.

## Single Responsibility
Accept one raw request, normalize it into the MVP request shape, and return either:
- a valid normalized request object, or
- a safe invalid result

It should not perform routing, memory reads, file writes, logging, or external calls.

## Exact Input Shape
First-pass input contract:

```text
{
  raw_request: string,
  mode?: "auto" | "note" | "task" | "log" | "status",
  context_hint?: string
}
```

Required:
- `raw_request`

Optional:
- `mode`
- `context_hint`

Defaulting rule:
- if `mode` is absent, use `auto`

## Exact Output Shape
### Valid Result
```text
{
  valid: true,
  request_text: string,
  mode: "auto" | "note" | "task" | "log" | "status",
  errors: []
}
```

### Invalid Result
```text
{
  valid: false,
  request_text: "",
  mode: "auto" | "note" | "task" | "log" | "status",
  errors: [string]
}
```

## Minimal Validation Behavior
- reject missing `raw_request`
- reject non-string `raw_request`
- trim leading/trailing whitespace
- reject empty string after trimming
- preserve a valid provided `mode`
- default to `auto` when `mode` is missing
- treat unsupported mode values as invalid input for the first pass

## Failure / Refusal Behavior
The module should refuse safely by returning an invalid result object.

It should not:
- throw a broad unhandled error for normal bad input
- attempt fallback routing
- attempt writes
- attempt external lookups

Safe refusal result expectations:
- `valid: false`
- empty `request_text`
- one or more short error messages in `errors`

## Safe Test Cases Using Existing Fixtures
Use:
- `implementation/local-assistant-cli/tests/fixtures/request-intake-fixtures.md`
- `implementation/request-intake-examples.md`

Expected safe checks:
1. note-like request returns valid normalized output
2. task-like request returns valid normalized output
3. status-like request returns valid normalized output
4. empty request returns safe invalid output
5. no test writes any file

## What Completion Of This Module Proves
Completion proves:
- the first real implementation file can exist without ambiguity
- the assistant has a stable front-door contract
- later routing work can consume a predictable input object
- implementation can start while still keeping scope extremely small
