#!/usr/bin/env sh
set -eu

if [ -n "$(git ls-files 'dashboard/.next/*')" ]; then
  echo "error: dashboard/.next artifacts are tracked; please remove them" >&2
  exit 1
fi
