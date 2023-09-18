pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/Mugilan-Mourougayen/Portfolio.git', branch: 'main')
      }
    }

    stage('update live') {
      steps {
        sh 'npm i && npm run deploy'
      }
    }

  }
}