function download(url) {
    console.log("Starting downloading content from url ", url);
    return new Promise(function exec(res, rej) {
        setTimeout(function p() {
            console.log("Completed Downloading Data in 5s");
            const content = "ABCEF";
            res(content);
        }, 5000);
    });
}

download("www.xyz.com")
    .then(function fulfillhandler(value) {
        console.log("Content Downloaded is", value);
    });

/* 
Here we are not giving access to callback to a third party function calling 
the callaback function fulfillhandler is in our control

If they never call resolve function then also we can detect it 
the promise will always be in a pending state
*/