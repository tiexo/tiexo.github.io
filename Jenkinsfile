pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], 
                            userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]])
      }
    }
    stage('构建') {
      steps {
        echo '构建中...'
        git(url: 'https://e.coding.net/tiexo/tiexo.git', credentialsId: '0dbd7982-bcf9-49d8-a313-c60cf9be89d5')
        sh 'mkdir .ssh'
        sh 'ssh-keygen -t rsa'
        sh 'cat id_rsa.pub'
        sh 'ssh -T git@e.coding.net'
        echo '构建完成.'
      }
    }
    stage('测试') {
      steps {
        echo '单元测试中...'
        sh 'hexo clean'
        sh 'hexo g '
        echo '单元测试完成.'
      }
    }
    stage('部署') {
      steps {
        echo '部署中...'
        sh 'npm install hexo-deployer-git --save'
        sh 'hexo deploy'
        echo '部署完成'
      }
    }
  }
}