//清除设置的函数--KingArthur
/*
setTimeout() clearTimeout()
setImmediate() clearImmediate()
setInterval() clearInterval()
*/

const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
}, 1500);

const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
});

const intervalObj = setInterval(() => {
    console.log('interviewing the interval');
}, 500);

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);
