# Runtime / Toolchain Decision

## Purpose
Define the smallest practical runtime/toolchain choice for the first real code-facing implementation step of the CLI-first local assistant MVP.

The goal is not to optimize for long-term elegance yet. The goal is to choose the smallest workable option that allows the first implementation file to exist with low ambiguity, low setup friction, and low operational risk.

## Realistic Candidate Options
### 1. Plain Node.js + JavaScript
- runtime: Node.js
- language: plain JavaScript
- dependencies: none required for the first file
- build step: none required

### 2. Node.js + TypeScript
- runtime: Node.js
- language: TypeScript
- dependencies: TypeScript tooling, config, and execution path
- build step: compile or run through TS tooling

### 3. Python
- runtime: Python
- language: Python
- dependencies: none required for the first file
- build step: none required

### 4. Bun or Deno
- runtime: Bun or Deno
- language: JavaScript or TypeScript
- dependencies: alternate runtime commitment
- build step: light, but introduces a less standard first-path choice for this repo stage

## Evaluation Criteria
The first runtime/toolchain choice should optimize for:
- simplicity
- controllability
- low setup friction
- fit for the CLI-first MVP
- fit with the current repo structure
- safety for first-pass implementation

## Evaluation
### Plain Node.js + JavaScript
**Simplicity**
- very high
- no compile step required
- easy to keep the first file tiny

**Controllability**
- very high
- behavior stays explicit and narrow
- fewer moving parts than a typed or framework-heavy path

**Low Setup Friction**
- high
- the first file can be specified and later created without introducing framework complexity

**Fit For CLI-First MVP**
- high
- a CLI-first assistant can later grow naturally from a small Node entrypoint

**Fit With Current Repo Structure**
- high
- the implementation layer already reads like a JavaScript-friendly CLI boundary

**Safety For First-Pass Implementation**
- very high
- the first module can remain a single small file with no external libraries

### Node.js + TypeScript
**Simplicity**
- medium
- adds config, typing decisions, and execution/tooling choices too early

**Controllability**
- high later, but only after more setup exists

**Low Setup Friction**
- lower than plain JavaScript
- introduces nonessential first-pass complexity

**Fit For CLI-First MVP**
- high later
- not the smallest first move now

**Fit With Current Repo Structure**
- acceptable
- but requires more scaffolding than the current repo needs for the first code file

**Safety For First-Pass Implementation**
- medium
- safe, but more setup-heavy than needed for the first narrow proof

### Python
**Simplicity**
- high
- could work for a small single-file parser

**Controllability**
- high
- but less aligned with the current browser/tooling ecosystem around Atlas

**Low Setup Friction**
- medium to high
- practical, but not the clearest fit with the current JS-leaning environment

**Fit For CLI-First MVP**
- acceptable
- but not the best continuity path for future browser-adjacent tooling

**Fit With Current Repo Structure**
- medium
- possible, but less naturally aligned than Node for the current implementation layer

**Safety For First-Pass Implementation**
- high
- still a valid fallback option if Node becomes impractical later

### Bun or Deno
**Simplicity**
- medium
- can be lightweight, but adds an alternate-runtime decision too early

**Controllability**
- medium
- controllable, but less conventional for a first conservative repo step

**Low Setup Friction**
- lower than ideal
- introduces runtime-choice overhead that is not needed yet

**Fit For CLI-First MVP**
- acceptable
- but not the safest first standard path

**Fit With Current Repo Structure**
- medium
- workable, but more opinionated than needed right now

**Safety For First-Pass Implementation**
- medium
- deferrable until there is a stronger reason to prefer them

## Recommended Option
**Recommended now: Plain Node.js + JavaScript, no framework, no TypeScript, no external dependencies for the first file.**

## Why It Is Recommended Now
- it is the smallest practical path from specification to real code
- it keeps the first code-facing step easy to reason about
- it avoids compile-time and package-tooling complexity
- it fits the CLI-first direction without locking the repo into premature stack overhead
- it keeps the first implementation focused on behavior rather than tooling
- it leaves room to adopt TypeScript later if the implementation actually earns that complexity

## What Is Deferred Until Later
Defer until later unless a real need emerges:
- TypeScript
- build tooling
- bundlers
- test frameworks beyond the smallest safe path
- CLI argument libraries
- packaging/publishing concerns
- service/runtime orchestration
- alternate runtimes such as Bun or Deno

## What Approval Would Mean In Practical Terms
Approval would mean:
- the first runtime/toolchain choice is locked as plain Node.js + JavaScript
- Atlas can create the first real code-facing file at the approved path
- the first code pass stays single-file, dependency-light, and behavior-bounded
- no broader framework adoption is implied
- no install or execution step starts until separately approved

## Boundary Reminder
This decision does **not** start implementation execution by itself.
It only defines the smallest approved runtime/toolchain choice for the next approval gate.
