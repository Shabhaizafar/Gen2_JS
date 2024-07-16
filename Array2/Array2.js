// => Very Important Array Methods :-

//    - Sort.
// var Arr = [22,29,27,21,25,28,20];

// var Arr = [11,111,1001,1000001,1100010,11112];
// console.log("Before Sorting Array is : ",Arr);

// Arr.sort((a,b)=>{
//     // return a-b;  // lowest //acending
//     return b-a;  // biggest //descending

// });


// var Arr = ["Zafar","Raj","Ajay","Rakesh"];
// console.log("Before Sorting Array is : ",Arr);


// Arr.sort((x,y)=>{
//     return x.length-y.length;
// });

// console.log("after Sorting Array is : ",Arr);

///////////////////////////////////////////////////////////////
//    - Every.   : over all
// var Arr = [22,29,27,21,25,28,20];
// var ans = Arr.every((a)=>{
//     return a>=20;
// });
// console.log(ans);


///////////////////////////////////////////////////////////////
//    - Some.   : any Single or more
// var Arr = [22,29,27,21,25,28,20];
// var ans = Arr.some((a)=>{
//     return a>52;
// });
// console.log(ans);


//////////////////////////////
// / sort() Method:
// Sorting Numbers: Write a function to sort an array of numbers in ascending order using the sort() method.

// Sorting Strings: Sort an array of strings alphabetically (case-sensitive).

// Custom Sorting: Sort an array of objects based on a specific property (e.g., age, name).

// Reverse Sorting: Sort an array of numbers in descending order using sort().

////////////////////////////
// Check Array of Numbers: Write a function that checks if all elements in an array are numbers using the every() method.

// String Length Check: Verify if all strings in an array have a length greater than 3.

// Divisibility Check: Determine if all elements in an array of numbers are divisible by 2.

//////////////////////////
// Check for Even Numbers: Write a function that checks if there are any even numbers in an array using the some() method.

// String Starting with Specific Letter: Determine if there is any string in an array that starts with the letter 'A'.


//////////////////////////////////////////////////////////////////
// var Arr = [11,13,15,16,18,30,50,38,399];
// console.log(Arr);
//    - Filter.
// var ans =  Arr.filter(
//     (a)=>{
//         return a>=20;
// });
// console.log(ans);

// var  Arr2 = [];
// for (const iterator of Arr) {
//     if(iterator>=20)
//     {
//         Arr2.push(iterator);
//     }
// }
// console.log(Arr2);
///////////////////////////////////////////////////
//    - Fill method.
// var Arr = [11,13,15,16,18,30,50,38,399];

//                 // fill start end
// Arr.fill(0,0,6);

// console.log(Arr);


// //    - Find.
// var n = 30;
// var ans = Arr.find(
//     (a)=>{
//         return a==n;
//     }
// );
// console.log(ans);

//    - Splice method.


// var Arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

// // var ans = Arr.splice(3,4);
// // console.log(Arr);
// // console.log(ans);//deleted Values 

// var n = Arr.indexOf(18);

// var ans = Arr.splice(n,10);
// console.log(Arr);
// console.log(ans);//deleted Values 

//    - Foreach method.
//    - Map method.
//    - Reduce.

///////////////////////////
// 1. **Find:**
//    - Write a function `findEvenIndex` that takes an array of integers and returns the index of the first even number using `Array.prototype.find`. If no even number is found, return `-1`.

// 2. **Fill:**
//    - Create an array of 5 elements and use `Array.prototype.fill` to replace all elements with a specific value (e.g., `'filled'`).

// 3. **Filter:**
//    - Given an array of objects representing employees (each with properties like `name`, `department`, `salary`), write a function `filterBySalary` that takes an array of employees and a minimum salary. Use `Array.prototype.filter` to return a new array containing only the employees whose salary is greater than or equal to the minimum salary.

// 4. **Splice:**
//    - Write a function `spliceAndReplace` that takes an array, a start index, a delete count, and an array of replacement elements. Use `Array.prototype.splice` to remove elements from the array starting from the given index and delete count, then insert the replacement elements at that position. Return the modified array.

// 5. **Find:**
//    - Create a function `findPrime` that takes an array of integers and returns the first prime number using `Array.prototype.find`. If no prime number is found, return `null`.

// 6. **Fill:**
//    - Initialize an array of 8 elements with the numbers from 1 to 8 using `Array.prototype.fill` and a callback function.

// 7. **Filter:**
//    - Given an array of objects representing products (each with properties like `name`, `price`, `category`), write a function `filterByCategory` that takes an array of products and a category string. Use `Array.prototype.filter` to return a new array containing only the products that belong to the specified category.

// 8. **Splice:**
//    - Write a function `spliceAndInsertMultiple` that takes an array, a start index, a delete count, and an array of multiple elements to insert. Use `Array.prototype.splice` to remove elements from the array starting from the given index and delete count, then insert all elements from the replacement array at that position. Return the modified array.

// 9. **Find:**
//    - Implement a function `findLongestWord` that takes an array of strings and returns the longest word using `Array.prototype.find`. If there are multiple longest words, return the first one found.

// 10. **Fill:**
//     - Create an array of 10 elements and use `Array.prototype.fill` to replace all elements with the numbers from 1 to 10.

// 11. **Filter:**
//     - Given an array of objects representing students (each with properties like `name`, `age`, `grade`), write a function `filterByGrade` that takes an array of students and a minimum grade. Use `Array.prototype.filter` to return a new array containing only the students whose grade is greater than or equal to the minimum grade.

// 12. **Splice:**
//     - Write a function `spliceAndReverse` that takes an array and two indices (`start` and `end`). Use `Array.prototype.splice` to extract a subarray from `start` to `end`, reverse it, and then insert it back into the original array at the same position. Return the modified array.

//////////////////////////
var Arr = [11,13,15,16,18,30,50,38,399];
console.log(Arr);

Arr.splice();


// // for 
// for in 
// for (const key in Arr) {
//    console.log(key, typeof key);  Arr[key]
// }
// // for of 


//    - Foreach method : 
// Arr.forEach((v,i,a)=>{
//     console.log(v,i,a);

// });



///////////////////////////////////////////////


//    - Map method.
//    - Reduce.


//////////////////////////////////////////////

// structure  : C
// obj    : JS 
// dict  : Py 

// obj   : CPP,JAVA
