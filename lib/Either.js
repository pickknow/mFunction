var Either = function(x) {
  this._value = x == null || x== undefined ? Lift.of(x) : Right.of(x)
}
Either.of = x => new Either(x)

Either.prototype.map = function(f) {
  return this._value.map(f)
}
Either.prototype.join = function() {
  return this._value.join()
}
Either.prototype.ap = function(m) {
    return m.map(this._value.join())
}

module.exports = Either