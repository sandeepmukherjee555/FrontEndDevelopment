function process() {
    let i = 0;
    let j = [1, 2, 3];
    let k = 10;
    function innerProcess() {
        i += 1;
        console.log(j);
        return i;
    }
    return innerProcess;
}

let x = process();
let obj = { func: x };
console.log(obj);//go inside scopes we get closures there all the property is defined