var Left = x => this._value = x

Left.of = x => new Left(x)

Left.prototype.map = function(f) {
    return this
}

module.exports = Left
