//用阻塞的方法同步执行 读取一个文件
const fs = require('fs');

const data = fs.readFileSync('file.md');

console.log(data);
