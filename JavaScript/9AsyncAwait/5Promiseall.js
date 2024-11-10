/*
DOCS :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

 */
function download(url, time) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data", url);
        setTimeout(function down() {
            console.log("Downloading Completed");
            const content = "ABCDEF";
            if (time > 1000) {
                reject("err");
            } else {
                resolve(content);
            }

        }, time);
    })
}

const p1 = download("www.abc1.com", 5000);
const p2 = download("www.abc2.com", 1000);
const p3 = download("www.abc3.com", 3000);
Promise.all([p1, p2, p3]).then(function fulfillhandler(values) {
    console.log(values);
})

/*
When all the promises are resolved then only fulfillhandlers will be executed
*/
