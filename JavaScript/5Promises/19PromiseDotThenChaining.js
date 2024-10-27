function download(url) {
    console.log("Started Downloading content from ", url);
    return new Promise(function exec(res, rej) {
        setTimeout(function p() {
            console.log("Completed Downloading Data in 5s");
            const content = "ABCDEF";
            res(content);
        }, 5000);
    })
}

x = download("www.xyz.com");
x
    .then(
        function fulfillHandler1(value) {
            console.log("Content downloaded is ", value);
            return "New Promise String";
        },
        function registerHandler1(value) {
            console.log("rejected with ", value);
        }
    )
    .then(function newFulfillHandler(value) {
        console.log("value from chained then promise", value);
    })

/*
.then() function returns a promise it immediately return a new promise object
Whatever we return from fulfillhandler1 that value is going to be the fulfilled 
value for chained Promise 
Here x.then is going to give us a new Promise Object and for that Promise Object 
value will get resolved when the upper Promise Object will be resolved

If we don't return anything from fulfillHandler1 it by default returns undefined
*/