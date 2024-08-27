//1. clouser    
// A closure is the combination of a function and the lexical environment within which that function was declared. 
// It is an inner function that has access to the outer or enclosing function’s variables.
function makeAdder(num) {

  function add (x) {
    return num + x;
  };
  return add
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12



//2.  call vs apply vs bind
// when we need object and function integration or intract to each other that time we can use call bind and apply
// Call and apply are almost same except the way second arguments are passed
// call as single object and apply as a array second arguments 
// bind method use take variable function define;
// call apply and bind method use access only once define other function property not repeating code

var student = { 
  firstName: "John", 
  lastName: "Rodson" ,
  age: 25
};
var teacher = { 
  firstName: "Jimmy", 
  lastName: "Baily" ,
  age: 35
};

function invite(greeting1, greeting2) {
  console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`)
  //return `greeting1 ${this.firstName} ${this.lastName} ${greeting2}`
}

// Call: The call() method invokes a function with a given this value and arguments provided one by one
invite.call(student, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(teacher, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?


// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
invite.apply(student, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(teacher, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?


// bind: returns a new function, allowing you to pass any number of arguments
var inviteEmployee1 = invite.bind(student);
var inviteEmployee2 = invite.bind(teacher);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?



//3 curry when we get all three argument then it will execute else no execute or delete part function that time we use curry
//curry same clousers example different code write way on single line multiple arguments
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



//4. call by value and call by refrence
// when we copy of object it its copy of memeory location no value (call by refrence)
// when we copy of variable then its copy of value  (call by value)

let x= "rahul";
let y=x;
y="aman"
// console.log("x", x)  //rahul   //call by value
// console.log("y", y)  //aman

// let originalObj= {
//   name: "aijaj",
//   city: "New York"
// }

let copyObj= originalObj;
copyObj.city="benglore"
// console.log("originalObj", originalObj)  // updated  object  (copy of memeory it effect of original object) 
// console.log("copyObj", copyObj) //updated object (copy of memeory ) //call by refrence

//so there is problem to object copy now going to solution we used shallow copy and deep copy

//shallo copy
// A shallow copy of an object is a copy of the object’s structure, but not the elements or value. 
// This means that changes copy objects that will not affect the original object.
let originalObj= {
  city: "New York"
}

// let shallowCopy = Object.assign({}, originalObj);  1. using Object.assign
// shallowCopy.city = "mumbai" ;
// console.log(originalObj.city); // New York: )
// console.log(shallowCopy.city); // mumbai: )

let originalObj2= {
  city: "New York"
}
var shallowCopy = { ...originalObj2 } ;   // 2. using spread operator (…) 
// shallowCopy.shallowCopy = "jaipur" ;
// console.log(originalObj2.city); // New York: )
// console.log(shallowCopy.city); // jaipur: )


let original = {
  name: "Alice",
  address: {
      state: "Maharastra",
      city: "Pune"
  }
};
var shallowCopy = { ...original } ;   //spread operator (…)    
shallowCopy.address.city = "mumbai" ;
// console.log(original.address.city);      // mumbai
// console.log(shallowCopy.address.city);   // mumbai

// so this is effected original obj when we use nested object not copy shallow copy then we use // deep copy
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = mumbai;
// console.log(original.address.city);      // pune
// console.log(deepCopy.address.city);   // mumbai 


let original2 = {
  name: "Alice",
  address: {
      state: "Maharastra",
      city: "Pune"
  },
  getData: function(){
    return "api is calling!"
  }
};


let deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.address.city="gurgaon"
// console.log(original2);      // object
// console.log(deepCopy);   // vanish or not show getData function from obj.


//so this is method or function not working deep copy of object so solution is we use lodash library solved this problem.
let copyobject = _.cloneDeep(original2)
copyobject.address.city="noida"
// console.log(original2);      // Pune
// console.log(copyobject);   // noida


// 5. scope example
  // let username = "rahul"
  // function userinfo(username) {
  //     username = "aijaj";
  //     console.log("kkkk", username)
  //     return username
  // }
  // console.log("username", username)  //rahul
  // userinfo(username)
  
//   var name="aijaj"
// function makeAdder() {
    
//   console.log(name)
//   let name="rahul"
// }
// makeAdder()



//6.  What is a first class function
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



//7.  What is a first order function
// First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
const firstOrder = () => console.log("I am a first order function!");
// firstOrder()

// function add(x, y) {
//   return x + y;
// }
// const result = add(3, 4);
// console.log(result);  // Output: 7


//8.  What is a higher order function
// Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
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



//9.  arrow function vs normally functional
// not a argument
// not make constructor
// not take self own this keyboard
// we can use single line synctax

function add(a,b){
  console.log("arguments.............", arguments)
  return a+b;
}
// add(7,5)

// const add=(a, b)=>a+b;
// add(7,5)



// 10 callback
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



//11  Nested callbacks without proper indentation (callback hell)
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



// 1. basic promise
const myPromise = new Promise((resolve, reject) => {
  let success = true; 
  if (success) {
      resolve("Promise fulfilled!");
  } else {
      reject("Promise rejected!");
  }
});

myPromise.then((message) => {
      console.log(message); // Output: "Promise fulfilled!" if success is true
}).catch((error) => {
    console.error(error); // Output: "Promise rejected!" if success is false
});


// 2. chaining promise
// const firstPromiseData = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 1000);
// });
firstPromiseData
  .then((result) => {
      console.log(result); // Output: 10
      return result * 2;
  })
  .then((result) => {
      console.log(result); // Output: 20
      return result * 2;
  })
  .then((result) => {
      console.log(result); // Output: 40
  });


  // 3. Promise.all (Handling Multiple Promises) if any of promise rejected then its rejected promised.
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, "foo");
// });
// // const promise4 = Promise.reject("error handling");

// Promise.all([promise1, promise2, promise3, promise4])
// .then((values) => {
//     console.log(values);  // Output: [3, 42, "foo"] if promise4 remove then  after 1 second
// })                         // Output: error handling // any of promise rejected then its rejected promised.
// .catch((err)=>{
//     console.log(err)
// })


// // 4. Promise.race (First Promise to Resolve or Reject)
// const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "one"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "two"));
// const promise3 = new Promise((resolve, reject) => setTimeout(reject, 200, "error handling"));

// Promise.race([promise1, promise2, promise3])
// .then((value) => {
//     console.log(value); // Output: "two" (because promise2 resolves first)
// })
// .catch((error) => {
//     console.log(error);
// })



// // 5. Promise.allSettled (Wait for All Promises to Settle Eather resolved or rejected)
// const promise1 = Promise.resolve("Success");
// const promise2 = Promise.reject("Error");
// const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, "Another Success"));

// Promise.allSettled([promise1, promise2, promise3])
// .then((results) => {
//     console.log(results) //[{ status: 'fulfilled', value: 'Success' },{ status: 'rejected', reason: 'Error' },{ status: 'fulfilled', value: 'Another Success' }]
// });



// 6. Promise.any (First Fulfilled Promise)
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 100, "Error"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "Success"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 300, "Another Success"));

Promise.any([promise1, promise2, promise3])
.then((value) => {
    console.log(value); // Output: "Success" (first fulfilled promise)
}).catch((error) => {
    console.error(error); // Will only run if all promises reject
});




//12. using promise:-
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



//13 Memoization
// Memoization is the optimization tachnique that can we used to reduce 
//time-consuming calculation by saving previous input to something called cache and returning the result from it.

let sum=0;
function calculate(n){
  for (let i=0; i<=n; i++){
    sum+=i
  }
  return sum;
}


const memoized=(fun)=>{
  let cache={};
  return function(...args){
    let n= args[0]
    if (n in cache){
      console.log("caching......")
      return cache[n]; 
    }
    else{
      console.log("calculation first time..")
      let result= fun(n)
      cache[n]= result;
      return cache
    }
  }
}

console.time();
let ifficient= memoized(calculate)
console.log(ifficient(5));  //first time function called   
console.timeEnd();

console.time();
console.log(ifficient(5))    //second time function called   caching 20x fast check time
console.timeEnd();



//14 What is a pure function
// A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, 
// If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.
//pure function
function add(a, b) {
  return a + b;
}
// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5


//15 Impure function
let counter = 0;
function increment() {
    counter += 1;
    return counter;
}
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3


//16 prototype:-
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