
//scope example
var username="rahul"
function userinfo(){
    username= "aijaj";
}

console.log("username", username)
userinfo()



let p1= new Promise((resolve, rejected)=>{
    setTimeout(() => {
        resolve("promise1")
    }, 3*1000);
})

let p2= new Promise((resolve, rejected)=>{
    let smsdata="how are you bro"
    setTimeout(() => {
        rejected(smsdata)
    }, 4*1000);
})

let p3= new Promise((resolve, rejected)=>{
    setTimeout(() => {
        resolve("promise3")
    }, 4*1000);
})

let p4= new Promise((resolve, rejected)=>{
    setTimeout(() => {
        resolve("promise4")
    }, 2*1000);
})

// let p1= new Promise(promiseCall(10, "first promise"))
// let p2= new Promise(promiseCall(20, "second promise"))
// let p3= new Promise(promiseCall(30, "third promise"))
// let p4= new Promise((resolve, rejected)=>{
//     rejected(`the four promise has rejected `)
// })

// // any rejcted show rejected error not work resolve
let total=0;
// Promise.all([p1,p2,p3,p4])
// .then((result)=>{
//     for (var i of result){
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
// allSettled() method waits for all promises regards of their state & returns Promise at the ends
//

//return each promise if reject then it also show resolve
// Promise.all([p1,p2,p3,p4])
// Promise.allSettled([p1,p2,p3,p4])
//race() method returns a promise as soon as any of the promise return list provide which less time.
Promise.race([p1,p2,p3,p4])
.then((result)=>{
    // for (var i of result){
    //     console.log("result", i)
    //     total+= parseInt (i.count)
    // }
    // console.log(`total is  ${result}`)
    console.log("result", result)
})
.catch((err)=>{
    console.log("error", err)
})



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

let name={
    firstname: "adil",
    lastname: "khan"
}
let printFullname= function(homeTown, state){
    console.log(this.firstname + " " + this.lastname + " from " + homeTown +", " + state )
}
printFullname.call(name, "bawana", "delhi")

let name2={
    firstname: "Mahenra sing",
    lastname: "dhoni"
}

//function borrow
// printFullname.call(name2, "bhagalpur", "bihar")


//apply method same method just array format data pass second arg
// printFullname.apply(name2, ["bhagalpur", "bihar"])

//bind method same method call store a variable a function
let userInf=printFullname.bind(name2,"bhagalpur", "bihar")   
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
console.log("pureAddNumber", pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log("pureAddNumber", pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log("numberArray", numberArray); // returns [6]


console.log("aijaj",eval("1+3"));




//4 call apply and bind
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
// student1.displayName.apply(student2, ["India", "Mumbai"])   // use apply method second argument array format only  both immediately call

//case 3 use bind method take variable function
var student2 = {
   name: "rahul",
}
// const studentInfo= student1.displayName.bind(student2, "India", "Chennai") ;  //use bind and take a variable fucntion
// studentInfo()




// call apply and bind method use access only once call other function property not repeating code
// Call and apply are almost same except the way arguments are passed
// call as , and apply as a second value as a array arguments
// bind method use take variable function define not directly call its a invoke after letter




const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
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
 
 
 // call vs apply vs bind
 // call apply and bind method use access only once call other function property not repeating code
 // Call and apply are almost same except the way arguments are passed
 // call as , and apply as a array arguments
 // bind method use take variable function define;
 
 