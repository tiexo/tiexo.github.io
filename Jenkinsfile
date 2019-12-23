pipeline {
    agent any
    stages  {
        
        stage("检出") {
            steps {
                checkout(
                    [$class: 'GitSCM', branches: [['blog']], 
                    userRemoteConfigs: [[url: 'https://e.coding.net/tiexo/tiexo.git', credentialsId: '8c8c4f15-9ec9-4c05-a5cc-9b0a1a303151']]]
                )
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