// Question 1: String Manipulation (5 Marks)
// Scenario: You are building a search engine and need to sort the words in a sentence lexicographically.
// Problem Statement: Write a function sortWords(sentence) that takes a string sentence and returns a new string
// with the words sorted lexicographically.
// Example:
// sortWords("Hello World JavaScript"); // "Hello JavaScript World"
// sortWords("banana apple cherry"); // "apple banana cherry"

// var str = "Hello World JavaScript";
// console.log(str);
// function sortWords(sentence){
//     return sentence.split(' ').sort().join(' ');
// }
// var output = sortWords(str);
// console.log(output);

// -------------------------------------------

// Question 2: Harmonic Series (5 Marks)
// Scenario: You are creating a mathematical library and need to implement functions to calculate the first n terms of
// harmonic series.
// Problem Statement:
// 1. Write a function harmonicSeriesSum1(n) that calculates the sum of the first n terms of the harmonic series.
// 2. Write a function harmonicSeriesSum2(n) that returns an array of the first n terms of the harmonic series.
// Example:
// harmonicSeriesSum1(5); // 2.283333333333333
// harmonicSeriesSum2(5); // [1, 0.5, 0.3333333333333333, 0.25, 0.2]
//                            1/1 1/2     1/3              1/4  1/5

// var term = 5;
// var sum = 0;
// var Arr = [];

// function harmonicSeriesSum1(n)
// {
// for (let i = 1; i<=n; i++) {
//     sum+=(1/i);
// }
// console.log(sum);
// }
// harmonicSeriesSum1(term);


// function harmonicSeriesSum2(n){
//     for (let i = 1; i<=n; i++) {
//         Arr.push(1/i);
//     }
//     return Arr;
// }

// var output2 = harmonicSeriesSum2(term);
// console.log(output2);

// -----------------------------------------------------
// Question 3: Object Manipulation (5 Marks)
// Scenario: You are building a student management system and need to create a function that sorts students by their
// grades.
// Problem Statement: Write a function sortStudentsByGrade(students) that takes an array of student objects and
// returns a new array sorted by grades in descending order. Each student object has the properties name and grade.
// Example:
// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 85 },
//     { name: "Charlie", grade: 95 }
//    ];
//    sortStudentsByGrade(students);
   // [
   // { name: "Charlie", grade: 95 },
   // { name: "Alice", grade: 90 },
   // { name: "Bob", grade: 85 }
   // ]
   


// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 85 },
//     { name: "Charlie", grade: 95 }
//    ];

// function sortStudentsByGrade(students){
//     for (const key in students) {
//        for (const key2 in students) {
//         if(students[key].grade>students[key2].grade)
//             {
//                 var temp = students[key];
//                 students[key] =students[key2];
//                 students[key2] = temp;
//             }
//        }
//     }
//     return students;
// };
// var otput3 = sortStudentsByGrade(students);
// console.log(otput3);
// --------------------------------------------------
// Question 4: Modified Harmonic Series (5 Marks)
// Scenario: You are developing a scientific calculator application and need to include functions that compute a modified
// harmonic series.
// Problem Statement:
// 1. Write a function modifiedHarmonicSeriesSum(n) that calculates the sum of the first n terms of the series: ( 1
// + \frac{2}{2!} + \frac{3}{3!} + \frac{4}{4!} + \cdots + \frac{n!} ).
// Example:
// modifiedHarmonicSeriesSum(5); // 2.708333333333333

// var n = 5;
// var sum = 0;
// function modifiedHarmonicSeriesSum(n){
// for (let i = 1; i <=n; i++) {
//     var fact = 1;
//     for (let j=1; j<=i; j++) {
//         fact= fact*j;       
//     }
//     sum+=(i/fact);
// }
// console.log(sum);
// }
// modifiedHarmonicSeriesSum(n);

// ---------------------------------------------
// Question 5: Number Functions (5 Marks)
// Scenario: You are developing a number theory library and need to include functions for Armstrong numbers.
// Problem Statement:
// 1. Write a function isArmstrong(number) that takes a number and returns true if it is an Armstrong number,
// and false otherwise.
// 2. Write a function setRange(start, end) that takes two numbers start and end, corrects the range if
// necessary, and returns an array of Armstrong numbers within that range.
// Example:
// isArmstrong(153); // true
// isArmstrong(123); // false
// setRange(1, 2000); // [1, 153, 370, 371, 407]
// setRange(2000, 1); // [1, 153, 370, 371, 407]

// var n = 153;
// var temp2 = n;
// var len = String(n).length;
// var sum = 0;
// var temp;
// function isArmstrong(n){
//     while (n>0) {
//         temp = n%10;
//         var pow = 1;
//          for (let i = 1; i <=len; i++) {
//              pow*=temp;
//          }
//          sum+=pow;
//         n = parseInt(n/10);
//         };
//         if(sum==temp2)
//         {
//             return true;
//         }
//         else{
//             return false;
//         }
// }
// var output4 = isArmstrong(n);
// console.log(output4);

// var n1 = 1;
// var n2 = 2000;
// var temp;
// if(n1>n2)
// {
//     var s = n1;
//     n1 = n2;
//     n2 = s;
// }
// var Arr = [];
// for (let i = n1; i<=n2; i++) {
//     n=i;
//     var len = String(n).length;
//     var sum = 0;
//     while (n>0) {
//         temp = n%10;
//         var pow = 1;
//      for (let i = 1; i <=len; i++) {
//          pow*=temp;
//      }
//      sum+=pow;
//     n = parseInt(n/10);
//     };
//     if(i==1 || sum==i && len>1)
//     {
//        Arr.push(sum);
//     }
// }
// console.log(Arr);
// ------------------------------------
// Question 6: Arrow Functions (5 Marks)
// Scenario: You are working on an e-commerce platform and need to implement a function that calculates the total price of
// items in a cart, applying a discount if provided.
// Problem Statement: Write an arrow function const calculateTotal = (items, discount = 0) that takes an
// array of item prices items and an optional discount percentage discount, and returns the total price after applying the
// discount.
// Example:
// calculateTotal([100, 200, 300], 10); // 540
// calculateTotal([50, 50, 50]); // 150

// var Arr = [50,50,50];
// var sum=0;
// var discount ;
// function calculateTotal(Arr,discount){
//     for (const iterator of Arr) {
//         sum+=iterator;
//     }
//     if(typeof(discount)=="number")
//     {
//         return sum - (sum*(discount/100));
//     }
//     else
//     {
//         return sum;
//     }
// }
// var ANS = calculateTotal(Arr);
// console.log(ANS);