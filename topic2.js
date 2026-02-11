// масиви

//  ['d', 'f', 'g'] 
// const arr = [1,2,3,4,5,6,7];

// arr[1] = 400;

// console.log(arr);

// console.log(arr[5]);

// console.log(arr.length);

// arr[7] = 800;

// arr[10] = 1000;

// console.log(arr[8]);

// const students = ['Ivan', 'Petro', 'Olena'];

// students.push('Andriy', 'Maria'); // додає елемент в кінець масиву

// students.pop(); // видаляє останній елемент масиву

// students.unshift('Sergiy'); // додає елемент на початок масиву

// students.shift(); // видаляє перший елемент масиву

// console.log(students);

// console.log(students.slice(1,3)); // створює новий масив з вказаного діапазону

// students.splice(1, 1, 'Oksana', 'Ivanka'); // змінює вміст масиву, додаючи або видаляючи елементи

// console.log(students);

// const students = ['Ivan', 'Petro', 'Olena'];
// const students2 = ['Sergiy', 'Andriy'];

// const allStudents = students.concat(students2); // об'єднує два масиви
// console.log(allStudents);


// цикли

// while
// for

// while (умова) {
//     // код, який виконується, поки умова істинна
// }

// let i = 0;

// while (i <= 5) { // 6 <= 5 - false
//     console.log(i); // 0 1 2 3 4 5
//     i += 1; // i = 6
// }


// for (let i = 0; i <= 5;  i += 1) {
//     console.log(i);
// }

// for (let i = 5; i >= 0; i -= 1) {
//     console.log(i);
// }

// const students = ['Ivan', 'Petro', 'Olena', 'Sergiy', 'Andriy'];

// for (let i = 0; i < students.length; i += 1) {
//     console.log(students[i]);
// }

// break
// continue
// for (let i = 0; i < students.length; i += 1) {
//     if (students[i] === 'Petro'){
//         continue; // пропускає поточну ітерацію і переходить до наступної
//     }
//     console.log(students[i]);
// }

// for (let i = 0; i < students.length; i += 1) {
//    console.log(students[i]);
//    if (students[i] === 'Olena') {
//        break;
//    }
// }

// for of

// for (let student of students){
//     console.log(student);
// }

// for in

// for (let index in students) {
//     // console.log(index);
//     // console.log(students[index]);
//     console.log(index + ": " + students[index]);
// }

// functions

// function sayHello() {
//     console.log("Hello!");
// }

// sayHello(); // виклик функції

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(5, 10);

// sum(20, 30);
// sum(1, 2);

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(5, 10); // 15

// result += 20; // result = result + 20
// console.log(result);

// function sum() {
//     // console.log(arguments);
//     let total = 0;
//     for (let i = 0; i < arguments.length; i += 1) {
//         total += arguments[i]; // total = total + arguments[i]
//     }
//     console.log(total);
// }

// sum(5, 10, 41,4,354,543,54,6,6,75,3,4);

// sum(1, 2, 3, 4, 5);

// sum(10, 20);
// sum(100, 200, 300);

// declaration();

// expression();


// // function declaration
// function declaration() {
//     console.log("This is a function declaration");
// }


// // function expression
// const expression = function() {
//     console.log("This is a function expression");
// }

// function sum(a, b) {

//     function helper(x) {
//         return x * 2;
//     }

//     return helper(a) + helper(b);
// }
