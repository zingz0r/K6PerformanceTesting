@echo off
title Performance Test

echo Starting performance tests
docker run --network host -v %CD%:/data/ -it loadimpact/k6 run /data/k6-script.js --out influxdb=http://localhost:8086/K6

PAUSE