# Toolchain Bootstrap

## Purpose
Turn the Atlas mobile shell scaffold into an install-capable development workspace.

## Expected Local Prerequisites
- Node.js in PATH
- npm in PATH

## Bootstrap Command
```bash
cd implementation/atlas-mobile-shell
./scripts/bootstrap-mobile-shell.sh
```

## Expected First Validation Run
```bash
npm run start
```

## Current Known Constraint In This Environment
- the current sandbox shell does not expose `node` or `npm`, so the bootstrap script cannot complete here yet

## What This Unlocks Once The Toolchain Exists
- dependency installation
- first local Expo run
- future Android build lane
- later integration work against a real product shell
