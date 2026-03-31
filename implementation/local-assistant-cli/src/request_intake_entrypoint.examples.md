# request_intake_entrypoint Examples

## Supported Example Inputs
### 1. Plain note-like request
```text
{
  raw_request: "  capture this in notes  "
}
```

Expected output:
```text
{
  valid: true,
  request_text: "capture this in notes",
  mode: "auto",
  errors: []
}
```

### 2. Explicit task request
```text
{
  raw_request: "create a task for the deployment follow-up",
  mode: "task"
}
```

Expected output:
```text
{
  valid: true,
  request_text: "create a task for the deployment follow-up",
  mode: "task",
  errors: []
}
```

### 3. Explicit status request with ignored context hint
```text
{
  raw_request: "show current build status",
  mode: "status",
  context_hint: "daily review"
}
```

Expected output:
```text
{
  valid: true,
  request_text: "show current build status",
  mode: "status",
  errors: []
}
```

## Unsupported Example Inputs
### 1. Missing raw_request
```text
{}
```

Expected refusal output:
```text
{
  valid: false,
  request_text: "",
  mode: "auto",
  errors: ["raw_request is required"]
}
```

### 2. Empty raw_request after trimming
```text
{
  raw_request: "   ",
  mode: "note"
}
```

Expected refusal output:
```text
{
  valid: false,
  request_text: "",
  mode: "note",
  errors: ["raw_request cannot be empty"]
}
```

### 3. Unsupported mode
```text
{
  raw_request: "do the next thing",
  mode: "summary"
}
```

Expected refusal output:
```text
{
  valid: false,
  request_text: "",
  mode: "auto",
  errors: ["unsupported mode: summary"]
}
```

### 4. Non-string raw_request
```text
{
  raw_request: 42,
  mode: "task"
}
```

Expected refusal output:
```text
{
  valid: false,
  request_text: "",
  mode: "task",
  errors: ["raw_request must be a string"]
}
```

## Quick First-Pass Validation Notes
- confirm valid input trims whitespace and returns the agreed shape
- confirm absent `mode` defaults to `auto`
- confirm supported explicit modes pass through unchanged
- confirm bad input returns structured refusal objects instead of throwing normal-path errors
- confirm the file performs no routing, file writes, logging, or external calls
