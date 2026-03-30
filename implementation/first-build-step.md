# First Build Step

## First File / Script / Module That Should Exist
`implementation/local-assistant-cli/src/request-intake`

The exact file extension can follow the runtime/toolchain chosen later, but the first module responsibility should stay the same.

## Single Responsibility
Accept one raw request, normalize it into the MVP request shape, and safely reject obviously unsupported or empty input.

## Minimum Behavior It Should Support
- accept a raw string request
- trim and normalize it
- produce a small request object suitable for routing
- default to `mode: auto` when no explicit mode is provided
- return a safe unsupported/invalid result for empty input

## How to Test It Safely
Use small manual examples and fixtures only.

Safe examples:
- plain note request
- plain task request
- plain summary request
- empty request

A safe first test passes if:
- valid input returns a normalized request object
- empty or unusable input returns a clear safe failure result
- no file writes happen yet

## What Completion of This First Step Proves
Completing this step proves that the assistant has a stable front door.
It confirms that real implementation can start without yet touching routing, file writes, or logging behavior.
