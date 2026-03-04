// обєкт

// 
// {
//  key: value,
// key: value
// }

// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// }

// console.log(user);
// let key = "name";
// user.name = "Jane";
// user.city = "New York";
// console.log(user.name);

// console.log(user["name"]);

// delete user.age;

// console.log(user);


// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
//     // friends: ["Alice", "Bob"],
//     friends : [
//         {
//             name: "Alice",
//             age: 25,
//         },
//         {
//             name: "Bob",
//             age: 28,
//         }
//     ],
//     son: {
//         name: "Jack",
//         age: 5,
//     }

// }



// console.log(user.friends.length);
// console.log(user.son.name);

// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
//     sayHello: function(){
//         console.log("Hello, my name is " + this.name);
//     }
// }

// user.sayHello();

// функція конструктор

// function User(username, userage) {
//     this.name = username;
//     this.age = userage;
// }

//     const user1 = new User("John", 30);
//     const user2 = new User("Alice", 25);
//     const user3 = new User("Bob", 28);

// console.log(user1);
// console.log(user2);
// console.log(user3);

// класи

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log("Hello, my name is " + this.name);
//     }
// }


    // const user1 = new User("John", 30);
    // const user2 = new User("Alice", 25);
    // const user3 = new User("Bob", 28);

    // user1.sayHello();
    // user2.sayHello();
    // user3.sayHello();


// наслідування
// поліморфізм
// інкапсуляція
// абстракція

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(this.name + " makes a sound.");
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     run() {
//         console.log(this.name + " is running.");
//     }

//     speak() {
//         super.speak();
//         console.log(this.name + " barks.");
//     }

// }

// const dog1 = new Dog("Buddy", "Golden Retriever");

// console.log(dog1.name);
// console.log(dog1.breed);
// dog1.speak();
// dog1.run();

// публічні
// приватні

// class User {
//     #password;
//     constructor(name, age, password) {
//         this.name = name; 
//         this.age = age;
//         this.#password = password;
//     }

//         get password() {
//             return this.#password;
//         }

//         set password(newPassword) {
//             if (newPassword.length < 6) {
//                 console.log("Password must be at least 6 characters long.");
//             } else {
//                 this.#password = newPassword;
//             }
//         }
// }

// const user1 = new User("John", 30, "secret123");
// user1.name = "Jane";
// user1.age = 25;
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.password);
// user1.password = "123421412412";
// console.log(user1.password);

// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// }

// console.log(Object.keys(user));
// console.log(Object.values(user).length);
