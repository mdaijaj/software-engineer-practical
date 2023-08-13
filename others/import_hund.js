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


// const name="code step by step";
// console.log(!typeof(name) ==="object")  //false  //first naration check and compare operator check
// console.log(!typeof(name) ==="string")  //false
// console.log(!typeof(name) ===false)  //true




//map return someting
//foreach not return anything





// //top 50question
// for (var i=0; i<3; i++){
//     setTimeout(()=>
//         console.log(i),1000)
// }

// for (let i=0; i<3; i++){ 
//     setTimeout(()=>
//         console.log(i),1000)
// }


console.log(+ true)

let data= "size";
const bird={
    size: "small"
}
console.log(bird[data])  
console.log(bird["size"])
console.log(bird.size)
console.log(bird.data)  //undefine no access data


//43
let c={name: "aijajkhan"}  
let d= c;  //location copy
c.name="adil khan"
console.log(d.name)   //adil khan


let a=3
let b= new Number("3")
console.log(typeof("b", b))
console.log(a===b) //obj reason make a constructor
console.log(a==b)


//pre post

let number=0;
console.log(number++)  //post inc
console.log(++number)  //pre inc
console.log(number)


console.log(typeof typeof (1))


console.log(!!null)  //condtion first true
console.log(!!"")   //condtion first true
console.log(!!1)


console.log([..."adilkhan"])


const obj={
    name: "rahul kan",
    age: "25"
}

for( const i in obj){
    console.log(i)
}