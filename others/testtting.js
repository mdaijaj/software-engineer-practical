

// // const userdata= (username, callback)=>{
// //     callback(username)
// // }

// //  function callback(username){
// //     console.log("username", username)
// //     return username
// // }

// // userdata("kishan", callback)


// const userData= new Promise((resolve, reject)=>{
//     let username="";

//     if(username){
//         resolve(username) 
//     }else{
//         reject("please enter user name")
//     }
// })
// .then((item)=>{
//     console.log("item", item)
// })
// .catch((err)=>{
//     console.log("please enter user name")
// })

// // console.log("userData", userData)



// // const {username, email, phone}=  req.body;

// let arr1=[]

// let username="prince";


// username="priyanka"
// console.log("username", username)


// // user
// // post
// // lookup{ 
// //     localfield id 
// //     forignfield postid

// // }



// function addUpTo(n) {
//     return n * (n + 1) / 2;
//   }
  
//   var time1 = performance.now();
//   console.log("time1", time1)
//   addUpTo(1000000000);

//   var time2 = performance.now();
//   console.log("time2", time2)

//   console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)


// // function addUpTo(n) {
// //     let total = 0;
// //     for (let i = 1; i <= n; i++) {
// //       total += i;
// //     }
// //     return total;
// //   }
  
// //   addUpTo(1000000000);
// //   var t1 = performance.now();
// //   var t2 = performance.now();

// //   console.log("time1", t1)
// //   console.log("time2", t2)
// //   console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)




// // 405 pankha road


// const myPromise= new Promise((resolve, reject)=>{
//     // console.log("aijaj", Math.random() * 99).trunc()
//     let data = Math.random() * 99
//     let result=Math.trunc(data)
//     console.log("result", result)
 
//     if(result){
//         resolve("ya i am done")
//     }
//     reject(new Error("it may be failed any time.."))
//  })


// const animal = {
//     type: 'Unknown',
//     speak() {
//       console.log(`The ${this.type} makes a sound.`);
//     }
//   };
  
//   const cat = {
//     type: 'Cat'
//   };
  
//   cat.__proto__ = animal;
  
//   cat.speak(); // "The Cat makes a sound."

function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.speak = function () {
    console.log(`The ${this.type} makes a sound.`);
  };
  
  const cat = new Animal('Cat');
  
  cat.speak(); // "The Cat makes a sound."
  
  

  // 125
  // fiber tree
  