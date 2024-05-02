// - While loop.
// - While loop examples.
// - For loop.
// - For loop examples.
// - break and continue keyword.
// - Do while loop.



// 1) Entry control loop 
// for loop 
/*

for (let index = 0; index < n; index++) {

    
}

*/
// while loop 
/*
var i = 0;
while (condition) {
    

    i++;
}

*/

// 2) Exit Control Loop 
// do-while loop 
/*
var i = 0;
do {
    
    i++;
} while (condition);
*/
///////////////////////////////////////////////
// wap to print 1 to n numbers.
// 1) for Loop  
// var n = 10;
// for (let i = 1; i <=n; i++) {
//     console.log(i);
// }



// 2)while Loop
// var i = 1;
// var n = 10;
// while (i<=n) {
//     console.log(i);
//     i++;
// }



//3) do-while Loop

// var i = 11;
// var n = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=n);

// Let's imagine you're building a simple game where the player has to guess a number between 1 and 100. You want to keep prompting the user for guesses until they guess the correct number. You could use a do-while loop to ensure that the game continues until the player guesses correctly.
////////////////////////////////////////////

//  Pattern  :    
// 1) 
/*
*
* * 
* * * 
* * * *
*/ 
var n = 10;
var str = "";
for (let i = 0; i < n; i++) {
    str= "";
    for (let j = 0; j <=i; j++) {
        str+="* ";// str= str+"* "
    }   
    console.log(str);
}

/*
1
1 2
1 2 3
1 2 3 4
*/
// var n = 10;
// var str = "";
// var k;
// for (let i = 0; i < n; i++) {
//     str= "";
//     k = 1;
//     for (let j = 0; j <=i; j++) {
//         str+=k;
//         k++;
//     }   
//     console.log(str);
// }


/*
n=4
      *
    * * *
  * * * * *
* * * * * * *
* *       * *
* *       * *

n=5
        *
      * * *
    * * * * *
  * * * * * * * 
* * * * * * * * *
* * *       * * *
* * *       * * *
* * *       * * *
*/