#!/bin/bash

OUTPUTMSG="No change occured"

if [[ $1 == "dev" ]]; then
    cp .env.dev.template .env
    OUTPUTMSG="SUCCESS: ENV changed to '$1'"
elif [[ $1 == "preprod" ]]; then
    cp .env.preprod.template .env
    OUTPUTMSG="SUCCESS: ENV changed to '$1'"
elif [[ $1 == "prod" ]]; then
    cp .env.prod.template .env
    OUTPUTMSG="SUCCESS: ENV changed to '$1'"
else
    OUTPUTMSG="ERROR: Cannot find specified ENV"
fi

echo $OUTPUTMSG
