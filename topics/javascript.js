//promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Promise resolved with some data";
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Promise rejected with an error"));
    }
  }, 2000);
});

myPromise.then((result) => {
  console.log("Promise fulfilled:", result);
})
  .catch((error) => {
    console.error("Promise rejected:", error.message);
  });

// Promise.all
// Promise.any
// Promise.allSettled
// Promise.race
// Promise.resolve
// Promise.reject




// let p1= new Promise((resolve, rejected)=>{
//     setTimeout(() => {
//         resolve("promise1")
//     }, 3*1000);
// })

// let p2= new Promise((resolve, rejected)=>{
//     let smsdata="any single promise error show error"
//     setTimeout(() => {
//         resolve("smsdata")
//     }, 4*1000);
// })

// let p3= new Promise((resolve, rejected)=>{
//     setTimeout(() => {
//         rejected("promise3")
//     }, 4*1000);
// })

// let p4= new Promise((resolve, rejected)=>{
//     setTimeout(() => {
//         resolve("promise4")
//     }, 2*1000);
// })

// // any rejcted show rejected error not work resolve and resolve sequence
// Promise.any:- This method doesn't wait for all the promises to resolve. It is done when any one of the promises is settled.
// let total=0;
// Promise.all([p1,p2,p3,p4])
// .then((result)=>{
//     console.log("result", result)
//     for (let i=0; i<result.length; i++){
//         total+=i
//     }
//     console.log(`total is  ${total}`)
// })
// .catch((error)=>{
//     console.log(`error promise ${error}`)
// })


// //return each promise if reject then it also show resolve
// Promise.all([
//     p1.catch(error=>{return error}),
//     p2.catch(error=>{return error}),
//     p3.catch(error=>{return error}),
//     p4.catch(error=>{return error}),
// ])
// .then((result)=>{
//     for (var i of result){
//         total+=i
//     }
//     console.log(`total is  ${total}`)
// })


// all() method is settled with only resolved promises, so if any promise reutrns error then it won't work
//return each promise if reject then it also show resolve

// Promise.all([p1,p2,p3,p4])
// Promise.allSettled([p1,p2,p3,p4])
// allSettled() method waits for all promises regards of their state & returns Promise at the ends

//race() any any() same method returns a promise as soon as any of the promise return list provide which less time.
// Promise.allSettled([p1,p2,p3,p4])
// .then((result)=>{
//     // for (var i of result){
//     //     console.log("result", i)
//     //     total+= parseInt (i.count)
//     // }
//     // console.log(`total is  ${result}`)
//     console.log("result", result)
// })
// .catch((err)=>{
//     console.log("error", err)
// })



// other example
// //default promise
// function getPromise(URL) {
//     let promise = new Promise( async(resolve, reject)=> {
//         let response=await fetch(URL)
//         console.log("response", response.status)
//         if (response.status == 200) {
//           resolve(response);
//         } else {
//           reject("There is an Error!");
//         }
//     });
//     return promise;
//   }


// let loading = true;
// loading && console.log('Loading...');

// // Gatting Promise
// const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
// promise = getPromise(ALL_POKEMONS_URL);

// promise.finally(() => {
//     loading = false;
//     console.log(`Promise Settled and loading is ${loading}`);
// }).then((result) => {
//     console.log("result", result);
// }).catch((error) => {
//     console.log(error)
// });




// //callback
// // A function that takes a callback as an argument and invokes it
// function fetchData(callback) {
//     setTimeout(()=>{
//         let data= "data fetching successfully!"  //4
//         callback(data);		
//     }, 3000)
// }

// function handleData (data) { 
//     console.log("callback function: ", data);    //3
// }

// console.log("Start fetching data...");  //1
// fetchData(handleData);
// console.log("Fetching data in progress...");  //2



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




//prototype:-
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
//   console.log(person1.getFullName()); // Output: "John Doe"
//   console.log(person2.getFullName()); // Output: "Jane Smith"




// call vs apply vs bind
// call apply and bind method use access only once call other function property not repeating code
// Call and apply are almost same except the way arguments are passed
// call as single object and apply as a array arguments
// bind method use take variable function define;

//4 call apply and bind
// case0;
var student1 = {
  name: "aijaj",
  displayName(country, state) {                                        //repeating code
    //    console.log(`my name is ${this.name}  and my country  ${country} ${state}`)
  }
}

var student2 = {
  name: "rahul",
  displayName(country) {                                      //repeating code
    console.log(`my name is ${this.name}  and my country  ${country}  ${state}`)
  }
}
// student1.displayName("India", "Delhi")

// case1:
var student2 = {
  name: "rahul",
}
// student1.displayName.call(student2, "India", "haryana")   // use call method 


//case 2 using apply method use array as a argument
var student2 = {
  name: "kishan",
}
// student1.displayName.apply(student2, ["India", "Mumbai"])   // use apply method second argument array format only  both immediately call

//case 3 use bind method take variable function
var student2 = {
  name: "rahul",
}
// const studentInfo= student1.displayName.bind(student2, "India", "Chennai") ;  //use bind and take a variable fucntion
// studentInfo()


//example 2
// //call apply and bind
// // case1
// let name={
//     firstname: "adil",
//     lastname: "khan",
//     printFullname: function(){
//         console.log(this.firstname + this.lastname)
//     }
// } 

// name.printFullname()
// let name2={
//     firstname: "raj",
//     lastname: "malhotra"
// }
// name.printFullname.call(name2)

// case2
let name = {
  firstname: "adil",
  lastname: "khan"
}
let printFullname = function (homeTown, state) {
  // console.log(this.firstname + " " + this.lastname + " from " + homeTown +", " + state )
}
printFullname.call(name, "bawana", "delhi")

let name2 = {
  firstname: "Mahenra sing",
  lastname: "dhoni"
}

//function borrow
// printFullname.call(name2, "bhagalpur", "bihar")


//apply method same method just array format data pass second arg
// printFullname.apply(name2, ["bhagalpur", "bihar"])

//bind method same method call store a variable a function
let userInf = printFullname.bind(name2, "bhagalpur", "bihar")
// console.log("userInf", userInf)   //invoke after letter
// userInf()  





//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
// console.log("pure", impureAddNumber(6)); // returns 1
// console.log("pure", impureAddNumber(6)); // returns 1
// console.log("numberArray", numberArray); // returns [6]

//pure
const pureAddNumber = (number) => (argNumberArray) => argNumberArray.concat([number]);
// console.log("pureAddNumber", pureAddNumber(7)(numberArray)); // returns [6, 7]
// console.log("pureAddNumber", pureAddNumber(7)(numberArray)); // returns [6, 7]
// console.log("numberArray", numberArray); // returns [6]


// console.log("aijaj",eval("1+3"));









// const arrayOfOddNumbers = [1, 3, 5];
// arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length); 200




// let p1= new Promise((resolve, rejected)=>{
//     resolve("a")
// })

// let p2= new Promise((resolve, rejected)=>{
//     let smsdata="b"
//     setTimeout(() => {
//         resolve(smsdata)
//     }, 4*1000);
// })

// let p3= new Promise((resolve, rejected)=>{
//     setTimeout(() => {
//         resolve("c")
//     }, 1*1000);
// })

// let p4= new Promise((resolve, rejected)=>{
//     resolve("d")
// })

// Promise.all([p1,p2,p3,p4])
// .then((result)=>{
//     console.log(`total is  ${result}`)
// })
// .catch((error)=>{
//     console.log(`error promise ${error}`)
// })





//3 call apply and bind
// case0;
var student1 = {
  name: "aijaj",
  displayName(country, state) {                                        //repeating code
    console.log(`my name is ${this.name}  and my country  ${country} ${state}`)
  }
}

var student2 = {
  name: "rahul",
  displayName(country) {                                      //repeating code
    console.log(`my name is ${this.name}  and my country  ${country}  ${state}`)
  }
}
// student1.displayName("India", "Delhi")

// case1:
var student2 = {
  name: "rahul",
}
// student1.displayName.call(student2, "India", "haryana")   // use call method 


//case 2 using apply method use array as a argument
var student2 = {
  name: "kishan",
}
// student1.displayName.apply(student2, ["India", "Mumbai"])   // use apply method array format only  both immediately call

//case 3 use bind method take variable function
var student2 = {
  name: "rahul",
}
// const studentInfo= student1.displayName.bind(student2, "India", "Chennai") ;  //use bind and take a variable fucntion
// studentInfo()









const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length); 200






//scope example
var username = "rahul"
function userinfo() {
  username = "aijaj";
}

// console.log("username", username)
userinfo()




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



// Garbage Collection