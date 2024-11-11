var obj1 = {
    name: "Sandeep Mukherjee",
    comapany: "Google",
    display: () => {
        console.log(this.name, " works in ", this.comapany);
    }
}

var obj2 = {
    name: "Sushil Anand",
    company: "Walmart",
    display: () => {
        setTimeout(() => {
            console.log(this.name, "Works in", this.comapany);
        }, 3000);
    }
}

var obj3 = {
    name: "Goplu Poulomi",
    company: "Amazon",
    display: function () {
        console.log(this);
        setTimeout(() => {
            console.log(this.name, "Works in ", this.company);
        }, 3000);
    }
}

/*
In case of arrow functions this keyword is resolved lexically 
*/

obj1.display();
//this keyword checks goes outside of the object scope and check in global scope
console.log(this);
obj2.display();
//if we have arrow function we are not going to point to the call side it will go ouside the scope
obj3.display();
/*
we dont have definition of this inside arrow func we will go one scope outside 
we have definition of this inside normal function because in a normal function
*/