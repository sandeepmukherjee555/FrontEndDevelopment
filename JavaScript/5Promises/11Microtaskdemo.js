function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the Promise");
        resolve("Done");
    })
}

setTimeout(function process() {
    console.log("Timer Completed")
}, 0);

let p = createPromise();

p.then(function fulfillhandler1(value) {
    console.log("We fulfilled1 with a value", value);
}, function rejectionhadler() { });
p.then(function fulfillhandler2(value) {
    console.log("We fulfilled2 with a value", value);
}, function rejectionhadler() { });
p.then(function fulfillhandler3(value) {
    console.log("We fulfilled3 with a value", value);
}, function rejectionhadler() { });

console.log("Ending");

/*
When the promise is resolved or rejected the handlers present inside on fulfillment array 
and onrejection array they are not immediately executed

The state of the promise changes the fulfillmenthandlers go inside microtask queue and it will
sit and wait the signal from event loop and the event loop will check is the call stack empty
is the global code empty then it will call the functions from microtask queue to call stack 
and execute functions from microtask queue  fulfillhandler1 -> fulfillhandler2 -> fulfillhandler3

Imp : At any point of time if event loop has a choice to pick from microtask queue or callback queue
it will always give preference to microtask queue
*/
