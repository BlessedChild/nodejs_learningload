//assert这个是断言模块
//在编写程序的时候，有时候可能程序会出现不同的情况，这个时候就需要让程序根据不同的情况提醒我们，让我们可以跟踪和调试
//通常情况下，我们可以先判断情况，然后在控制台答应出来，或者记录在日志中，例如
/*
if(发生了事件1) {
    控制台打印“发生了事件1”
}
*/
//对于这种情况，我们就可以用另外一个更简洁的方式来实现，这就是assert

const assert = require('assert');

//这里因为1不等于2，所以会在控制台打印出Assertionerror: 1 == 2
assert.equal(1, 2);

//assert.equal (actual, expected[, message])
//如果值不相等，Aserrtionerror则会抛出一个message属性设置等于message参数值的a。
//如果message参数未定义，则会分配默认错误信息
assert.equal(1, 2, "出错了：1的值不等于2");

//执行的结果只会出现一条错误
//说明了assert.equal()如果触发了，就会马上结束程序
//所以第二个函数会在下一份代码里实现
