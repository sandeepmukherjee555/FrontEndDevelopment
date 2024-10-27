function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function exec() {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 5000);
    })
}

let y = createPromiseWithTimeout();
console.log(y);

/*
Immediately promise will be in pending state 
After that exec function executes after 5 sec
then based on num the promise will be reseolved or rejected
*/