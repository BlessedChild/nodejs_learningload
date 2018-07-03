//这里要说的是，如果要使用assert模块，需要查看相应版本的API
//再说一次，去官网找Document，找API
//按照官方给出的参考进行编程

//例如，在官方文档里找到assert.deepEqual(actual, expected[, message])

const assert = require('assert');

//这里两个对比的值跟上一份代码一样{ a { b: 1 } }
//上一份代码对比之后会有报错提示
//现在用这个函数，会顺利通过对比，不会报错
assert.deepEqual({ a: { b: 1 } }, { a: { b: 1 } });

//各个函数的具体使用场景和用法，应该参考官方Doucment和API
//仔细观察，测试，使用
