var Left = x => this._value = x

Left.of = x => new Left(x)

Left.prototype.map = function(f) {
    return this
}
Left.prototype.join = function() {
  return this._value
}
Left.prototype.ap = function(m) {
    return m.map(this._value)
}
module.exports = Left
