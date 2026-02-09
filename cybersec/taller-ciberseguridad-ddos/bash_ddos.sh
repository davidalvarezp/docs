#!/bin/bash

for i in {0..49}; do
(
    while true; do
        curl -s http://IP_DEL_SERVIDOR > /dev/null
    done
) &
done

wait
