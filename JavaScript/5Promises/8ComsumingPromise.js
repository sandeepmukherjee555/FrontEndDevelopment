/*
Promise Object
p.then(fulfilmenthandler,rejectionhadler)
p is our promise object

fulfilmenthandler and rejectionhandler are functions we have to implement ouverselves 
waht should happen if the promise is successfully fulfilled/rejected
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function exec() {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 5000);
        console.log("Exiting the executor callback in the promise constructor");
    });
}

console.log("Starting....");
const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like.....", p);

p.then(
    function fulfillhandler(value) { console.log("Inside Fulfill Handler", value) },
    function rejectionhandler(value) { console.log("Inside Rejection Handler", value) }
);

