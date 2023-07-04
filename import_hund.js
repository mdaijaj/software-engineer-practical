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
// console.log(a==b)   //false because we compare memory location
// console.log(a===b)

//3.
// console.log(typeof(NaN))   //special operator datatype number

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
// const [,y]= data;   //first element of data
// console.log(y)

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


// 6
// JSON.parse()  
// parse json to javascript value


// let name="prince khan";
// function getName(){  //let is block level scope 
//     console.log("name", name)   //error cannot access before initilize
//     let name="rahul khan"
// }
// getName() 


const name="code step by step";
console.log(!typeof(name) ==="object")  //false
console.log(!typeof(name) ==="string")  //false




//map return someting
//foreach not return anything



