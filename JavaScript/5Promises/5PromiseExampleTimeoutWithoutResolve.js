function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function exec() {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                console.log("Fulfilling");
                return num;
            } else {
                console.log("Rejecting");
                return num;
            }
        }, 5000);
    })
}

let y = createPromiseWithTimeout();
console.log(y);

/*
if we console y
it will be pending because the state of the promise will only change
if you call resolve or the reject function 
Here return just stopped function execution from call stack but it never resolves the promise

*/