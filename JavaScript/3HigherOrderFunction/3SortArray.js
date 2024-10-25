let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];//unsorted array
arr.sort();//default implemtation of arr.sort() is going to sort the array in lexiographical order(dictionary order)

/*
0 -> A
1 -> B
2 -> C
3 -> D
4 -> E
5 -> F
6 -> G
7 -> H
8 -> I
9 -> J

so the array looks [B,BA,J,BAA,BAAA,BB,BC,BD,BE,C,D],if we array according to dictionary 
we will get [B,BA,BAA,BAAA,BB,BC,BD]
*/

//If we want to sort b in increasing order 
let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
//sort is a HOF sort functions takes a comparator fucntion as an argument 
b.sort(function (a, b) {
    return a - b;
})
console.log(b);
//if a < b -> a - b will be negative -> if cmp fun gives negative then a is placed before b
//if a > b -> a - b will be positive -> if cmp fun gives positive then b is placed before a

