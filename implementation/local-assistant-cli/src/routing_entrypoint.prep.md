# routing_entrypoint Prep

## Purpose
Define the narrow next-step boundary for the future routing entrypoint without creating the routing implementation yet.

## Expected Inputs
- a valid normalized request object from `request_intake_entrypoint.js`
- shape:
```text
{
  valid: true,
  request_text: string,
  mode: "auto" | "note" | "task" | "log" | "status",
  errors: []
}
```

## Expected Outputs
- a small structured routing result that decides whether downstream work is allowed and how the request should be classified
- expected first-pass output shape:
```text
{
  allowed: boolean,
  classification: "note" | "task" | "log" | "status-summary" | "unsupported",
  request_text: string,
  mode: string,
  errors: [string]
}
```

## How It Depends On Request Intake
- it should accept only the normalized output boundary already established by `request_intake_entrypoint.js`
- it should not attempt intake normalization itself
- it should refuse to proceed when intake returns `valid: false`

## What Must Not Be Implemented Yet
- file writes
- repo reads
- logging/reporting behavior
- Google integration
- browser automation
- hidden heuristics beyond explicit first-pass classification rules
- framework/tooling expansion beyond the current minimal Node.js + JavaScript path
