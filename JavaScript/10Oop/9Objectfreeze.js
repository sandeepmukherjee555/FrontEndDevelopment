//DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
//nither we can add a new property not update old one 
let obj = {
    x: 10,
    y: 20
};

Object.freeze(obj);
obj.x = 30;

console.log(obj);

