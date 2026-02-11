// debugging
// let a = 5;
// let b = 10;

// let c = a + b;

// console.log("Result a + b = " + c);

// let d = c * 2;

// console.log("Result c * 2 = " + d);

// let h = d - a;
// console.log("Result d - a = " + h);


// let a = 5;
// let b = 10;

// let c = a + b;

// let d = c * 2;

// let h = d - a;

// for (let i = 0; i < 5; i += 1) {
//     console.log("Iteration " + i);
//     if (i === 2) {
//         console.log("Found 2, breaking the loop");
//         break;
//     }
// }


// logical
// sytax

// console.log(;

// runtime

// print("Hello");
// printMe();

// try catch

// try {
//     console.log("start of try block");
//     printMe();
//     console.log("end of try block");
// } catch(error) {
//     // console.log("section catch");
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// throw
// new Error("This is a custom error message");
// TypeError
// RangeError
// SyntaxError

// throw new Error("This is a custom error message");

// throw new TypeError("This is a type error message");
// throw new RangeError("This is a range error message");
// throw new SyntaxError("This is a syntax error message");

// try{
//     const age = +prompt("Enter your age:");
//     if (age === null) {
//         throw new Error("Input cancelled by user");
//     } else if (isNaN(age)) {
//         throw new TypeError("Invalid input: not a number");
//     }
//     alert("Welcome!");
// } catch (error) {
//     console.log("Error name: " + error.name);
//     console.log("Error message: " + error.message);
// }

// class AgeError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "AgeError";
//     }
// }

// try{
//     const age = +prompt("Enter your age:");
//     if (age < 18){
//         throw new AgeError("You must be at least 18 years old.");
//     }
//     alert("Welcome!");
// } catch (error) {
//     console.log("Error name: " + error.name);
//     console.log("Error message: " + error.message);
// }

// forEach map filter reduce

// let numbers = [1, 2, 3, 4, 5];
// set([1,2,3,4,5,6])


// numbers.forEach(function(element, index){
//     console.log(element);
//     console.log(index);
// })

// numbers.map(function(element, index){
//     console.log(element);
//     console.log(index);
// })

// const newNumbers = numbers.map(function(element, index){
//     return element * 10;
// })

// console.log(newNumbers);

// const pairNumbers = numbers.filter(function(element){
//     return element % 2 === 0;
// })

// console.log(pairNumbers);

// const sum = numbers.reduce(function(accumulator, element){
//     return accumulator * element;
// }, 1);
// console.log(sum);