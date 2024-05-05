//JavaScript Symbols provide a way to create unique identifiers
//and enable more robust object property management and customization.
//JavaScript Symbols are unique and immutable data types

let mySym = Symbol('email');

let employee = {
    name: 'John',
    age: 45,
    [mySym]: 'john@gmail.com' // private property
}

Object.keys(employee); // name, age

for (key in employee) {
    console.log(employee); // name, age
}

// To access the property
employee[mySym] // john@gmail.com