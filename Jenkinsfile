pipeline {
    docker.image("node:8").inside {
        stage('SCM') {
            checkout scm
        }
        stage('install') {
            sh "npm install"
        }
        stage('test') {
            sh "npm test"
        }
    }
}