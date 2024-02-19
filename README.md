# software-engineer-notes
all infomation related


// function print() {
//   setTimeout(function() {
//     console.log("print inside setTimeout ");  4
//   }, 4000);
//   console.log("print");  2
// }

// setTimeout(function() {
//   console.log("inside setTimeout");   3
// }, 1000);

// console.log("outside setTimeout");    1

// print();




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

// Nested callback hell
doTask1(function () {
    doTask2(function () {
        doTask3();
    });
});
















// // multiple request handle in nodejs example || handle concurrency
// function request(order){
//     console.log("order", order)
//     response(function (){
//         console.log("Delivered Order!", order)
//     })
// }

// function response(callback){
//     setTimeout(callback , 5000);
// }

// request(1)
// request(2)
// request(3)
// request(4)
// request(5)



// // Events module
// // where u can create, fire, and listen for your own Events. once time.

// const EventEmitter= require('events');
// const event= new EventEmitter()

// event.on("saymyname", ()=>{
//     console.log("my name is adil khan")
// })


// event.emit("saymyname")



// //eventEmiter

// console.log("starting up")
// setTimeout(()=>{
//     console.log("api called")
// }, 2000)

// setInterval(()=>{
//     console.log("each 5 second call repeadly")
// }, 5000)




// const { EventEmitter } = require("selenium-webdriver");


// let userdata= EventEmitter.emit("user", data)
// console.log("userdata", userdata)




