# Consent, Override, And Capability Model 001

## Purpose
Define how Atlas can safely gain broader access to the operator's computer, apps, camera, microphone, and connected services without becoming uncontrolled.

## Core Rule
All sensitive capability classes are **off by default** and must be granted explicitly.

## Capability Grant Modes
### 1. One-Action Grant
- valid for a single action only
- best for destructive or sensitive tasks

### 2. Session Grant
- valid until the current session ends or is manually revoked
- useful for workflow runs like Shopify editing or Slack triage

### 3. Persistent Approved Capability
- valid across sessions
- only for lower-risk capabilities the operator wants available by default
- should still be visible and revocable at any time

## Sensitive Capability Classes
The following should always be visible and explicitly controllable:
- terminal execution
- filesystem write/delete
- screen capture
- microphone
- camera
- local app control
- cloud-service write access
- billing/account actions
- destructive actions

## Required Operator Controls
Atlas should always expose:
- **Pause all**
- **Stop all**
- **Revoke camera**
- **Revoke microphone**
- **Revoke filesystem write**
- **Revoke external-service write**
- **Require confirmation mode**
- **Emergency safe mode**

## Emergency Safe Mode
Emergency safe mode should:
- stop all workers
- close active action queues
- revoke elevated live permissions
- preserve logs and state
- prevent new actions until the operator resumes

## Visibility Requirements
The operator should always be able to see:
- which workers are live
- what each worker is doing
- what capabilities are currently granted
- which services are connected
- which risky actions are queued

## Camera / Microphone Rules
- off by default
- visibly active when enabled
- session-gated unless persistent approval is explicitly chosen later
- no silent background activation
- no hidden recording behavior

## Destructive Action Rule
Even in a more advanced Atlas build, destructive actions should still require one of:
- explicit confirmation for the action
- a pre-approved safe batch definition
- a reversible transaction path

## Logging Requirement
Every elevated capability use should write:
- who/what worker used it
- what capability was used
- when it was used
- what target surface was affected
- whether the action succeeded, failed, or was refused

## Operator Override Philosophy
The operator is always above Atlas.

Atlas may help, suggest, route, and execute — but the operator must always be able to interrupt, redirect, or shut it down immediately.
