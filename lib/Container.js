var Container = function(x) {
    this._value = x
}

Container.of = x =>  new Container(x)

Container.prototype.map = function(f) {
    return Container.of(f(this._value))
}


module.exports = Container
