//如何创建一个服务器
//request
//从请求中获取方法、URL、头文件和正文

const http = require('http');

const server = http.createServer((request, response) => {
    const {headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
        console.log(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
    });
}).listen(8080);


