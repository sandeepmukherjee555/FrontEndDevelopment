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

console.log("Going to register my first set of handlers");

p.then(
    function fulfillhandler1(value) {
        console.log("Inside Fulfill Handler 1", value);
        setTimeout(function t() {
            console.log("Ended 0 Sec Timer")
        }, 0)
        console.log("Exiting the fulfill handler 1 ");
    },
    function rejectionhandler1(value) { console.log("Inside Rejection Handler", value) }
);

console.log("Going to register my second set of handlers");

p.then(
    function fulfillhandler2(value) { console.log("Inside Fulfill Handler 2", value) },
    function rejectionhandler2(value) { console.log("Inside Rejection Handler", value) }
);

console.log("Ending");