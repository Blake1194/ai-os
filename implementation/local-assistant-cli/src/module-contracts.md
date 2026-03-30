# Module Contracts

## Purpose
Define the minimum contract between the first MVP modules so implementation can stay small and predictable.

## 1. Request Intake → Routing
### Request Intake Output
```text
{
  valid: boolean,
  request_text: string,
  mode: "auto" | "note" | "task" | "log" | "status",
  errors: [string]
}
```

### Routing Input Expectation
Routing accepts only a valid normalized request object.
If `valid` is false, routing should not proceed.

## 2. Routing → Memory Read/Write
### Routing Output
```text
{
  allowed: boolean,
  classification: "note" | "task" | "log" | "status-summary" | "unsupported",
  request_text: string,
  mode: string,
  errors: [string]
}
```

### Memory Read/Write Input Expectation
Memory read/write only runs when:
- `allowed` is true
- classification maps to an approved action

## 3. Memory Read/Write → Logging/Reporting
### Memory Output
```text
{
  success: boolean,
  files_read: [string],
  files_written: [string],
  errors: [string]
}
```

### Logging/Reporting Input Expectation
Logging/reporting should describe only:
- what files were read
- what files were written
- whether the action succeeded, partially succeeded, or failed safely

## 4. Minimal Boundary Rules
- request intake does not route
- routing does not write files
- memory read/write does not invent summary language beyond factual results
- logging/reporting does not claim work that did not happen

## 5. First-Pass Implementation Rule
The first pass should implement these modules as simple handoff boundaries, not as a complex framework.
