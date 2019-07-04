pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'cd demo'
        sh 'mvn clean install package -DskipTests=true'
      }
    }
  }
}
