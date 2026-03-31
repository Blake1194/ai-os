# Expansion Roadmap

## Repo-Safe Usable System Growth
- keep the frozen V1 workflow usable while expansion packages are added
- preserve checkpoints, logs, and durable state discipline
- avoid breaking the working V1 baseline while heavier lanes open

## Installation/Toolchain Lane
- establish an install-capable local workspace for the next software shell
- choose and bootstrap the first real runtime/build toolchain for the next-generation shell
- validate that the new shell can actually run locally once toolchain installation is possible

## External Integration Lane
- define the first integrations that materially unlock the product direction
- start with integration adapters and controlled auth points
- delay risky live-write integrations until the local shell baseline is stable

## Second-Generation Architecture Lane
- split the working V1 baseline from the next-generation product shell cleanly
- define a shell that can wrap the existing repo-safe assistant logic without destroying it
- create a bridge path from current CLI-first logic toward a broader product surface

## Android/Mobile Lane
- create the first mobile-capable shell scaffold
- enable later Android packaging and on-device testing
- keep mobile work aligned with the next-generation architecture rather than as a disconnected side lane

## Local Assistant/Product Shell Lane
- create a real user-facing shell around Atlas OS behavior
- move from repo-safe operator workflows toward a practical software surface
- keep the shell subordinate to the durable repo-state model until broader product layers are proven

## Full-Computer Access Lane
- add a local Atlas runtime that can interact with the operator's computer directly
- gate filesystem, terminal, screen, app, microphone, and camera access behind explicit capability controls
- preserve visible consent and hard operator override at all times

## Multi-Agent Worker Lane
- define Atlas copies as bounded worker agents rather than uncontrolled self-copying behavior
- support concurrent specialized workers with supervisor control
- require expiry, logs, stop-gates, and role scoping for every worker

## Voice And Presence Lane
- add voice input/output as a first-class interaction path
- make microphone and speaker control session-aware and revocable
- add optional camera/context access only after the core runtime/control layer is stable

## Revenue / Shopify Lane
- after the assistant reaches a stable practical baseline, use Atlas to finish and launch the Shopify store efficiently
- treat Shopify as a high-leverage revenue lane, not as a distraction from proving the assistant runtime first

## Fast Front-End / Chatbot Lane
- build a lightweight user-facing chatbot/dashboard surface after the runtime spine is real
- consider Base44 or a similar fast UI layer as a presentation surface rather than the durable system spine
