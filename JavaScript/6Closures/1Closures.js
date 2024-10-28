function process() {
    let i = 0;
    function innerProcess() {
        i += 1;
        return i;
    }
    return innerProcess;//we are not calling the function,we are just returning
}

let result = process();
console.log(result());//1
console.log(result());//2
console.log(result());//3
