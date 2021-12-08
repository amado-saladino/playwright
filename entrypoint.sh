#! /bin/bash

npm test

# report dir should exist and be bound to a named volume
cp playwright-report/index.html /report

if [ "$(ls -A video/)" ]; then
    cp -rp video/* screenshots/
fi

if [ "$(ls -A test-results/)" ]; then
    cp -rp test-results/* screenshots/
fi
