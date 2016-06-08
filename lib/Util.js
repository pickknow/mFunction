// const curry1 = fa => fn => fa(fn)

// const curryN = (len,receive,fn)  => (...args) =>
//     len - args.length <= 0
//     ? fn.apply(null,receive.concat(args))
//     : curryN(len - args.length,receive.concat(args),fn)

// const curry  = curry1( (fc)=> curryN(fc.length,[],fc))
const curry =  fa => {
  const curryN =  (len,receive,fn)  => (...args) =>
      len - args.length <= 0
      ? fn.apply(null,receive.concat(args))
      : curryN(len - args.length,receive.concat(args),fn)
      return curryN(fa.length,[],fa)
}

// map :: Functor F =>(a -> b) -> f a -> f b
const map = curry((f,any_functor_at_all) =>  any_functor_at_all.map(f))

// compose :: function fn[] -> a -> any
const compose = (...args) => x => args.reverse().reduce((a,b) => b(a),x)

// maybe :: b -> (a -> b) ->Maybe a -> b
const maybe = curry((x,f,m) => m.isNothing ?  x : f(m._value))

// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = curry((f,g,e) => e.constructor == Left ? f(e._value) : g(e._value))

// chain :: Monad m => (a -> m b) -> m a ->m b
const chain = curry((f,m) => m.map(f).join())

// mcompose :: m a ->m b ->(m a)
const mcompose = (f,g) => compose(chain(f),chain(g))

const liftA2 = curry((f,functor1,functor2) => functor1.map(f).ap(function2))

// join :: Monad m => m (m a) -> m a
const join = mma => mma.join()

module.exports = {
    curry:curry,
    map:map,
    compose:compose,
    maybe:maybe,
    either:either,
    chain:chain,
    mcompose:mcompose,
    liftA2:liftA2
}
