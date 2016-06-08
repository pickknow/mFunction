var Right = function(x) {
    this._value = x
}

Right.of = x => new Right(x)

Right.prototype.map = function(f) {
    return Right.of(f(this._value))
}
Right.prototype.join = function() {
  return this._value
}
Right.prototype.ap = function(m) {
    return m.map(this._value)
}
module.exports = Right
