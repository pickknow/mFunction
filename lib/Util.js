
const curry = fn => {
    const len = fn.length
    let arr = []
    const f1 = (...args) => {
            arr = arr.concat(args)
            return arr.length == len ? fn.apply(this,arr) : f1
        }
    return    f1
    }

// map :: Functor F =>(a -> b) -> f a -> f b
const map = curry((f,any_functor_at_all) =>  any_functor_at_all.map(f))

// compose :: function fn[] -> a -> any
const compose = (...args) => x => args.reduce((a,b) => b(a),x)

// maybe :: b -> (a -> b) ->Maybe a -> b
const maybe = curry((x,f,m) => m.isNothing ?  x : f(m._value))

module.exports = {
    curry:curry,
    map:map,
    compose:compose,
    maybe:maybe
}
