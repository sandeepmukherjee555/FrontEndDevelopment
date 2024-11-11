//DOCS:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
//we cannot add new properties but we can update old properties

let obj = {
    x: 10,
    y: 20
};

Object.seal(obj);
obj.x = 30;

console.log(obj);
