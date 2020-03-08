pipeline {
    agent any

    environment {
        INFLUXDB_HOST = 'http://localhost:8086'
        INFLUXDB_NAME = 'K6' 
    }

    stages {
        stage('Load Testing') {
            steps {
                sh 'docker run --network host -v //c/Users/zingz0r/Desktop/k6/loadtests:/data/ loadimpact/k6 run /data/load-test.js --out influxdb=${INFLUXDB_HOST}/${INFLUXDB_NAME}'
            }
        }
        stage('Performance Testing') {
            steps {
                sh 'docker run --network host -v //c/Users/zingz0r/Desktop/k6/loadtests:/data/ loadimpact/k6 run /data/performance-test.js --out influxdb=${INFLUXDB_HOST}/${INFLUXDB_NAME}'
            }
        }
        stage('Failing Check') {
            steps {
                sh 'docker run --network host -v //c/Users/zingz0r/Desktop/k6/loadtests:/data/ loadimpact/k6 run /data/fail-jenkins-test.js --out influxdb=${INFLUXDB_HOST}/${INFLUXDB_NAME}'
            }
        }
    }
}