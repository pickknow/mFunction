var Container = function(x) {
    this._value = x
}

Container.of = x =>  new Container(x)

Container.prototype.map = function(f) {
    return Container.of(f(this._value))
}
Container.prototype.join = function(){
    return this._value
}
Container.prototype.ap = function(other_container) {
  return other_container.map(this._value)
}
module.exports = Container
