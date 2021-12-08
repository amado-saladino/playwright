#! /bin/bash

if [ "$(ls -A video/)" ]; then
    rm video/*
fi

if [ "$(ls -A test-results/)" ]; then
    rm -r test-results/*
fi

if [ "$(ls -A screenshots/)" ]; then
    rm -r screenshots/*
fi