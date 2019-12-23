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
                sh 'ssh-keygen -t rsa -C '179292705@qq.com''
                sh 'chown tiexo:tiexo id_rsa id_rsa.pub'
                sh 'cat id_rsa.pub'

                sh 'ssh -T git@e.coding.net'
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