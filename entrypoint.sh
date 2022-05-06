#! /bin/bash

npm test
status=$?

# report dir should exist and be bound to a named volume
cp -r playwright-report/* /report

if [ "$(ls -A video/)" ]; then
    cp -rp video/* screenshots/
fi

if [ "$(ls -A test-results/)" ]; then
    cp -rp test-results/* screenshots/
fi

exit $status
