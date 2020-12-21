
// Variables
let numberX = 38;
let stringY = "ahsiud";

console.log("Number " + numberX);
console.log("String " + stringY);

// Objects
let person = {
    nameOf: "John",
    age: 37
}

console.log(person);
console.log(person.nameOf);
console.log(person.age);

// Methods of editing variables in an object
// Dot Notation
person.nameOf = "Jim";
console.log(person);

// Bracket Notation
person["nameOf"] = "Mary";
console.log(person["nameOf"]);

// Array
let arrayOne = ["red", "blue"];
console.log(arrayOne);
console.log("Array position zero " + arrayOne[0]);
console.log("Array position one " + arrayOne[1]);

// Functions
hello();

function hello() {
    console.log("hello");
}

for(let i = 0; i < 10; i++){
    console.log(i);
}