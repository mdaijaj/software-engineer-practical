// var arr = [3, 4, 10]
// let arr2=[];
// let total=1;
// function factorial(elem) {
//     for (let i=elem; i>0; i--){
//         total*=i
//         if(i===1){
//         //   console.log("total", total)
//           arr2.push(total)
//             total= 1
//         }
//     }
//    console.log("arr2", arr2)
// }

// for (const element of arr) {
//     factorial(element)
// }




// Example:
// a.
// Input: "function sample (args) { const arr=[]; return arr; }"
// Output: TRUE
// b.
// Input: "function sample(args)) { const arr=[]; return arr; }"
// Output: FALSE
// c.
// Input: "function sample(args) { const arr=[]; return arr;"
// Output: FALSE
// d.
// Input: "function sample(args) { const arr=[[[]; return arr; }"
// Output:
// FALSE



// a.
// Input: "function sample (args) { const arr=[]; return arr; }"
// Output: TRUE

// b.
// Input: "function sample(args)) { const arr=[]; return arr; }"
// Output: FALSE

// Input: "function sample(args) { const arr=[]; return arr;"
// Output: FALSE


// d.
// Input: "function sample(args) { const arr=[[[]; return arr; }"
// Output:
// FALSE



// function sample (args) { const arr=[]; return arr; }
// function sample2(args)) { const arr=[]; return arr; }
// function sample3(args) { const arr=[]; return arr;
// function sample4(args) { const arr=[[[]; return arr; }

// function newSample (sample) { 
//     console.log(sample())
//     if(sample){

//     }
// }

// newSample(string)


// Given an array of 10 numbers, get the array of missing numbers between smallest and the largest numbers.

// Example:

// Input:  [5,3,8,10,14,5,7,15,17,12]
// Output: [4,6,9,11,13,16]


// let arr=[5,3,8,10,14,5,7,15,17,12]

// let arr2=[];

// let sorting=arr.sort((a, b)=>{
//     if(a>b) return 1
//     return -1
// })
// let smallest= sorting[0]
// let greatest= sorting[sorting.length-1]
// console.log("smallest", sorting)

// // console.log("smallest", smallest)
// // console.log("greatest", greatest)


// for (let i=smallest; i<greatest; i++){
//     if(!arr.includes(i)){
//         arr2.push(i)
//     }
// }
// console.log("arr2", arr2)
