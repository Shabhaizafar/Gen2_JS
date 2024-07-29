function All(fname,lname){
    var a = Object.create({});
    a.firstname = fname;
    a.lastname = lname;
    a.greet  = function (){
        console.log(`Your Name is ${a.firstname} ${a.lastname}.`);
    }
    a.greetAll  = function (){
        console.log(`${a.firstname}, Welcome to Javascript.!!!`);
    }
    return a;
}
var obj1 = All("Raj","Patel");
var obj2 = All("Ajay","Shah");

console.log(obj1);
console.log(obj2);

obj1.greet();
obj2.greet();
obj1.greetAll();
obj2.greetAll();

