pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'mvn -f demo/pom.xml clean install package -DskipTests=true'
      }
    }
  }
}
