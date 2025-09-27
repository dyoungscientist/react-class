/**
 * Examples of destructuring in JavaScript
 */

// Array Destructuring
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]

// Object Destructuring
const user = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const { name, age } = user;
console.log(name); // Alice
console.log(age); // 25

// Destructuring with default values
const { country = "USA" } = user;
console.log(country); // USA

// Function parameter destructuring
function greet({ name, city }) {
    console.log(`Hello, ${name} from ${city}!`);
}

greet(user); // Hello, Alice from New York!
   