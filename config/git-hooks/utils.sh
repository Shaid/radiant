#!/bin/bash

JOBS=()

add_job() {
  JOB=$!
  #echo "Adding job: $JOB..."
  JOBS+=($JOB)
}

wait_for_jobs() {
  for job in "${JOBS[@]}"
  do
    wait $job && job_completed $job || kill_remaining_jobs_and_exit $job
  done
}

job_completed() {
  job=$1
  #echo "Job completed: $job"
  remove_job $job
}

job_failed() {
  job=$1
  #echo "Job failed: $job"
  remove_job $job
}

remove_job() {
  job=$1
  #echo "Removing job $job"
  JOBS=("${JOBS[@]/$job}")
}

kill_remaining_jobs_and_exit() {
  job=$1

  job_failed $job

  STILL_RUNNING_JOBS=`echo "${JOBS[@]}" | xargs` # pass through xargs to remove whitespace
  if [ -n "$STILL_RUNNING_JOBS" ]; then
    #echo "Killing remaining jobs: $STILL_RUNNING_JOBS"
    kill $STILL_RUNNING_JOBS
  fi

  exit 1;
}

