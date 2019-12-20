pipeline {
    agent any
    stages  {
        
        stage("检出") {
            steps {
                checkout(
                    [$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], 
                    userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]]
                )
            }
        }

        stage("构建") {
            steps {
                echo "构建中..."
                sh 'npm config set registry http://mirrors.cloud.tencent.com/npm/'
                sh 'npm install -g hexo-cli' 
                sh 'npm install gulp -g'
                sh 'npm install'
                sh 'npm install hexo-deployer-git --save' 
                sh 'hexo -v'
                echo "构建完成."
            }
        }

        stage("测试") {
            steps {
                echo "单元测试中..."
                sh 'hexo clean' 
                sh 'hexo g ' 
                echo "单元测试完成."
            }
        }

        stage("部署") {
            steps {
                echo "部署中..."
                sh 'hexo clean' 
                sh 'hexo g ' 
                sh 'gulp'
                sh 'mkdir -p ~/.ssh/'
                sh 'echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa'
                sh 'chmod 600 ~/.ssh/id_rsa'
                sh 'ssh-keyscan coding.net >> ~/.ssh/known_hosts'
                sh 'git config --global user.email "179292705@qq.com"'
                sh 'git config --global user.name "tiexo"'
                sh 'hexo d' 
                echo "部署完成"
            }
        }
    }
}
