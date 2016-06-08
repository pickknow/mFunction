var Maybe = function (x) {
    this._value = x
}

Maybe.of = x => new Maybe(x)

Maybe.prototype.isNothing = function(x) {
    return (this._value == null || this._value == undefined)
}

Maybe.prototype.map = function(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value))
}

Maybe.prototype.join = function() {
  return this.isNothing() ? Maybe.of(null) : this._value
}
Maybe.prototype.ap = function(m) {
    return m.map(this._value)
}
module.exports = Maybe
