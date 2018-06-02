#!/bin/bash

SCRIPT_DIR="${BASH_SOURCE%/*}"
source "$SCRIPT_DIR/utils.sh"

# Jobs to run in parallel
export CI=true
npm run test -- --all --coverage & add_job

wait_for_jobs
