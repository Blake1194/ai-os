# Local Assistant Implementation Repo Structure

## Objective
Define the recommended repo/code structure for the first implementation phase of the CLI-first local assistant MVP.

## Recommended Top-Level Location
`/implementation/local-assistant-cli/`

This keeps the future implementation layer separate from the planning/docs layers while still living inside the main Atlas OS repository.

## Recommended Structure
```text
implementation/
  local-assistant-cli/
    README.md
    src/
      README.md
    tests/
      README.md
      fixtures/
        README.md
    docs/
      README.md
```

## Folder Responsibilities
### `README.md`
High-level purpose of the implementation layer, current scope, and build status.

### `src/`
Future source code for:
- CLI entry
- request parsing
- classification
- routing
- repo-context reading
- file writers
- reporting helpers

### `tests/`
Future smoke checks, narrow behavior tests, and verification helpers.

### `tests/fixtures/`
Small sample inputs and expected-output fixtures for validation.

### `docs/`
Implementation-local notes that should stay close to the code layer rather than the higher-level project docs.

## What Should Not Be Added Yet
Do not add yet:
- heavy package-manager setup files unless implementation execution actually begins
- runtime secrets
- large binary assets
- bulky exports or media
- always-on service infrastructure

## First Files to Create During Build Execution
When implementation starts, the first real code-facing files should likely be:
- CLI entry module
- command classification module
- router module
- repo writer module
- result reporter module

## Why This Structure Is Recommended
- small and understandable
- easy to expand later
- separates implementation from planning/docs
- supports low-complexity MVP progress
