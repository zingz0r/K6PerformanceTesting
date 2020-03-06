```docker run,
-v C:\Users\zingz0r\Desktop\k6:/postman/,
-it loadimpact/postman-to-k6 /postman/TestCollection.postman_collection.json,
-o /postman/k6-script.js,
-i 1000```

docker run,
--network host, 
-v /c/Users/zingz0r/Desktop/k6/:/data/,
-it loadimpact/k6 run /data/k6-script.js
