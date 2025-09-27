// different type of array methods
// map, filter, reduce, find, findIndex, foreach
// some, every, fill, splice, slice, includes, indexOf, lastIndexOf
// push, pop, unshift, shift, concat, join, toString, sort, reverse
// map handles iteration
let nums=[1, 2, 3, 4, 5]
let square = nums.map((num) => num * num)
console.log(square) // [1, 4, 9, 16, 25]
// taking the odd numbers from 10 to 20 and return a new list of their cube
let numeral =[ 1,3,5,7,9,11, 13, 15, 17, 19]
let cube = numeral.map((nume) => nume*nume*nume)
console.log(cube)
