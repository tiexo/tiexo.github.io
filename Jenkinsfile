pipeline {
    agent any
    stages  {
        
        stage("检出") {
            steps {
                sh 'ci-init'
                checkout(
                    [$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], 
                    userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]]
                )
            }
        }

        stage("构建") {
            steps {
                echo "构建中..."
                sh 'node -v'
                sh 'npm install -g hexo-cli' 
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
                sh 'npm install hexo-deployer-git --save' 
                sh 'hexo deploy' 
                echo "部署完成"
            }
        }
    }
}