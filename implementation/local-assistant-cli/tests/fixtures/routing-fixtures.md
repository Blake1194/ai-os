# Routing Fixtures

## Purpose
Provide the smallest safe fixture set for the first routing module.

## Fixture 1 — Explicit Note Mode
Input:
```text
{
  valid: true,
  request_text: "Add a note that I want weekly review prompts",
  mode: "note",
  errors: []
}
```

Expected:
- `allowed: true`
- `classification: note`
- no writes

## Fixture 2 — Explicit Task Mode
Input:
```text
{
  valid: true,
  request_text: "Create a task to define startup prompts",
  mode: "task",
  errors: []
}
```

Expected:
- `allowed: true`
- `classification: task`
- no writes

## Fixture 3 — Auto Summary Request
Input:
```text
{
  valid: true,
  request_text: "Summarize current assistant work",
  mode: "auto",
  errors: []
}
```

Expected:
- `allowed: true`
- `classification: status-summary`
- no writes

## Fixture 4 — Invalid Intake Input
Input:
```text
{
  valid: false,
  request_text: "",
  mode: "auto",
  errors: ["empty request"]
}
```

Expected:
- `allowed: false`
- `classification: unsupported`
- safe error preserved
- no writes
