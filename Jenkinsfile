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
        sh 'cd Portfolio && npm i && npm run deploy'
      }
    }

  }
}