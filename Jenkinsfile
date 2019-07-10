pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'mvn -f demo/pom.xml clean install package -DskipTests=true'
      }
    }
    stage('run as spring boot jar') {
      steps {
        sh 'java -jar demo/target/demo-0.0.1-SNAPSHOT.jar'
      }
    }
    post {
                success {
                    echo 'App is up and running now'
                }
            }
  }
}
