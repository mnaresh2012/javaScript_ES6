// rest operator and spread operator ( ... )
// function parameter
function sum (...nums) {
    return nums.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4)); // output: 10

// Object destructuring
const person = {name: 'Naresh', age: 30, occupation: 'ui developer'};
const {name, ...otherdetails} = person;
console.log(otherdetails); // output: {age: 30, occupation: 'ui developer'}

// array destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // output: 1
console.log(rest); // output: [2, 3, 4, 5]

//spread array
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [...numbers, 6, 7];
console.log(moreNumbers); // output: [1, 2, 3, 4, 5, 6, 7]


// spread object
const personObj = {name: 'john', age: 32};
const updatedPersonObj = {...personObj, city: 'Bangalore'};
console.log(updatedPersonObj); // {name: 'john', age: 32, city: 'Bangalore'}

// function argument
function greet(fistName, lastName) {
    console.log(`Hello! ${fistName} ${lastName}`);
}
const nameArray = ['Naresh', 'Mahanta'];
greet(...nameArray); // output: Hello! Naresh Mahanta