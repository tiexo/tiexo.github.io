pipeline {
    agent any
    stages  {
        
        stage("检出") {
            steps {
                checkout(
                    [$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], 
                    userRemoteConfigs: [[url: 'git@e.coding.net:tiexo/tiexo.git', credentialsId: '0dbd7982-bcf9-49d8-a313-c60cf9be89d5']]])
            }
        }

        stage("构建") {
            steps {
                echo "构建中..."

                echo "构建完成."
            }
        }

        stage("测试") {
            steps {
                echo "单元测试中..."
                 sh 'mkdir -p ~/.ssh/'
               sh 'echo "credentialsId" > ~/.ssh/id_rsa'
               sh 'chmod 600 ~/.ssh/id_rsa'
               sh 'ssh-keyscan e.coding.net >> ~/.ssh/known_hosts'
                sh 'ssh -T git@e.coding.net'
                echo "单元测试完成."
            }
        }

        stage("部署") {
            steps {
                echo "部署中..."
                sh 'hexo clean' 
                sh 'hexo g ' 
                sh 'gulp'
                sh 'hexo d' 
                echo "部署完成"
            }
        }
    }
}
