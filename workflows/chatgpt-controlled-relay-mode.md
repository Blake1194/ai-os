# ChatGPT Controlled Relay Mode

## Purpose
Define how Atlas OS may use an open ChatGPT browser thread as a controlled relay surface without turning ChatGPT into an autonomous backend, uncontrolled loop, or separate system of record.

## Allowed Actions
In controlled relay mode, Do may:
- switch to the current approved ChatGPT thread tab
- read the latest visible assistant message if needed
- identify and focus the message input area
- type or paste a draft message into the input area
- leave the draft unsent by default
- clear draft text if instructed or if a safe cleanup step is needed
- report what draft is prepared and whether the box is ready

## Forbidden Actions
Do must not:
- press Send unless an instruction explicitly says `SEND NOW`
- alter prior messages
- change ChatGPT settings
- open account, profile, personalization, or billing areas
- start loops, self-chat behavior, or autonomous conversation patterns
- treat ChatGPT as a backend integration or system API
- overwrite human-written draft text without instruction

## Send Authorization Rule
No message may be sent from ChatGPT relay mode unless the user gives explicit send authorization.

The authorization must be clear and specific, such as:
- `SEND NOW`
- `send the draft now`
- `submit this message`

Absent that explicit authorization, the draft must remain unsent.

## Draft-Only Safety Rule
Controlled relay mode is draft-only by default.

That means:
- prepare drafts only
- verify the draft content if requested
- stop before send
- clear drafts only when instructed or when safe cleanup is explicitly part of the task

## How This Supports Atlas OS Safely
This mode supports Atlas OS by:
- allowing ChatGPT browser-thread interaction as a controlled relay surface
- preserving GitHub as the durable system spine
- avoiding uncontrolled browser loops or self-messaging patterns
- keeping human authorization in the send step
- allowing later clipboard-style collaboration without turning ChatGPT into an unmanaged automation lane
