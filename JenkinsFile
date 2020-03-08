pipeline {
    agent any

    environment {
        INFLUXDB_HOST = 'http://localhost:8086'
        INFLUXDB_NAME = 'K6' 
    }

    stages {
        stage('Load Testing') {
            steps {
                echo 'Running K6 load tests...'
                sh 'docker run --network host -v $(pwd)/loadtests:/data/ -it loadimpact/k6 run /data/load-test.js --out influxdb=${INFLUXDB_HOST}/${INFLUXDB_NAME}'
                echo 'Completed Running K6 load tests!'
            }
        }
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                sh 'docker run --network host -v $(pwd)/loadtests:/data/ -it loadimpact/k6 run /data/performance-test.js --out influxdb=${INFLUXDB_HOST}/${INFLUXDB_NAME}'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}