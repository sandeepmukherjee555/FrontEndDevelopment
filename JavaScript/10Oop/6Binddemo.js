/*
DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
bind method creates a new function such that function have its own this
*/
const player = {
    firstName: "Sandeep",
    lastName: "Mukherjee",
    numberToBat: 3,
    canBowl: true,
    getDetails: function () {
        console.log(this.firstName, this.lastName, "comes at No", this.numberToBat);
    }
}

const obj = function () {
    console.log(this.getDetails());
}

let x = obj.bind(player);
x();

