//setTimeout设置定时器 在1500毫秒后执行myFunc函数
function myFunc(arg) {
    console.log('arg was => ${arg}');
}

    setTimeout(myFunc, 1500, 'funky');
