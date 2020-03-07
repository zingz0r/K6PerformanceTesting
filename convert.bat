@echo off
title Create K6 script from Postman collection

echo Generating K6 script based on collection.json
docker run -v %CD%:/postman/ -it loadimpact/postman-to-k6 /postman/collection.json -o /postman/k6-script.js -i 1000

echo Adding missing import to k6-script.js
echo import http from 'k6/http'; >> k6-script.js