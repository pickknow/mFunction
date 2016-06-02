var Container = require('./lib/Container')
var Maybe = require('./lib/Maybe')

const add = x => x +2

const a = Container.of(3)
console.log(a)
const b = a.map(add)
console.log(b)
const match = reg => x => x.match(reg)
console.log(Maybe.of("Malkovich Malkovich").map(match(/a/ig)))
