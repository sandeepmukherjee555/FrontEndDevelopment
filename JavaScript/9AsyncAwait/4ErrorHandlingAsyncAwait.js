function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data", url);
        setTimeout(function down() {
            console.log("Downloading Completed");
            const content = "ABCDEF";
            reject(content);
        }, 5000);
    })
}

async function steps() {
    try {
        console.log("Starting Steps");
        const downloadedData = await download("www.xyz.com");
        return downloadedData;
    }
    catch (error) {
        console.log("We have handled the error", error);
    }

}

steps();