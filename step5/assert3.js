//再举个栗子

const assert = require('assert');

//执行一下，会发现AssertionError: { a: { b: 1 } } == { a: { b: 1} }
assert.equal({ a: { b: 1} }, { a: { b: 1 } });
