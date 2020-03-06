@echo off
title Performance Test

echo Generating k6 script based on collection.json
docker run -v %CD%:/postman/ -it loadimpact/postman-to-k6 /postman/collection.json -o /postman/k6-script.js -i 1000

echo Adding missing import to k6-script.js
echo import http from 'k6/http'; >> k6-script.js

echo Starting performance tests
docker run --network host -v %CD%:/data/ -it loadimpact/k6 run /data/k6-script.js --vus 100

PAUSE