// import Multiplication, {PI, Substraction, Addition} from "./module";

// console.log(Addition(5, 5));
// console.log(Substraction(10, 6));
// console.log(PI);
// console.log(Multiplication(5, 8));


// to import all methods from the export file
import * as MathModule from './module';

console.log(MathModule.Addition(5, 5));
console.log(MathModule.Substraction(10, 6));
console.log(MathModule.PI);

console.log(MathModule.default(5, 8));