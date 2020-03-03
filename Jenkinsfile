pipeline {
  agent {
    docker {
      image 'lenyuadmin/hexo'
    }

  }
  stages {
    stage('检出') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]])
      }
    }
    stage('环境') {
      steps {
        echo '构建中...'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm install hexo-cli -g'
        sh 'npm install gulp -g'
        sh 'npm install'
        echo '构建完成'
      }
    }
    stage('生产') {
      steps {
        echo '生产中...'
        sh 'hexo clean'
        sh 'sudo npm rebuild node-sass --save'
        sh 'hexo g'
        sh 'gulp'
        echo '生产完成'
      }
    }
    stage('部署') {
      steps {
        echo '部署中...'
        dir(path: 'public') {
          sh 'ls'
          sh 'git init'
          sh 'git config user.name $USER_NAME'
          sh 'git config user.email $USER_EMAIL'
          sh 'git add -A'
          sh 'git commit -m \'init\''
          sh 'git push -u -f "$USER_PROJECT" master:master'
        }

        echo '部署完成'
      }
    }
  }
}