#!/usr/bin/env bash
set -e

if ! command -v node >/dev/null 2>&1; then
  echo "BLOCKER: node is not installed or not available in PATH"
  exit 10
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "BLOCKER: npm is not installed or not available in PATH"
  exit 11
fi

echo "Installing mobile shell dependencies..."
npm install

echo "Running basic Expo dependency check..."
npx expo install --fix --check || true

echo "Bootstrap complete. Next suggested command: npm run start"
