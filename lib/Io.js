const _ = require('./Util')
var IO = function(f) {
    this._value = f
}

IO.of = x => new IO(() => x)

IO.prototype.map = function(f) {
    return new IO(_.compose(f,this._value))
}

module.exports = IO