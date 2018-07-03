const http = require('http');
//引入http模块（nodejs自带的js文件）

const hostname = '127.0.0.1';
//把127.0.0.1赋值给hostname（127.0.0.1是电脑的本地环回地址，相当于把自己的电脑作为服务器，服务器的地址是127.0.0.1）
const port = 3000;
//把3000赋值给port，设置端口为3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});
