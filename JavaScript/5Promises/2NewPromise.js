/*

Constructor is a special function using which new object can be created
Docs:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

new Promise(f) // this constructor expects a callback f

new Promise(function(resolve,reject){
// inside function we can write our own time consuming task
})

Whenever in the implementation of the executor callback you call the resolve function,
the promise goes to a fulfilled state 
If you call reject function,it goes to a rejected state and if you don't call anything
promise remains in pending state 

Apart from state property promise also has value property

Till the time state is Pending value is undefined

Whatever we pass as a argument of resolve the state of the object will be fulfilled state,
and value will be the argument passed inside resolve 
*/

