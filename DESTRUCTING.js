
 // Examples of destructuring in JavaScript
 // the whole point of destructuring is to unpack values from arrays or properties from objects into distinct variables.
 // this is just a simple way of combining 

// Array Destructuring
const num = [1, 2, 3, 4];

const [num1, num2, rest] = numbers;
console.log(num1); // 1
console.log(num2); // 2
console.log(rest); // [3, 4]

// Object Destructuring
const human = {
    name: "Dave",
    age: 15,
    city: "Nepal"
};

const { name, age } = user;
console.log(name); 
console.log(age); 

// Destructuring with default values
const { country = "Bangledash" } = user;
console.log(country); 


   