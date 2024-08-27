// 1.
// let a=[];
// let b=[];
// let c={}
// let d={}
// console.log(a==a)   //false because we compare memory location
// console.log(c==d)  
// console.log(a===b)


// 2.
// let a=[];
// let b=a
// console.log(a==b)   //true because we compare memory location
// console.log(a===b)

//3.
// console.log(typeof(NaN))   //special operator (datatype number)
// console.log(typeof(null))   //special operator (datatype Object)
// console.log(typeof(Undefine))   //special operator (datatype Undefine)



// 4
// let data= 10 - -10;
// console.log(data)

// 5
// let data={
//     name: "adil khan"
// }
// console.log(delete data)   //cannot delete object only delete properites
// // console.log(delete data.name)   
// console.log("data", data)


// const data=["aijaj", "aman", "sakib"];
// const [y]= data;   //first element of data
// console.log(y)
// const [,y]= data;   //2 element of data

// let inf={
//     name: "kishan", age: 47, skill: "javascript"
// }

// let info2={
//     city: "delhi"
// }

// inf={
//     inf, ...info2
// }
// console.log("info", inf)

// const result= {} || null ||[] ||  "" || false  //postive value {}, [], number
// const result1=  null ||  "" || false   // first take positive value check if not positive then take last element
// // if(result){
//     console.log("result", result)
// // }



// let  block level
// 
// let name="prince khan";   
// function getName(){  //let is block level scope 
//     console.log("name", name)   //error cannot access before initilize
//     let name="rahul khan"
// }
// getName() 

// import
// const name="code step by step";
// console.log(!typeof(name) ==="object")  //false  //first naration check and compare operator check
// console.log(!typeof(name) ==="string")  //false
// console.log(!typeof(name) ===false)  //true    //string using narate(!) convert to boolean




//map return someting
//foreach not return anything

// const name="aijajkhan";
// const age=26;
// console.log(isNaN(name))  not a number
// console.log(isNaN(age))    number 



let person={
    name: "aijaj khan"
}
// Object.seal(person)  //after use seal you cannot modify add object properties
person.age=45
person.name="ksish"  //update name only not add object properties.
// console.log("kkkk", person)


let x=1;
let y=1
let z=2
// console.log("arthematic", x === y === --z)   //boolean and number   //false

//undefine vs not define
// p=25
// console.log("t", t)  //not define
console.log("p", p);  //undefined  hoisting
var p;



// //top 50question
// for (var i=0; i<3; i++){  //global variable
//     setTimeout(()=>
//         console.log(i),1000)
// }

// for (let i=0; i<3; i++){   //block scope
//     setTimeout(()=>
//         console.log(i),1000)
// }


console.log("llll", !"aijaj")  //false
console.log(typeof("aijajkhan"))  //string
console.log(+true)    //  1 // when + string or boolean ke aage lagane par convert into number
console.log(typeof(+true)) // number 
 


// let data= "size";
// const bird={
//     size: "small"
// }
// console.log(bird[data])    //small  we can use only variable  []
// console.log(bird["size"])  //small
// console.log(bird.size)      //small
// console.log(bird.data)  //undefine no access data  variable ko obj. ke sath access nhi kar sakte  only obj ke inside hi karte hai


//57
// let c={name: "aijajkhan"}  
// let d= c;  //location copy not data copy
// c.name="adil khan"
// console.log(d.name)   //adil khan


// let a=3
// let b= new Number("3")
// console.log(typeof("b", b))
// console.log(a===b) //obj reason make a constructor
// console.log(a==b)

function fruit(){
    console.log("woofs")
}

fruit.name="banana"  //no effect because obj ki property me kuch data define kar rahe hai.
// fruit()

//pre post
// let number=0;
// console.log(number++)  //post inc  0
// console.log(++number)  //pre inc   2
// console.log(number)   //2


// console.log(typeof typeof (1))    //string bc type of 1 number and its written in english so string


// console.log(!!null)  //condtion first true and final false
// console.log(!!"")   //condtion first true and final false
// console.log(!!1)


console.log([..."adilkhan"])   // same using split()  earch char in arr
console.log(typeof[..."adilkhan"])  


// function getAge(...args){   //spread operator failana in array
//     console.log("args", ...args)
//     console.log("args", typeof(args))  //arr no data type its only obj
// }
// getAge(25)


function getAge(){   
    'use strict';    //strictly use syntax use any varible first declare
    age=27
    console.log("age", age)
}
// getAge()

const obj2={
    name: "rahul kan",
    age: "25",
    age: "28"  
}
console.log("obj2", obj2)  //unique key in obj overwrite value


const num= [1,2,3]
num[7]= 15
// console.log("num", num)  //empty value between space 


console.log(!!null)  //false
console.log(!!"")   //false
console.log(!!1)    //true
console.log(!!{})    //true
console.log(!![]) //true





const obj={
    name: "rahul kan",
    age: "25"
}

for( const item in obj){
    console.log(item)   //key print
}

console.log(typeof 3 + 4 + "5")  //number45  left to right
console.log(typeof (3 + 4 + + "5"))  //number    //string ke age plus lagane par number ho jata hai
console.log(3 + 4 + + "5")  //12


// callbyref
// callbyvalue 

function getInfo(member){   //call by ref (memory location pass) //jab bhi parameter me obj pas karne ko hi callbyref  
    member.name="aijaj khan"   
}

const person2= {name: "adil khan"}
getInfo(person2)  //

console.log(person2)


// const arrayOfOddNumbers = [1, 3, 5];
// arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length); 200


