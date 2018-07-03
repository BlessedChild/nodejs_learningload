//前面介绍了assert.equal()函数的使用场景和使用技巧，但是并不完整
//assert模块除了assert.equal()函数以外，还有很多个其他功能的函数,如下（v8.11.3）
/*
assert（value [，message]）
assert.deepEqual（actual，expected [，message]）
assert.deepStrictEqual（actual，expected [，message]）
assert.doesNotThrow（block [，error] [，message]）
assert.equal（actual，expected [，message]）
assert.fail（消息）
assert.fail（actual，expected [，message [，operator [，stackStartFunction]]]）
assert.ifError（值）
assert.notDeepEqual（actual，expected [，message]）
assert.notDeepStrictEqual（actual，expected [，message]）
assert.notEqual（actual，expected [，message]）
assert.notStrictEqual（actual，expected [，message]）
assert.ok（value [，message]）
assert.strictEqual（actual，expected [，message]）
assert.throws（block [，error] [，message]）
*/

//nodejs有一些奇怪的特性，需要知其然知其所以然的话，可以到一下链接去查看
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
//举个栗子

const assert = require('assert');

//OK ,不会报错误
assert.equal(1, '1');
