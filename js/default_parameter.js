/*
 * If we are not giving any value while calling the method
 * then it will take the default one
*/

function sayHi (msg = 'Hello!') {
    console.log(msg);
}

sayHi(); // Hello!

sayHi('Hi there.'); // Hi there.