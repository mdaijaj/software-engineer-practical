//1 Binary Search Function sorted array
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



//2 sorting
let numbers = [0, 1, 2, 30, 15, 5, 20];
// let string =["aijaj", "rahul", "aman", "yogi", "satyam"]

// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log("numbers", numbers);



//3 nearest palindrome   doubt wrong value
// const findNearestPalindrome = (num) => {
//    const strNum = String(num);
//    const half = strNum.substring(0, Math.floor(strNum.length / 2));
//    console.log("half", half)
//    const reversed = half.split("").reverse().join("");
//    const first = strNum.length % 2 === 0 ? half : strNum.substring(0, Math.ceil(strNum.length / 2))
//    return +(first + reversed);
// }
// console.log("palindrom", findNearestPalindrome(93));



//4  sum of all the odd elements function. use reduce
function oddball_sum(nums) {
   return nums.reduce(function (total, item) {
       if (item % 2 === 1) {
           total += item;
       }
       return total;
   });
}
// oddball_sum([1, 2, 3, 4, 5])



//5 unique value in array
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
// console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6] 

function getUniqueValues(arrOfNum) {
   const set = new Set(arrOfNum);
//    console.log("set", set)
   return [...set];
}



//6 second max number
function SecondMax(arr2){
   if(arr2.length>0){

      let max=arr2[0];
      let second_max=arr2[0];
      for (var i=0; i<arr2.length; i++){
          if(arr2[i]>max){
              max= arr2[i]
          }
          if(arr2[i] > second_max && arr2[i]!=max) {
              second_max = arr2[i];
          }
      }
      console.log("second_max", second_max)
  }
}
let arr2=[7,8,9,4,25,56, 78, 69, 12, 22]
// SecondMax(arr2)



//find binary no 
let newarr=[5,1,3,2,6, 25];
let output=newarr.map((item)=> item.toString(2))
console.log("output", output)


//find octal no

//find hexa number



//7 find each count:- using reduce
const users=[
   { firstname: "aijaj", lastname: "khan", age: 25 },
   { firstname: "elon", lastname: "kumar", age: 45 },
   { firstname: "hrithik", lastname: "roshan", age: 35 },
   { firstname: "elon", lastname: "musk", age: 35 },
]
// users.map((item)=>{
//    let count=0;
//    if(item.age){
//       item["count"]= count+=1
//    }else{
//       item["count"]= 1
//    }
//    console.log("user", item)
// })

const output2= users.reduce(function (total, curr){
   // console.log("aijaj", acc[curr.age])  new object check age exits or not
   if(total[curr.firstname]){
      total[curr.firstname] = ++total[curr.firstname]
   }else{
      total[curr.firstname]= 1
   }
   return total;
}, {})
console.log("output2", output2)



 //8 prime number in js
 function isPrime(n) {
   // Corner case
   if (n <= 1)
       return false;
   // Check from 2 to n-1
   for (let i = 2; i < n; i++){
       if (n % i == 0){
           console.log("not prime number", n)
           return false;
       } 
   }
   console.log("prime number", n)
   return true;
}
// Driver Code
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
        console.log( "aijaj", i );
      }
}



//9 fibonacci series  revision
 function  fib(n){
     /* Declare an array to store Fibonacci numbers. */
     let f = new Array(n+2); // 1 extra to handle case, n = 0
     let i;
     /* 0th and 1st number of the series are 0 and 1*/
     f[0] = 0;
     f[1] = 1;
     for (i = 2; i <= n; i++){
         /* Add the previous 2 numbers in the series and store it */
         f[i] = f[i-1] + f[i-2];
     }
     return f[n];
 }
 let n=9;
 console.log(fib(n));



//10 palindrom  revision
// function checkPalindrome(x) {
//     let convertedNumber = x.toString();
//     let reverseString = convertedNumber.split("").reverse().join("");
//     console.log("reverseString", reverseString)
//     return reverseString === convertedNumber ? "Yes" : "No";
// }
 
// Some Testcases...
// let num = 786;
// console.log(checkPalindrome(num)); // Yes



// Function to check Palindrome
function checkPalindrome(n)
{
    let reverse = 0;
    let temp = n;
    while (temp != 0) {
        reverse = (reverse * 10) + (temp % 10);
        console.log("reverse", reverse)
        temp = Math.floor(temp / 10);
    }
    return (reverse == n); // if it is true then it will return 1;
                   // else if false it will return 0;
}
let n2 = 101;
console.log("checkPalindrome", checkPalindrome(n2))
if (checkPalindrome(n2) == 1) {
    console.log("Yes","</br>");
}
else {
    console.log("No","</br>");
}


// var twoSum = function(nums, target) {
//    for (var i=0; i<nums.length; i++){

//       for (var j=0; j<i+1; j++){
//          if(nums[i]+ nums[j] ==target){
//             console.log(i, j)
//               return i
//           }

//       } 
//    }
// };

// twoSum([2,7,11,15], 17)


//sum of two no and find index
var twoSum = function(nums, target) {
   for (var i=0; i<nums.length; i++){
      for (var j=i; j<nums.length; j++){
         if(nums[i]+ nums[j+1] ==target){
            console.log(i, j)
         }
      } 
   }
};

twoSum([2,7,11,15], 17)  



