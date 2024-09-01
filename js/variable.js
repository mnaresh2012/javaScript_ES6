let name = "john";
const DOB = 2006;
var address = {
    name: 'john',
    age: 25,
    email: 'john@gmail.com'
}

/*let - const - var
var:
	- hoisted (always declared at top of scope, global if none)
    - function scope

    var greeter = "hey hi";
    greeter = "say Hello instead";


	** Problem with var
    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead";
    }

    console.log(greeter) // "say Hello instead"


let:
    - block scope
    - can be updated with new value
    - not re declarable

    let greeting = "say Hi";
    greeting = "say Hello instead";

const:
    - block scope
    - not re assignable
    - not re declarable



const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable.

var userAge = 31;
*/