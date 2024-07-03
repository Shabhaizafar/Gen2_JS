// 1. Creating an Object
// 1)  using object literal 
var obj = {};
// console.log(obj,typeof obj);

// 2) using Object Constructor : 
// var obj = new Object();
// console.log(obj,typeof obj);

// 3) using create Method :
// var obj = Object.create({});
// console.log(obj,typeof obj);



// 2. Adding Properties to an Object
//dot notation
obj.Fname = "Raj";
console.log(obj);
//bracket Notation 
obj["Lname"] = "Patel";
console.log(obj);


// 3. Modifying Object Properties
//dot notation
obj.Fname = "Ajay";
console.log(obj);
//bracket Notation 
obj["Lname"] = "Shah";
console.log(obj);

// 4. Deleting Properties from an Object
//dot notation
// delete obj.Fname;
// console.log(obj);
// //bracket Notation 
// delete obj["Lname"];
// console.log(obj);

// 5. Looping Through Object Properties  (for-in loop)
for (const key in obj) {
    // console.log(key);
    // bracket 
    // console.log(key,obj[key]);

    // dot notation doesn't working 
    // console.log(key,obj.key);
}


// 6. Checking Property Existence
// 7. Copying an Object
// 8. Merging Objects
// 9. Retrieving Object Keys
// 10. Retrieving Object Values