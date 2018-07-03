//setImmediate()设置 在当前时间循环周期结束时执行

console.log('before immediate');

setImmediate((arg) => {
    console.log('executing immediate: ${arg}');
}, 'so immediate');

console.log('after immediate');
