# First Code File Spec

## Exact Recommended File Path
`implementation/local-assistant-cli/src/request_intake_entrypoint.js`

## Exact Purpose
Implement the first real code-facing entrypoint for the CLI-first local assistant MVP.

This file should:
- accept one raw request payload
- normalize it into the MVP request shape
- return either a valid normalized result or a safe invalid result

This file should be the first concrete implementation of the already-defined intake contract.

## Expected Input Shape
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

## Expected Output Shape
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

## Minimum Behavior
- accept a plain input object
- reject missing `raw_request`
- reject non-string `raw_request`
- trim whitespace from `raw_request`
- reject empty string after trimming
- preserve a valid explicit `mode`
- default `mode` to `auto` when absent
- reject unsupported mode values
- return small predictable objects only
- avoid all file writes and side effects

## Refusal / Failure Behavior
The file should fail safely by returning an invalid result object.

Safe refusal behavior:
- `valid: false`
- `request_text: ""`
- `mode` set to a valid fallback value if needed
- one or more short messages in `errors`

It should not:
- throw broad unhandled errors for normal bad input
- perform routing
- read or write files
- log to external systems
- call external services

## What Should Not Be Implemented Yet
Do **not** add any of the following in the first file:
- routing logic
- repo reads or writes
- logging behavior
- Google integration behavior
- browser automation
- persistence
- command-line argument parsing beyond the direct function boundary
- framework structure
- dependency-heavy validation libraries
- TypeScript conversion

## What Successful Completion Of This File Proves
Successful completion proves that:
- the CLI-first assistant now has a real code-facing front door
- the request-intake contract is implementable with low ambiguity
- the first real implementation step can stay narrow and safe
- later routing work can consume a stable normalized shape
- Atlas can begin implementation without prematurely expanding runtime complexity
