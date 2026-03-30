# Implementation Notes

## Assumptions
- the first build pass should stay text-only
- the first real implementation file should be the request-intake entrypoint
- repo state remains the durable memory layer
- routing, writes, and reporting come after intake is stable

## Chosen Minimal Execution Path
1. define request-intake entrypoint
2. implement request normalization only
3. test valid and invalid input safely
4. add routing only after intake output is stable

## What Is Intentionally Deferred
- real routing implementation
- repo reads and writes
- logging/reporting behavior
- runtime/toolchain-specific packaging
- voice handling
- any external integration

## What Should Not Be Built Yet
- a large framework
- plugin systems
- background services
- file writes inside intake
- hidden heuristics for classification
- any code that mixes intake, routing, memory, and reporting together

## How To Avoid Overengineering The First Pass
- keep one responsibility per file
- prefer explicit shapes over flexible abstractions
- keep tests small and fixture-based
- avoid adding helper layers until a real need exists
- treat the first implementation as a narrow proof of correctness, not a full assistant runtime
