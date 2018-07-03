//在终端输入npm init
//main point：server.js
//生成package.json文件
/*
package.json内容如下
{
  "name": "docker_web_app",
  "version": "1.0.0",
  "description": "Node.js on Docker",
  "author": "First Last <first.last@example.com>",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
*/
//在终端输入npm install 安装依赖

'use strict';

const express = require('express');

const HOST = '0.0.0.0';
const PORT = '8080';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World\n');
});

app.listen(PORT, HOST);

console.log('Running on http://${HOST}:${PORT}');

//安装 Homebrew
//将以下命令粘贴至终端
// /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
//Homebrew 能干什么?
//使用 Homebrew 安装 Apple 没有预装但 你需要的东西
//比如 brew install curl 安装curl工具
//安装curl工具
