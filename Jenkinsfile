pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'mvn -f demo/pom.xml clean install package -DskipTests=true'
      }
    }
    stage('Deploy') {
      steps {
        sh 'sudo cp demo/target/demo-0.0.1-SNAPSHOT.war /home/ec2-user/apache-tomcat-8.5.43/webapps/'
      }
    }
    
  }
  post {
                success {
                    echo 'App is up and running now'
                }
            }
}
