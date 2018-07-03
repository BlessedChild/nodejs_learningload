//非阻塞异步 读取文件
const fs = require('fs');

fs.readFile('file.md', (err, data) =>{
    if(err) throw err;
    console.log(data);
});
