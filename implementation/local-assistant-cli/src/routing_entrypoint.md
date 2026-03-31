# Routing Entrypoint

## First Routing Module / File Name To Be Created
`routing_entrypoint`

The exact runtime file extension can be chosen later, but the first concrete routing file should keep this role and boundary.

## Single Responsibility
Accept one valid normalized request object from the request-intake layer, classify it into a first-pass route, and return a routing decision object.

It must not:
- write files
- read repo state beyond what the routing contract already assumes later
- perform logging
- call external systems
- invent hidden heuristics beyond the explicit first-pass rules

## Exact Input Shape
Routing should accept only a valid intake result.

```text
{
  valid: true,
  request_text: string,
  mode: "auto" | "note" | "task" | "log" | "status",
  errors: []
}
```

If `valid` is false, routing should not proceed and should return a safe refusal result.

## Exact Output Shape
### Allowed Routing Result
```text
{
  allowed: true,
  classification: "note" | "task" | "log" | "status-summary",
  request_text: string,
  mode: "auto" | "note" | "task" | "log" | "status",
  errors: []
}
```

### Refused / Unsupported Result
```text
{
  allowed: false,
  classification: "unsupported",
  request_text: string,
  mode: "auto" | "note" | "task" | "log" | "status",
  errors: [string]
}
```

## Minimal Classification Behavior
First-pass routing should stay extremely small and explicit.

Preferred rules:
- explicit `mode: note` -> `classification: note`
- explicit `mode: task` -> `classification: task`
- explicit `mode: log` -> `classification: log`
- explicit `mode: status` -> `classification: status-summary`
- `mode: auto` -> use small keyword-based classification only

Suggested first auto-classification hints:
- contains `note` -> `note`
- contains `task` -> `task`
- contains `log` -> `log`
- contains `summarize` or `status` -> `status-summary`

If no safe mapping exists, return `unsupported`.

## Failure / Refusal Behavior
The routing module should refuse safely when:
- intake input is invalid
- the request cannot be classified safely
- the mode is unsupported for the first pass

Refusal result expectations:
- `allowed: false`
- `classification: unsupported`
- original `request_text` preserved where possible
- one or more short error messages in `errors`

## Safe Test Cases Using Existing And New Fixtures
Use:
- `implementation/local-assistant-cli/tests/fixtures/request-intake-fixtures.md`
- `implementation/local-assistant-cli/tests/fixtures/routing-fixtures.md`

Expected safe checks:
1. valid note-like request routes to `note`
2. valid task-like request routes to `task`
3. valid status-like request routes to `status-summary`
4. invalid intake input refuses safely
5. no routing test performs any write

## What Completion Of This Module Proves
Completion proves:
- the assistant has a stable first routing boundary
- valid intake output can be converted into a predictable action decision
- memory read/write and reporting can be built against a concrete routing contract later
- routing can remain explicit and controllable without overengineering the first pass
