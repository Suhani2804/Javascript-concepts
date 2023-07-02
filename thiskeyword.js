// this keyword in js
//binding
//borrowing


//window object points to global object while this keyword points to current object 
//object 1
let user={
    firstname: "anshika",
    lastname: "agarwal",
    hobbies:["swimming","dancing"],
    printfullname(hobby)
    {
        // console.log(this);//prints the whole user object...i.e. the firstname,lastname and function printfullname()
        console.log(hobby);
        return  `${this.firstname} ${this.lastname}`;//we have to use this and not in other case as here we have declared first and lastname inside the object
       //and in the previous case we had declared it outside the object
    },
    //this is global scoped however within object it is object scoped thus this.firstname=user.firstname
    //thus this helps us to access object variables within the object
    showhobbies()
    {
        console.log(this.firstname);
        this.hobbies.forEach((hobby)=>
        {
            console.log(this.firstname);
            console.log(hobby);
        });
    },
};
// user.printfullname();

//binding
let printDetails=function(hobby)
{
    console.log(this.printfullname()+ "loves"+ hobby);
}
// let details=printDetails.bind(user); 
// details("cooking");
//basically printdeatils is not in user object but we need to access printfullname which is present is unser object
//for this we bind our function to the object and helps us to access printfullname

//borrowing
const user2={
    firstname:"ankit",
    lastname:"gupta",
};
let user2details=user.printfullname.call(user2,"cooking");
console.log(user2details);
let details = printDetails.bind(user);

//details("cooking");
// call  // apply ==[]
//user.printFullName();
//user.showHobbies();

//in call we can pass parameters normally whereas in apply we need to pass parameters 
//this==window this word is global scoped
//this is global scoped inside a function, local scoped inside objects,global scoped in functions

function understandingThis() {
    console.log(this); // global object
  }
  //console.log(this);

//understandingThis();

// let user = {
//   firstName: "Anshika",
//   lastName: "Agarwal",
//   getname() {
//     console.log(this);
//     console.log(this.firstName);
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// let user2 = {
//   firstName: "Anshul",
//   lastName: "Gupta",
// };

// user.getname.call(user2);

// user.getname();

// user.printDetails = function () {
//   console.log(this);
// };

// function abc() {
//   console.log(this);
// }

// const person = {
//   firstName: "Anshika",
//   lastName: "Agarwal",
//   hobbies: ["swimming", "cooking", "dancing"],

//   showHobbies() {
//     console.log(this.firstName);
//     this.hobbies.forEach((hobby) => {
//       console.log(this.firstName, hobby);
//     });
//   },
// };

// person.showHobbies();