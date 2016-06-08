const _ = require('./Util')
var IO = function(f) {
    this._value = f
}

IO.of = x => new IO(() => x)

IO.prototype.map = function(f) {
    return new IO(_.compose(f,this._value))
}
IO.prototype.join = function() {
  return this._value()
}
IO.prototype.ap = function(m) {
    return m.map(this._value())
}
module.exports = IO