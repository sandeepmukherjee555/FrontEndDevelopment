function download(url, cb) {
    console.log("Started Downloading from url  ", url);
    setTimeout(function exec() {
        console.log("Completed Downloading after 5 sec");
        const content = "ABCDEF";
        cb(content);
    }, 5000);
}

download("www.xyz.com", function procesDownloading(data) {
    console.log("Downloaded Data is", data);
});

/*
Control of the callback we are giving it to the other function
Other function is deciding when to call your callback where to call your callback

*/