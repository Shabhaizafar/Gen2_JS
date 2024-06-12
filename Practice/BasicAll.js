// ### Hello World Program
// 1. Write a program to print "Hello, World!" to the console.
// console.log("Hello World!!");

// 2. Modify the "Hello, World!" program to include your name in the greeting.
// var fname = "Himesh";
// console.log("Hello World!!".slice(0,6)+fname);

// 3. Print "Hello, Universe!" to the console.
// console.log("Hello, Universe");


///////////////////////////////////////////////////////////
// ### Declare Variable Using `var`
// 1. Declare a variable using `var` and assign it a value. Reassign the value and print it.
// var value1;
// value1 = 12;
// console.log(value1);
// value1 = 15;
// console.log(value1);

// 2. Declare two `var` variables and swap their values.
// var v1 = 12;
// var v2 = 13;
// console.log("Before swap : ",v1,v2);
// var temp = v1;
// v1=v2;
// v2=temp;
// console.log("After swap : ",v1,v2);

// 3. Declare a `var` variable, reassign it within a function, and print it both inside and outside the function.
// var v1 = 12;
// console.log("Value1 Before Function :",v1);
// function All(){
//     v1=13;
//     console.log("Value1 inner Function :",v1);
// }
// All();
// console.log("Value1 After Function :",v1);

// /////////////////////////////////////////////////////////////////
// ### More About Variables
// 1. Declare variables using `var`, `let`, and `const`. Assign each a different value and print them.
// var v1 = 12;
// let v2 = 13;
// const v3 = 14;
// console.log(v1);
// console.log(v2);
// console.log(v3);

// 2. Try reassigning a `const` variable and observe the error.
// v3 = 100;
// Uncaught TypeError: Assignment to constant variable.


// 3. Declare a `let` variable inside a block and print it outside the block.
// {
//     let v1 = 13;
//     console.log(v1);
// }
// console.log(v1);   //Uncaught ReferenceError: v1 is not defined

// 4. Create a `const` object and modify one of its properties.
// const obj = {
//     fname : "Raj",
//     lname: "Shah"
// };
// console.log(obj);
// obj.fname = "Ajay";
// obj['lname'] = "Patel";

// console.log(obj);


// 5. Declare a `let` variable, reassign it within a loop, and print it both inside and outside the loop.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);


// -----------------------------

// ### Hello World Program
// 1. Write a program to print "Hello, JavaScript!" to the console.
// 2. Modify the "Hello, World!" program to include your favorite quote.
// 3. Create a function that returns "Hello, Function!" and print its result.
// 4. Write a program to print "Hello, [Your City]!" to the console.
// 5. Print "Welcome to JavaScript programming!" to the console.

// ### Declare Variable Using `var`
// 1. Declare a `var` variable and initialize it with a number. Print the variable.
// 2. Declare a `var` variable and initialize it with a boolean. Print the variable.
// 3. Declare a `var` variable, initialize it with a string, and then change it to a number. Print the variable.
// 4. Declare multiple `var` variables in a single statement and print them.
// 5. Declare a `var` variable inside a function and print it both inside and outside the function.

// ### More About Variables
// 1. Declare a variable using `var` inside a function and print it outside the function.
// 2. Declare a variable using `let` inside a loop and print it outside the loop.
// 3. Declare a variable using `const` and try to change its value within a block scope.
// 4. Create an object with `const` and add a new property to it.
// 5. Declare a variable using `var` and try to redeclare it using `let` in the same scope.