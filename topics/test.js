

// const prommiseuse1= new Promise((resolve, reject)=>{
//     let data=false
//     let message= "prmise Resloved";
//     if(data){
//         setTimeout(() => {
//             resolve(message);
//         }, 3000);
//     }
//     else{
//         reject()
//     }
// })


// const prommiseuse2= new Promise((resolve, reject)=>{
//     let data=true
//     let message= "prmise Resloved";
//     if(data){
//         setTimeout(() => {
//             resolve(message);
//         }, 3000);
//     }
//     else{
//         reject()
//     }
// })

// let allpromise=[prommiseuse1, prommiseuse2]
// // allpromise.settle().then

// allpromise.then((data)=>{
//     console.log("data", data)
// })
// .catch((err)=>{
//     console.log("promise is rejected")
// })


// Promise.all()


// // all hooks


// useeffect(()=>{
//     return ()=>{
//         console.log("this is unmount phase")
//     }
// }, [])


// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log("test",i );   //5 5 5 5 5
//     }, i * 1000);
//     }


// const promise = new Promise((resolve, reject) => {
//     const success = true; // Change this to false to see the rejection case
//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }
// });

// promise
//     .then(result => console.log("result", result)) // Handles success
//     .catch(error => console.error(error)); // Handles failure

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject(2);
// const promise3 = Promise.resolve(3);

// Promise.allSettled([promise1, promise2, promise3])
//     .then(results => console.log("settled", results)) // Outputs: [1, 2, 3]
//     .catch(error => console.error(error));


let name={
  name: ""
};

let firstName;

console.log("name", name)
console.log("name", firstName)