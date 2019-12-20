pipeline {
    agent {
        label "node-12"
    }
    stages  {
        stage("检出") {
            steps {
             checkout([$class: 'GitSCM', branches: [[name: blog]], userRemoteConfigs: [[url: 'git@e.coding.net:tiexo/tiexo.git', credentialsId: '0dbd7982-bcf9-49d8-a313-c60cf9be89d5']]])
      }
    }
  }
}
      stage("构建") {
            steps {
                echo "构建中..."
                sh 'npm config set registry http://mirrors.cloud.tencent.com/npm/'
                sh 'npm install -g hexo-cli' 
                sh 'npm install'
                sh 'npm install hexo-deployer-git --save' 
                sh 'hexo -v'
                echo "构建完成."
            }
        }

        stage("测试") {
            steps {
                echo "单元测试中..."
                // 请在这里放置您项目代码的单元测试调用过程，例如:
                sh 'hexo clean' //清除缓存
                sh 'hexo g ' // 将 md 文件构建为 html 页面示例
                echo "单元测试完成."
                // junit 'target/surefire-reports/*.xml' // 收集单元测试报告的调用过程
            }
        }


        stage("部署") {
            steps {
                echo "部署中..."
                // 请在这里放置收集单元测试报告的调用过程，例如:
                // sh 'mvn tomcat7:deploy' // Maven tomcat7 插件示例：
                // sh './deploy.sh' // 自研部署脚本
                sh 'npm install hexo-deployer-git --save' // 安装 deploy 脚手架
                sh 'hexo deploy' // 部署
                echo "部署完成"
            }
        }