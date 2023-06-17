//1 sorting
function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

// // var numbers = [12, 10, 15, 11, 14, 13, 16];
// // bubbleSort(numbers);
// // console.log(numbers);



// //2 matrix Driver code
//     let A = [   
//                 [1, 1, 1, 1], 
//                 [2, 2, 2, 2], 
//                 [3, 3, 3, 3], 
//                 [4, 4, 4, 4]        
//             ]; 
//     let B = [   
//                 [1, 1, 1, 1], 
//                 [2, 2, 2, 2], 
//                 [3, 3, 3, 3], 
//                 [4, 4, 4, 4]
//             ]; 

//     let NT = 4; 
//     // This function adds A[][] and B[][], and stores 
//     // the result in C[][] 
//     function add(A, B, C) { 
//         let i, j; 
//         for (i = 0; i < NT; i++){
//             for (j = 0; j < NT; j++) {
//                 C[i][j] = A[i][j] + B[i][j]; 
//             }
//         }    
//     } 
    
//     // To store result
//     let C = new Array(NT);
//     for (let k = 0; k < NT; k++){
//         C[k] = new Array(NT);
//     } 
//     // add(A, B, C); 
//     // console.log("C", C)
    
//     // let i, j; 
//     // console.log("Result matrix is <br>"); 
//     // for (i = 0; i < N; i++) { 
//     //     for (j = 0; j < N; j++) 
//     //         console.log(C[i][j] + " "); 
//     //     console.log("<br>");
//     // } 



// // //3 second max number
// // function SecondMax(arr2){
// //     if(arr2.length>0){
 
// //        let max=arr2[0];
// //        let second_max=arr2[0];
// //        for (var i=0; i<arr2.length; i++){
// //            if(arr2[i]>max){
// //                max= arr2[i]
// //            }
// //            if(arr2[i] > second_max && arr2[i]!=max) {
// //                second_max = arr2[i];
// //            }
// //        }
// //        console.log("second_max", second_max)
// //    }
// //  }
// //  let arr2=[7,8,9,4,25,56, 78, 69, 12, 70]
// //  SecondMax(arr2)


// 4
    function removeDuplicates(arrOfNum) {
        const set = new Set(arrOfNum);
        console.log("set", [...set])
        // return [...set];
    }
    // removeDuplicates([1,1,2])




    //5 function triangle(){
    //     let star="";
    //     for (var i=0; i<5; i++){
    //         for (var j=0; j<i; j++){
                
    //             let newstar="*"
    //             // console.log(j + " ", newstar)
    //             star+=" "
    //             // console.log(star)
    //         }
    //     }
    // }
    // triangle(5)

    function printDiamond(n) {
        for (let i = 0; i < n; i++) {
          let row = "";
          for (let j = 0; j < n - i - 1; j++) {
            row += " ";
          }
          row += "*";
          for (let k = 0; k < 2 * i - 1; k++) {
            row += " ";
          }
          if (i !== 0) {
            row += "*";
          }
          console.log(row);
        }
        for (let i = n - 2; i >= 0; i--) {
          let row = "";
          for (let j = 0; j < n - i - 1; j++) {
            row += " ";
          }
          row += "*";
          for (let k = 0; k < 2 * i - 1; k++) {
            row += " ";
          }
          if (i !== 0) {
            row += "*";
          }
          console.log(row);
        }
      }
      
      // Example usage
      printDiamond(5);





//6. Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {

  let start = 0, end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {

      // Find the mid index
      let mid = Math.floor((start + end) / 2);
      console.log("mid", mid)

      // If element is present at mid, return True
      if (arr[mid] === x) return true;

      // Else look in left or right half accordingly
      else if (arr[mid] < x)
          start = mid + 1;
      else
          end = mid - 1;
  }
  return false;
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 11;

// if (iterativeFunction(arr, x))
//  console.log("Element found!");
// else console.log("Element not found!");



//7.sorting
let numbers = [0, 1, 2, 30, 15, 5, 20];
// let string =["aijaj", "rahul", "aman", "yogi", "satyam"]

// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log("numbers", numbers);



const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length); 200


//8 unique value in array
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]


function getUniqueValues(arrOfNum) {
  const set = new Set(arrOfNum);
  return [...set];
}



// 9. find binary no 
let newarr=[5,1,3,2,6];
let output=newarr.map((item)=> item.toString(2))
// console.log("output", output)



//10 find each count:-
const users=[
  { firstname: "aijaj", lastname: "khan", age: 25 },
  { firstname: "akshay", lastname: "kumar", age: 45 },
  { firstname: "hrithik", lastname: "roshan", age: 35 },
  { firstname: "elon ", lastname: "musk", age: 35 },
]
// user.map((item)=>{
//    let count=0;
//    if(item.age){
//       item["count"]= count+=1
//    }else{
//       item["count"]= 1
//    }
// })



//10. console.log("user", user)
const output2= users.reduce(function (acc, curr){
  // console.log("aijaj", acc[curr.age])  new object check age exits or not
  if(acc[curr.age]){
     acc[curr.age] = ++acc[curr.age]
  }else{
     acc[curr.age]= 1
  }
  return acc;
}, {})

// console.log("output2", output2)



//11  //prime number in js
//  function isPrime(n) {
//     // Corner case
//     if (n <= 1)
//         return false;
//     // Check from 2 to n-1
//     for (let i = 2; i < n; i++){
//         if (n % i == 0){
//             console.log("not prime number", n)
//             return false;
//         } 
//     }
//     console.log("prime number", n)
//     return true;
// }
// // Driver Code
// isPrime(19)



 //prime number in js
// JavaScript program to display Prime numbers till N
function isPrime(n){
  if(n == 1 || n == 0) return false;
  for(var i = 2; i < n; i++){
    // if the number is divisible by i, then n is not a prime number.
    if(n % i == 0) return false;
  }
  // otherwise, n is prime number.
  return true;
}

var N = 15;
for(var i = 1; i <= N; i++){
  if(isPrime(i)) {
    console.log( i );
  }
}
