# ChatGPT Thread Migration 001

## Migration Purpose
Move active Atlas OS continuation from the long-running `Greeting exchange` ChatGPT thread to the cleaner `Atlas OS Build Plan` thread without losing continuity.

## From Thread
- title: `Greeting exchange`
- url: `https://chatgpt.com/c/69c9ff08-3748-832d-9e4a-dfd41e64bd15`

## To Thread
- title: `Atlas OS Build Plan`
- url: `https://chatgpt.com/c/69cade90-e8a4-8333-bb5d-6a372cea8f54`

## What Must Be Preserved Across The Move
- current mode: controlled expansion open
- active checkpoint: `checkpoints/checkpoint-006-controlled-expansion-open.md`
- current concrete expansion state: `implementation/atlas-mobile-shell/` exists and is bootstrap-ready
- current blocker in this shell environment: `node` and `npm` binaries are not available here
- exact next major package: execute `implementation/atlas-mobile-shell/scripts/bootstrap-mobile-shell.sh` in a Node/npm-capable environment, then run `npm run start`, then record the first local Expo validation result
- credentials/logins: allowed only with explicit in-the-moment approval when needed
- destructive or irreversible actions: allowed only with explicit in-the-moment approval when needed

## Durable Repo Anchors For Future Reference
- `checkpoints/checkpoint-006-controlled-expansion-open.md`
- `implementation/controlled-expansion-mode.md`
- `implementation/expansion-next-major-package.md`
- `implementation/mobile-shell-bootstrap-report-001.md`
- `logs/session-log-060.md`
- `logs/session-log-061.md`
- `operator/chatgpt-thread-registry.md`

## Practical Rule Going Forward
- use `Atlas OS Build Plan` as the active continuation thread
- keep `Greeting exchange` as reference only
- if future thread migration is needed, record the successor in the thread registry and create another migration file instead of relying on memory
