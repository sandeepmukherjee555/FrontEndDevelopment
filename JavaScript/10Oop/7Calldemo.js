/*
DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
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

const obj = function (x, y) {
    console.log(x + y);
    this.getDetails();
    //here this inside this function is binded towards player
}

obj.call(player, 3, 9);

/*
Difference between bind and Call
Ans: bind completely returns us a new function where as call will immediately call the same function
with the object binded towards this context
We can pass some arguments after player 1
*/
