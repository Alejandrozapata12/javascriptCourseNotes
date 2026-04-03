/*
Un WeakSet de JavaScript es una colección de valores en la que los valores deben ser objetos.
Un WeakSet contiene referencias débiles a sus valores.
*/

// Create a WeakSet
let mySet = new WeakSet();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};

// Add then Object
mySet.add(myObj);

// Do I have myObj in the mySet?
let answer = mySet.has(myObj);

document.getElementById("demo").innerHTML = "Do I have myObj? is " + answer // true


let text = "";

// Create a WeakSet to track persons
const persons = new WeakSet();

// Create Visitor Objects
const John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};

// Track visits
track(Paul);
track(Ringo);  
track(Paul);

// Function to track visitors
function track(visitor) {
  if (persons.has(visitor)) {
    text += visitor.name + " is visiting again.<br>";
  } else {
    persons.add(visitor);
    text += visitor.name + ", age" + visitor.age +", is visiting for the first time<br>";
  }
}

document.getElementById("demo").innerHTML = text; 

/*
Answer: 

Paul, age41, is visiting for the first time
Ringo, age42, is visiting for the first time
Paul is visiting again.

*/

