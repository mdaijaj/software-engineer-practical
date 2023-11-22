// callback function
// function
// example1
function greet(name, callback) {
   callback();
   console.log('Hi' + ' ' + name);
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// // passing function as an argument
// greet('Peter', callMe());


// example2
//  program that shows the delay in execution
// example1
// function greet() {
//    console.log('Hello world');
// }

function sayName(name) {
   console.log('Hello' + ' ' + name);
}

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// example3:
function greeting(name) {
   alert(`Hello, ${name}`);
}
 // function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
// }
// processUserInput(greeting);





//es6
//arrow function
// You don’t need the function keyword, the return keyword, and the curly brackets.
// Arrow functions do not have their own this. take other this
// Arrow functions are not hoisted. They must be defined before they are used.
// argument is not allow
// constructor is not allow 

let ab= 20;
let ba=10;
const sum= ()=> ab+ba;
// console.log("sum", sum())




// Scoping With “Let” and “Const” Keywords
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log("scope: ", i);
    }, 1000);
}

// const arr=[0,1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i < arr.length; i++) {
//     setTimeout(function() {
//         // console.log(i)
//         console.log(arr[i]);
//     }, 1000);
// }



// 3. Template Literals
const abs = 1;
const base = 'b';
// // ES5
// const cat = 'value of a is ' + a + ' and value of b is ' + b;
// // ES6
// const c = `value of a is ${abs} and value of b is ${base}`;




// 4. Enhanced Object Literals
//es5
function details(make, model, value){
   return {
        make: make,
        model: model,
        value: value
   }
}

const detail=( make, model, value)=>{
   return{
       make,
       model,
       value
   }
}


// 5. Destructuring
let names, basename, rest;
[names, basename] = [10, 20];
// console.log(names);  // output: 10
// console.log(basename); // output: 20



const x = [1, 2, 3, 4, 5];
const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2


// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;




// 6. Default Parameter
function multiply(a, b = 1) {
   return a * b;
 }
 multiply(5, 2); // 10
 multiply(5); // 5
 multiply(5, undefined); // 5

 
 // rest operator   combine 
 [names, basename, ...rest] = [10, 20, 30, 40, 50];
 // console.log(rest);
 // expected output: Array [30,40,50]


 //rest operator like combine 
 function addNumber(a,b,c, ...other){
    console.log("other", other)
    return a+b+c;
 }
 const restOper=addNumber(4,5,7,8,9)
//  console.log("restOper", restOper)



//   7. Spread Operators  divided
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];


const event1= [2,4,6,8,10]
const event2= [12,14,16,18,20]


//one array inside two array
// arr=[event1, event2]
//all data in one array
// const arr= [...event1, ...event2]
// console.log(arr)
// console.log(numbersOne, numbersTwo)


const myVehicle = {
   brand: 'Ford',
   model: 'Mustang',
   color: 'red'
 }
  const updateMyVehicle = {
   type: 'car',
   year: 2021,
   color: 'yellow'
 }

//object spread operator
const obj1={
   username:"king khan"
}

const obj2={
   email:"kingkhan@gmail.com"
}


//one object inside two objects
const userInf={
   obj1, obj2
}


// all object in one object
const userInf1={
   ...obj1, ...obj2
}
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
// console.log("myUpdatedVehicle", myUpdatedVehicle)




// 8  Classes in ES6 oops
 function Dog(name){
   this.name= name;
 }
 var fido= new Dog('fido')
//   console.log(fido.name) //fido




//   Classes
//   class Dog{
//     constructor(name){
//         this.name= name;
//     }
//   }




//inheritance
 class Car {
 constructor(brand) {
   this.carname = brand;
 }
 present() {
   return 'I have a ' + this.carname;
 }
}


class Model extends Car {
 constructor(brand, mod) {
   super(brand);
   this.model = mod;
 }
 show() {
   return this.present() + ', it is a ' + this.model;
 }
}


let myCar = new Model("Ford", "Mustang");
myCar.show();


//method:-
function Dog(name){
   this.name= name;
}


Dog.prototype.sayHI= function(){
   return "woof"
}


// // 9. Promises
// const myPromise= new Promise((resolve, reject)=>{
//    console.log("aijaj", Math.random() * 100)
//    if(Math.random() * 100 <= 70){
//        resolve("ya i am done")
//    }
//    reject(new Error("it may be failed any time.."))
// })
// // console.log("myPromise", myPromise)


let promise = new Promise(function(resolve, reject) {
   setTimeout(() => resolve("done!"), 1000);
 });
  // resolve runs the first function in .then
 promise.then(
   result => console.log(result), // shows "done!" after 1 second
   error => console.log(error) // doesn't run
 );



// hoisting:-
xyz()
function xyz(){
   var abc= "hello js"
   console.log(abc)
}

host=5;
// console.log("aijaj", host)
var host;  //its is working hoisting


// abcd=5;
// console.log("hosting", abcd)
// let abcd;  //its is not working hoisting
// console.log("ram", abcd)



//oops ..........................object oriented programing language  ..............................................................................
// Object Oriented mechanisms supported by JavaScript.
//1 Object
//2 Classes
//3 Encapsulation
//4 Inheritance


// Let’s dive into the details of each one of them and see how they are implemented in JavaScript.


// 1. Object–
// An Object is a unique entity that contains properties and methods. For example “car” is a real life
// Object, which has some characteristics like color, type, model, horsepower and performs certain
// actions like drive. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions
// are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an
// Object whether it is a function, array, or string.


// Note: A Method in javascript is a property of an object whose value is a function.
// Object can be created in two ways in JavaScript:
//1 Object Literal
//2 Object Constructor:-


// Object Literal Defining
let person = {
   first_name:'Mukul',
   last_name: 'Latiyan',
   //method
   getFunction : function(){
       return (`The name of the person is
         ${person.first_name} ${person.last_name}`)
   },
   //object within object
   phone_number : {
       mobile:'12345',
       landline:'6789'
   }
}
// console.log(person.getFunction());
// console.log(person.phone_number.landline);




//2 Object Constructor:-
//using a constructor
function persons(first_name,last_name){
   this.first_name = first_name;
   this.last_name = last_name;
}
//creating new instances of person object
let person1 = new persons('Mukul','Latiyan');
let person2 = new persons('Rahul','Avasthi');
 //  console.log(person1.first_name);
//  console.log(`${person2.first_name} ${person2.last_name}`);



// 2. Classes–
// Classes are blueprint of an Object. A class can have many Objects because class is a template while Object are instances
// of the class.
// there are no classes in JavaScript we have only Object. To be more precise,
// JavaScript is a prototype based Object Oriented Language,
// which means it doesn’t have classes, rather it defines behaviors using a constructor function and then
// reuse it using the prototype.


// Note: Even the classes provided by ECMA2015 are objects.
// Defining class using es6


// example traditional way of defining an Object and simulate them as classes.
class Vehicle {
   constructor(name, maker, engine) {
     this.name = name;
     this.maker =  maker;
     this.engine = engine;
   }
   getDetails(){
       return (`The name of the bike is ${this.name}.`)
   }
 }
 // Making object with the help of the constructor
 let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
 let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
 
//   console.log(bike1.name)userInf1;    // Hayabusa
//   console.log(bike2.maker);   // Kawasaki
//   console.log(bike1.getDetails());




 // Defining class in a Traditional Way.
   // function Vehicle(name,maker,engine){
   //     this.name = name,
   //     this.maker = maker,
   //     this.engine = engine
   // };
  
   // Vehicle.prototype.getDetails = function(){
   //     console.log('The name of the bike is '+ this.name);
   // }
  
   // let bike3 = new Vehicle('Hayabusa','Suzuki','1340cc');
   // let bike4 = new Vehicle('Ninja','Kawasaki','998cc');
  
   // console.log(bike3.name);
   // console.log(bike4.maker);
   // console.log(bike3.getDetails());




// 3. Encapsulation –
// The process of wrapping properties and functions within a single unit is known as encapsulation.
// Let’s understand encapsulation with an example.

//encapsulation example
class personB{
   constructor(name,id){
       this.name = name;
       this.id = id;
   }
   add_Address(add){ 
       this.add = add;
   }
   getDetails(){
       console.log(`Name is ${this.name},Address is: ${this.add}`);
   }
}
let person3 = new personB('Mukul',21);  //incapsulation
// person3.add_Address('Delhi');
// person3.getDetails();



// Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing essential features hiding the background detail.


// Abstraction example
function personA(fname,lname){
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }

    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
let person4 = new personA('Mukul','Latiyan');
// console.log(person4.firstname);
// console.log(person4.getDetails_noaccess);
// console.log(person4.getDetails_access());



// 4. Inheritance –
// It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP
// languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain
// features (property and methods) of one object can be reused by other Objects.


//Inheritance example
   class personC{
       //constructure
       constructor(name){
           this.name = name;
       }
       //method to return the string
       toString(){
           return (`Name of person: ${this.name}`);
       }
   }
   class student extends personC{
       constructor(name,id){
           //super keyword for calling the above class constructor
           super(name);
           this.id = id;
       }
       toString(){
           return (`${super.toString()},Student ID: ${this.id}`);
       }
   }
   // let student1 = new student('Mukul',22);
   // console.log(student1.toString());




//6 inheritance in js
class Employee{
    constructor(givenName, givenExp, givenDivision){
        this.name= givenName
        this.experience= givenExp
        this.givenDivision= givenDivision
    }
    slogan(){
        return `I am ${this.name} and my company is the best`
    }
    joiningYear(){
        return 2022 - this.experience
    }
    static add(a,b){
        return a + b
    }
 }
 
 class Programmer extends Employee{
    constructor(givenName, givenExp, givenDivision, language, github){
        super(givenName, givenExp, givenDivision, language)   //super means that previous class constructure use
        this.language= language
        this.github= github
    }
    favouriteLanguage(){   //if use static not use this keyboard
        if(this.language=="python"){
            return "pyton"
        }else{
            return "javascript"
        }
    }
    static multiply(a,b){
        return a * b
    }
 }
 // console.log(Employee.add(4,8))
 const aijaj= new Programmer("aijaj", 2, "nodejs", "javascirpt", "mdaijaj")
 // console.log("aijaj", aijaj)
 // console.log("aijaj", aijaj.favouriteLanguage())
 // console.log("aijaj", Programmer.multiply(4,8))
 




//5 prototype concept
//  Each and every function in JavaScript automatically has a property called prototype.
//  Every object that's created by a certain constructor function will get access to all the
// methods and properties that we define on the constructors prototype property.
//  Each object created by that constructor function
//  Each object created by this constructor function will now get access to all the
// methods and properties of this prototype property
//  Vivek and Arpit does not have calcAge function in them but still they can access it
// because of the prototypal inheritance.
//  This keyword is set to the object calling the method.
//  Prototype of Vivek and Arpit is Person.prototype(prototype property of Person)
//  Each object has special property called __proto__




// meaning
// where do you start and made
// Object literal : Object.prototype se start karenga
let obj={
   name: "aijaj",
   channel:"high point",
   address: "delhi",
}
// console.log(obj)
//_proto_


//constructor
// function obj2(givenName){
//     this.name= givenName
// }

// obj.prototype.getName()


// let obj2= new Obj("aijaj")
// console.log(obj2)



//7 binding this keybard
//1 alone this refers to the global object
//2 in global function, this refers to the global object
//3 in a method refers to the owner object
//4 in a function, in strict mode, this is undefined




//8 clousers scope
//  A function along with its lexical scope bundled together is a closure.
//  A closure gives you access to an outer function’s scope from an inner function
// In JavaScript, closures are created every time a function is created, at function creation time.
// Lexical scoping


function init() {
 var name = 'Mozilla'; // name is a local variable created by init
 function displayName() {
   // displayName() is the inner function, a closure
   console.log(name); // use variable declared in the parent function
 }
 displayName();
}
init();



//example2
//function inside return function that is call clouser
function Addition(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

// let res=Addition(2);
// let data= res(3)
// let data1= data(5);
// console.log("data1", data1)


//curry  same clousers example different code write way
// function Addition1(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// // }
// let res=Addition1(5)(7)(5)
// console.log("res", res)


// exm2
let userObj={
    name: "adilkhan",
    address: "delhi"
}

function userInfo(obj){
    return function(userdata){
        return obj[userdata]
    }
}

let resp= userInfo(userObj)
console.log("curry", resp("address"))





// array function:-
// reduce:-


// Reducing an array meaning performing a concrete accumulative operation on its items to
// calculate a result value.






// const numbers = [2, 4, 6];
// const sum = numbers.reduce(function(sum, number) {
//     console.log("aijaj", sum, number)
//   const updatedSum = sum + number;
//   return updatedSum;
// }, 0);
// sum; // 12






// function sum(x, y, z) {
//     return x + y + z;
//   }
//   const newnumber = [1, 2, 3];
 //   console.log(sum(...newnumber));
//   // expected output: 6
 //   console.log(sum.apply(null, newnumber));


// let n= 2+3+4+"5"
// n="1"+3
// console.log(n)










//promise
let myPromise1 = new Promise((resolve, reject)=>{
  let carName= "audi";
  if(carName=="audi"){
    resolve('successfully');
  }
  else{
    reject('rejected');
  }
})
myPromise1.then((msg) => {
  console.log("then block -->", msg)
})
.catch((msg) =>{
  console.log("catch block -->", msg)
});




// callback
const userLeft= true;
const userwatchingCatMeme= false;


// function watchTutorialCallback(errorCallback, callback){
//   if(userLeft){
//     callback({
//       name: "User Left",
//       message: ":("
//     })
//   }
//   else if(userwatchingCatMeme){
//     callback({
//       name: "user watch cache meme",
//       message: "webdev simplified < cat"
//     })
//   }
//   else{
//     errorCallback("thumps up and subscribe")
//   }
// }


// watchTutorialCallback((message)=>{
//   console.log("success", message)
// }, (error)=>{
//   console.log(error.name ,error.message)
// })






//promise
// const user2Left= true;
// const userwatchingCatMeme2= false;


// function watchTutorialPromise(){
//   return new Promise((resolve, reject)=>{
//     if(user2Left){
//       resolve({
//         name: "User Left",
//         message: ":("
//       })
//     }
//     else if(userwatchingCatMeme2){
//       resolve({
//         name: "user watch cache meme",
//         message: "webdev simplified < cat"
//       })
//     }
//     else{
//       reject("thumps up and subscribe")
//     }
//   })
// }


// watchTutorialPromise()
// .then((message)=>{
//   console.log("success", message)
// })
// .catch((error)=>{
//   console.log(error.name ,error.message)
// })

//9 iife immediately invonked fucntion expression
//  Sometimes in JavaScript, we need a function that is only executed once. And then
// never again..
//  So basically a function that disappears right after it's called once.
//  These are immediately invoked




// annymial function
//11 currying


// 12 array function
// split   return remove value 
// slice selected get item


// 13strict mode

// nodejs
// callback
// next()
// middleware
// promise
// evenloop



// Api fetch:-

// <!DOCTYPE html>
// <html lang="en">
// <head>
//    <meta charset="UTF-8">
//    <meta http-equiv="X-UA-Compatible" content="IE=edge">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document</title>


//    <style>
//        .main{
//            width: 500px;
//            height: auto;
//            background-color: skyblue;
//            margin: auto;
//            text-align: center;
//            padding: 10px;
//        }
//    </style>


// </head>


// <body>
//    <div class="main">
//        <h1>User Login </h1>
//        <label for="fname">username:</label><br>
//        <input type="text" name="" id="username"><br><br>


//        <label for="fname">page number:</label><br>
//        <input type="number" id="page"> <br><br>
//        <button type="button" onclick="submitButton()">Login</button>


//        <div>
//            <h2>All Movie Name LIst</h2>
//            <p id="list"></p>
//        </div>
//    </div>


 
//    <script>
//        async function submitButton(){
//           let username= document.getElementById('username').value
//           let page=document.getElementById('page').value
//           if(!username){
//               alert("please input username!")
//           }else{
//            const url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cd27e7d96b1871bb1f0f6972616cf43a&page="+page
//            let mainDiv= document.getElementById('list')




//            fetch(url)
//            .then(res=>res.json())
//            .then(user=>{
//                console.log(user.results)
//                user.results.map(element => {
//                    console.log(element)
//                    let userElement= document.createElement('p')
//                   userElement.innerHTML=


//                    `<ul>
//                        ${element.original_title} 
//                    </ul> `
//                    mainDiv.append(userElement)
//                })
//            })




           // // using async await
           // let response=await fetch(url)
           // let data= await response.json()
           // console.log("aijaj", data)
           // data.results.map(element => {
           //     console.log(element)
           //     let userElement= document.createElement('p')
           //     userElement.innerHTML=


           //     `<ul>
           //         ${element.original_title} 
           //     </ul> `
           //     mainDiv.append(userElement)
           // })
//           }
  
         
//        }
      
//    </script>
// </body>
// </html>



// Different input type get data :-



// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //    <meta charset="UTF-8">
// //    <meta http-equiv="X-UA-Compatible" content="IE=edge">
// //    <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //    <title>Document</title>
// // </head>
// // <body>
// //    <h1>User Information</h1>
// //    <label>User Name</label>
// //    <input type="text" id="name" placeholder="name"><br><br>
  
// //    <label>Gender:</label>
// //    <input type="radio" name="Gender" value="Male">Male
// //    <input type="radio" name="Gender" value="Female">Female
// //    <input type="radio" name="Gender" value="Others">Others<br><br>


// //    <label>City</label>
// //    <select id="city">
// //        <option>Select</option>
// //        <option>Delhi</option>
// //        <option>Banglore</option>
// //    </select><br><br>


// //    <label>Email</label>
// //    <input type="email" id="email"><br><br>


// //    <button type="button" class="submit" onclick="submitButton()">submit</button><br><br>


// //    <p1 id="p1">Name is : </p1><br>
// //    <p1 id="p2">Email is : </p1><br>
// //    <p1 id="p3">Gender is : </p1><br>
// //    <p1 id="p4">City is : </p1><br>




// //    <script>
// //        function submitButton(){
// //            let name=document.getElementById('name').value
// //            let email=document.getElementById('email').value
// //            let gender=document.querySelector('input[name="Gender"]:checked').value;
// //            let city=document.getElementById('city').value


// //            console.log("user", name, email, gender, city)


// //            document.getElementById('p1').innerText=name
// //            document.getElementById('p2').innerText=email
// //            document.getElementById('p3').innerText=gender
// //            document.getElementById('p4').innerText=city
// //        }
// //        submitButton()


// //    </script>
// // </body>
// // </html>



// // Todo app:-
						
// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //    <meta charset="UTF-8">
// //    <meta http-equiv="X-UA-Compatible" content="IE=edge">
// //    <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //    <title>Document</title>
// // </head>
// // <body>
// //    <div class="heading" id="mydiv">
// //        <h1> My Todo List </h1>
// //        <input type="text" id="userInput" placeholder="Title..">
// //        <button onclick="newElement()" class="addBtn">Add</button>
// //    </div>


// //    <ul id="myul">
// //        <li class="checked">Meritation </li>
// //        <!-- <li>Problem solve 5</li> -->
// //    </ul>




// //    <script>
// //        //create tag and access add
// //        let myNodeList=document.getElementsByTagName('Li')
// //        for(var i=0;i<myNodeList.length;i++){
// //            var span = document.createElement("SPAN");
// //            var textList = document.createTextNode("\u00D7");
// //            span.className = "close";
// //            span.appendChild(textList);
// //            myNodeList[i].appendChild(span)
// //        }


// //        // add closed button and hide the current list of item
// //        var close = document.getElementsByClassName("close");
// //        for(var j=0; j<close.length; j++){
// //            console.log("j", close[j])
// //            close[j].onclick = function() {
// //                var div = this.parentElement;
// //                div.style.display = "none";
// //            }
// //        }


// //        // //check list done task
// //        // var list = document.querySelector('ul');
// //        // list.addEventListener('click', function(ev) {
// //        //     console.log("ev", ev)
// //        // if (ev.target.tagName === 'LI') {
// //        //     ev.target.classList.toggle('checked');
// //        // }
// //        // }, false);




//        //add list of task
//        function newElement() {
//            var li = document.createElement("li");
//            var inputValue = document.getElementById("userInput").value;
//            var t = document.createTextNode(inputValue);
//            li.appendChild(t);
//            if (inputValue === '') {
//                alert("You must write something!");
//            } else {
//                document.getElementById("myul").appendChild(li);
//            }


//            var span = document.createElement("SPAN");
//            var txt = document.createTextNode("\u00D7");
//            span.className = "close";
//            span.appendChild(txt);
//            li.appendChild(span);


//            //create a close button here
//            for (i = 0; i < close.length; i++) {
//                close[i].onclick = function() {
//                var div = this.parentElement;
//                div.style.display = "none";
//                }
//            }
//        }


//    </script>
// </body>
// </html>




// const obj1={
//  name: "aijaj",
//  email: "khan"
// }   

// const obj2={
//  name: "aijaj",
//  email: "khan"
// }

// console.log("double",  obj1== obj2 )
// console.log("triple",  obj1=== obj2 )


// //let vs var scope confusion
// function lexi(){
//    for(var i=0; i<=5; i++){  //let 1 2 3 4 5 6
      
//        setTimeout(() => {
//            console.log(i)  // var condtion 6 6 6 6 6 6
//        }, i *1000);
//    }
//    console.log("namaste js")
// }
// lexi()


// let user= ()=>{
//     console.log("api is working...")  
// }

// first class function:- first class citizens
// the ability of the value pass inside of the function get out of the function return out of the function use them to assign as a function that is called first class function


// Exception Handling
// throw statement
// try / catch / finally
// Utilizing Error Objects


// function borrowing
// Default Parameter rest Parameter


// recursion

// explicit binding
// call bind and apply

// asynchorouse js
// callback
// promise
// callback hell
// async await
// setTimeout
// setInterval


// hof
// a fucntion which take another function as a argument or return a function from its that is called high order function.
function xyz(){
    console.log("good morning")
}
function hoc(xyz){     // y is the high order function
    xyz();           //xyz is tha callback function   
}  
xyz()


// let radius=[2,3,5,4]
// const calculateArea= (radius)=>{
//     let output=[];
//     for(var i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }
// // console.log("calculateArea", calculateArea(radius))


// // calculateCircumference
// let radius2=[2,3,5,4]
// const calculateCircumference= (radius)=>{
//     let output=[];
//     for(var i=0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }
// // console.log("calculateCircumference", calculateCircumference(radius))


// let radius3=[2,3,5,4]
// const calculatediameter= (radius)=>{
//     let output=[];
//     for(var i=0; i<radius.length; i++){
//         output.push(2 * radius[i])
//     }
//     return output
// }
// // console.log("calculatediameter", calculatediameter(radius))



//final
let radius=[2,3,5,4]
const diameter= (radius)=>{
    return 2 * radius
}

const Circumference= (radius)=>{
    return 2 * Math.PI * radius
}

const area= (radius)=>{
    return  Math.PI * radius * radius
}

const calculate= (radius, logic)=>{
    let output=[];
    for(var i=0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}
// console.log("caculates", calculate(radius, diameter ))



// memory management
// memory life cycle
// garbage collection



// use this keyboard
let userDetails={
    name: "aijaj",
    age: 26,
    address: "Delhi",
    designation: "software Engineer",
    printDetails: function(){
        console.log("this", this)
    }
}

userDetails.printDetails();

