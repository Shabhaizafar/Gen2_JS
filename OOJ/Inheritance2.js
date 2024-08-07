// class Father{
//     constructor(){
//         this.fathername = "Kaleen Bhaiya";
//     }
// }

// class Mother{
//     constructor(){
//         this.mothername = "Beena";
//     }
// }

// class Child extends (Mother,Father){
//     constructor(cname,lname){
//         super();
//         this.childname = cname;
//         this.lastname = lname;
//     }
// }



// const c1 = new Child("Munna","Tripathi");

// console.log(c1);



class All{
    
}

const Father = (sclass) => class extends sclass {
    FatherName = "Kaleen Bhaiya";
}
const Mother = (sclass) => class extends sclass {
    MotherName = "Beena Bhabhi";
}


class Main{
    constructor(sclass){
        this.sclass = sclass;
    }
    Connector(...classArr){
        return classArr.reduce((currentClass,nextClass)=>nextClass(currentClass),this.sclass);
    }

}

var Final =(x)=>new Main(x);


class Child extends Final(All).Connector(Father,Mother){
    ChildName = "Munna";
    LastName =  "Tripathi";
}



const c1 = new Child();

console.log(c1);