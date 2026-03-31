# Source Layer

Future MVP source files should start here.

Recommended first modules:
- request intake entrypoint
- routing entrypoint
- repo readers
- repo writers
- result reporter

Implementation-start specification files:
- `request_intake_entrypoint.md`
- `routing_entrypoint.md`
- `module-contracts.md`
- `implementation-notes.md`
- `request-intake/README.md`

Current implementation-start targets:
- `request_intake_entrypoint.js` now exists as the first concrete implementation file using the chosen runtime/toolchain
- then create the first concrete `routing_entrypoint` implementation file using the same runtime/toolchain later

## Actual Code Artifact
- `request_intake_entrypoint.js` now exists as the first real code-facing implementation file.
- `request_intake_entrypoint.examples.md` now exists as the first example and expected-output reference file.
- `../../codex-handoff.md` defines how future Codex use should stay inside the current first-pass boundary.
