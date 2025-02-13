//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "haatim", "aladdin"];
let myObj = {
    name: "shivani",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score, score);
console.log(typeof scoreValue, scoreValue);
console.log(typeof isLoggedIn, isLoggedIn);
console.log(typeof outsideTemp, outsideTemp);
console.log(typeof userEmail, userEmail);
console.log(typeof id, id);
console.log(typeof anotherId, anotherId);
console.log(typeof heros, heros);
console.log(typeof myObj, myObj);
console.log(typeof myFunction, myFunction());

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ********************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "shivanidotcom"

let anotherName = myYoutubename     // copy of myYoutubename in Stack
anotherName = "myYoutubeName"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne               // refference of userOne in Heap
userTwo.email = "shivani@google.com"

console.log(userOne.email);
console.log(userTwo.email);




