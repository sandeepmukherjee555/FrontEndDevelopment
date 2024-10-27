function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function exec() {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                console.log("Fulfilling");
                resolve(num);
                console.log("Completed Fulfilling");
                return num;
            } else {
                console.log("Rejecting");
                reject(num);
                console.log("Completed Rejecting");
                return num;
            }
        }, 5000);
    })
}

let y = createPromiseWithTimeout();
console.log(y);

/*
if we console y
after resolve/reject the state of the promise will be updated
and normal flow will go on and move ahead

*/