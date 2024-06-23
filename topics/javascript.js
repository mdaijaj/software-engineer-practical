//1 //clouser    
// //A clouser is function along with its lexical enviroment bind that is call clouser
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name= "Chrome"
//   return displayName;
// }
// let c= init();
// console.log("c", c())


// call vs apply vs bind
// call apply and bind method use access only once define other function property not repeating code
// Call and apply are almost same except the way second arguments are passed
// call as single object and apply as a array second arguments 
// bind method use take variable function define;
var employee1 = { 
  firstName: "aijaj", 
  lastName: "khan" 
};

var employee2 = { 
  firstName: "raj", 
  lastName: "malhotra" 
};



//3 // curry  same clousers example different code write way on single line multiple arguments
// function Addition1(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// // let add1= Addition1(5)
// // let add2= add1(6)
// // let add3= add2(8)
// console.log("add3", add3)


//curry example function call
// let res=Addition1(5)(7)(5)
// console.log("res", res)


//shallo copy deep copy
// let obj={
//   name: "kishan"
// }

// let user= obj;
// user.name="musk";
// console.log("obj...", obj) 
// console.log("obj...", obj)  //copy of memory location



  let obj ={ 
      name : "Manish",
      company : "Gfg"
  }
    var student2 =  student1  ;    //copy of memory location
    student1.name = "Rakesh"
    // console.log("student 1 name is",student1.name)
    // console.log("student 2 name is ",student2.name);


// Both Object.assign() and
// spread operator (…) will create shallow copy

// 	var student1 ={ 
//     	name : "Manish",
//     	company : "Elitemindz"
// 	}
// 	var student2 = { ...student1 } ;   //deep copy
// 	student1.name = "Rakesh"
// 	console.log("student 1 name is",student1.name)
// 	console.log("student 2 name is ",student2.name);
	


// //deep copy Original object with nested object
// const originalObject = { a: 1, b: { c: 2 } };


	

// 	var student1 ={ 
//     	name : "Manish",
//     	company : "Gfg"
// 	}
// 	var student2 = Object.assign( {} ,student1) ;    //shoallow copy
// 	student1.name = "Rakesh"
// 	console.log("student 1 name is",student1.name)
// 	console.log("student 2 name is ",student2.name);


// 	var student1 ={ 
//     	name : "Manish",
//     	company : "Gfg"
// 	}
// 	var student2 = JSON.parse(JSON.stringify(student1))    //deep copy
// 	student1.name = "Rakesh"
// 	console.log("student 1 name is",student1.name)
// 	console.log("student 2 name is ",student2.name);


// Shallow copy using the spread operator
const shallowCopyObject = { ...originalObject };

// Modify the nested object
shallowCopyObject.b.c = 99;

// console.log(originalObject);          // Outputs: { a: 1, b: { c: 99 } }
// console.log(shallowCopyObject);       // Outputs: { a: 1, b: { c: 99 } }



// Original array with nested array
const originalArray = [1, [2, 3]];

// Shallow copy using the spread operator
const shallowCopyArray = [...originalArray];


// console.log(originalArray);          // Outputs: [1, [99, 3]]
// console.log(shallowCopyArray);       // Outputs: [1, [99, 3]]

//prototype:-
// javascript has a special properties called prototype that is either null or refrences other object.

// Constructor function for creating Person objects
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Adding a method to the Person constructor's prototype
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

// Creating instances of the Person object
var person1 = new Person('John', 'Doe');
var person2 = new Person('Jane', 'Smith');

// Calling the method from the prototype on the instances
    // this.firstName = firstName;
    // this.lastName = lastName;

  
  // Adding a method to the Person constructor's prototype
  Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  
  // Creating instances of the Person object
  var person1 = new Person('John', 'Doe');
  var person2 = new Person('Jane', 'Smith');
  
  // Calling the method from the prototype on the instances
//   console.log(person1.getFullName()); // Output: "John Doe"
//   console.log(person2.getFullName()); // Output: "Jane Smith"


// example2 prototype

// let a={
//   name: "aijaj khan",
//   language: "Javascript",
//   run: ()=>{
//     console.log("self proto running..")
//   }
// }
// // console.log(a)

// let p={
//   run: ()=>{
//     console.log("proto running..")
//   }
// }
// p.__proto__={
//   language: "python"
// }
// a.__proto__= p
// a.run();
// console.log("language", a.language)



//scope example

  // let username = "rahul"
  // function userinfo(username) {
  //     username = "aijaj";
  //     console.log("kkkk", username)
  //     return username
  // }
  // console.log("username", username)  //rahul
  // userinfo(username)



// What is a first class function
// In Javascript, First-class functions means when functions in that language are treated like any other variable.
// For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function 
// and can be assigned as a value to a variable. 

//1. 
const handler = () => console.log("This is a click handler function");
// handler()

 //2// Assigning a function to a variable
// const square = function(x) {
//   return x * x;
// };

// // Passing a function as an argument
// function applyOperation(func, n) {
//   return func(n);
// }

// const result = applyOperation(square, 5);
// console.log(result);  // Output: 25



// What is a first order function
// First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

const firstOrder = () => console.log("I am a first order function!");
// firstOrder()

// function add(x, y) {
//   return x + y;
// }

// const result = add(3, 4);
// console.log(result);  // Output: 7


// What is a higher order function
// Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

// Higher-Order Functions:
function operate(operation, x, y) {
  return operation(x, y);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

const resultAdd = operate(add, 3, 4);
const resultMultiply = operate(multiply, 3, 4);
console.log(resultAdd);        // Output: 7
console.log(resultMultiply);   // Output: 12



// arrow function vs normally functional
// arrow function:-
// not a argument
// not make constructor
// not take self own this keyboard
// we can use single line

function add(a,b){
  console.log("arguments.............", arguments)
  return a+b;
}
// add(7,5)

// const add=(a, b)=>a+b;
// add(7,5)




//callback
// A function that takes a callback as an argument and invokes it
function fetchData(callback) {
    setTimeout(()=>{
        let data= "data fetching successfully!"  //4
        callback(data);		
    }, 3000)
}

function handleData (data) { 
    console.log("callback function: ", data);    //3
}

console.log("Start fetching data...");  //1
fetchData(handleData);
console.log("Fetching data in progress...");  //2



// Nested callbacks without proper indentation (callback hell)
function doTask1(callback1) {
  setTimeout(function () {
    console.log("Task 1 done");
    callback1();
  }, 1000);
}

function doTask2(callback2) {
  setTimeout(function () {
    console.log("Task 2 done");
    callback2();
  }, 1000);
}

function doTask3() {
  setTimeout(function () {
    console.log("Task 3 done");
  }, 1000);
}

// // Nested callback hell
// doTask1(function () {
//     doTask2(function () {
//         doTask3();
//     });
// });



//using promise:-
function doTask1() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Task 1 done");
      resolve();
    }, 1000);
  });
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Task 2 done");
      resolve();
    }, 1000);
  });
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Task 3 done");
      resolve();
    }, 1000);
  });
}

// Using async/await to avoid callback hell
// async function runTasks() {
//   await doTask1();
//   await doTask2();
//   await doTask3();
// }
// runTasks();


  //entities
// let cars=["ducati", "jaguar", "tvs", "swift"]
// let obj=cars.entries()
// for (var element of obj){
//   console.log("cars", element)
// }



//es6 let var
x=12
function userData(){
    var x = 2;
}
// console.log("aijaj", x)  //undefine



//////////////////////////////////////////////////////////////////////////
//array method:-
// toString()

let bikes=["r15", "apache", "yamaha", "honda", "bajaj", "tvs"]
// console.log(bikes.toString());
// console.log(bikes.join(""));
// console.log(bikes.join("-"));



// let cars=["ducati", "jaguar", "tvs", "swift"]
let bike=["r15", "apache", "yamaha", "honda", "bajaj", "tvs"]
let scooty=["jupitor", "honda", "hero"]

// let allvehicals=cars.concat(bike, scooty)
// console.log("allvehicals",allvehicals) //return new array


console.log("Start");
setTimeout(function () {
  console.log("Timeout callback");
}, 2000);

// fs.readFile("example.txt", "utf8", function (err, data) {
//   console.log("File Read Callback");
// });

console.log("End");



// Memoization
// Memoization is a way to cache a return value of a function based on its parameters
// Memoized Way
function memoizedAddTo80() {
  let cache = {}
  return function (n) { // closure to access cache obj
    if (n in cache) {
      return cache[n]
    } else {
      console.log('long time...')
      cache[n] = n + 80
      return cache[n]
    }
  }
}
const memoized = memoizedAddTo80()
console.log('1.', memoized(5))
console.log('2.', memoized(5))
console.log('3.', memoized(5))
console.log('4.', memoized(10))



// What is a pure function
// A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, 
// If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.

//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);

//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]



// var x,j,k;
// j=k=6; x=2; x==j*k; 
// console.log("khan", x); z


// (function() {
//   var a = b = 5;
// })();
// console.log(b);


const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length); 200


// function a(){
//   console.log("1")

//   function b(){
//     console.log("2")
//   }
//   console.log(3)
//   b()
// }
// console.log(4)


// a()
// console.log("5")


// infinited console
let a=true
let count=1
    setTimeout(()=>a=false,1000)
    while(a){
      console.log(count+=1)
    console.log('hello')
    }



express-session
    








