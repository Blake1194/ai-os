# Execution Checklist

## First Build Pass Checklist
- [ ] review `implementation/first-build-step.md`
- [ ] review `implementation/local-assistant-build-order.md`
- [ ] create the first request-intake module file
- [ ] implement raw input acceptance
- [ ] implement trimming and normalization
- [ ] implement default `mode: auto`
- [ ] implement safe invalid-input handling
- [ ] confirm no routing logic is included yet
- [ ] confirm no file writes are included yet
- [ ] run small manual input checks
- [ ] compare outputs against expected request shape

## Validation Checkpoints
- [ ] valid text input produces a normalized request object
- [ ] empty input produces a safe invalid result
- [ ] the module has one clear responsibility
- [ ] no side effects occur outside the module
- [ ] output is stable enough to hand off to routing later

## Failure Handling Notes
If the first pass fails:
- reduce scope back to normalization only
- remove any routing logic added too early
- remove any write behavior added too early
- re-check the input and output contract
- keep the first pass as small as possible
