# Runtime / Toolchain Commands

## Evaluate Runtime / Toolchain Options
- "Evaluate the smallest practical runtime/toolchain options for the first code-facing Atlas OS implementation step, prioritizing simplicity, controllability, low setup friction, and CLI-first fit."
- "Compare plain Node.js + JavaScript, Node.js + TypeScript, Python, and alternate runtimes only against current first-step needs, not future ambition."

## Lock The First Toolchain Decision
- "Lock the first runtime/toolchain decision only when it reduces ambiguity for the next approval gate without starting installs or broader setup."
- "Record the first runtime/toolchain choice in repo state and make clear that implementation execution still requires separate approval."

## Define First Code File Scope
- "Define the first real code file with an exact path, exact purpose, input/output shape, minimum behavior, and safe refusal rules."
- "Keep the first code file limited to request intake normalization and safe invalid-input handling."

## Avoid Overengineering The First Code Pass
- "Review the proposed first code pass and remove anything that adds routing, persistence, logging, external calls, framework structure, or nonessential tooling."
- "Keep the first code pass single-file, behavior-bounded, and dependency-light."

## Defer Nonessential Tooling Until Later
- "Defer TypeScript, frameworks, bundlers, test-framework expansion, CLI packaging, and alternate runtimes until the first narrow code pass proves they are needed."
- "Do not let the first runtime decision turn into a broad architecture commitment before the first implementation file exists."
