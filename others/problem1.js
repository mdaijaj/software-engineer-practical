// //1 sorting
function bubbleSort(array){
  for (let i=0; i< array.length; i++){
    for (let j=0; j< array.length-i; j++){   //each loop sorted last item so -i big value sorted send on last item
      if(array[j] >array[j+1]){
        //swaping value
        let temp=array[j];
        array[j]= array[j+1];
        array[j+1]= temp
      }
    }
  }
  console.log("aijaj", array)
}
// let number = [12, 10, 15, 11, 14, 13, 16];
// bubbleSort(number)



//7.sorting
let numbers = [0, 1, 2, 30, 15, 5, 20];

// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log("numbers", numbers);



//3 second max number
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
 let arr2=[7,8,9,4,25,56, 78, 71, 12, 70]
//  SecondMax(arr2)


  // 4
    function removeDuplicates(arrOfNum) {
        const set = new Set(arrOfNum);
        // console.log("set", [...set])
    }
    // removeDuplicates(arr2)




//5 duplicate remove value
  const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];
  function removeDuplicate(arr) {
      const result = [];
      const tmp = {};
      let idx = 0;

      for (let i of arr) {
          if (!tmp[i]) {   //condition check object item is not exits or undefine
              tmp[i] = 1;
              result[idx] = i;
              idx++;
          } 
      }
      return result;
  }
  // console.log("remove duplicate", removeDuplicate(input));


// duplicate remove item
  let mainarr = [
    { name: "aijaj", email: "aijaj535@gmail.com", city: "delhi" },
    { name: "rahul", email: "rahul@gmail.com", city: "noida" },
    { name: "priyanka", email: "priyanka@gmail.com", city: "chandigadh" },
    { name: "aijaj", email: "aijaj535@gmail.com", city: "delhi" },
    { name: "aijaj", email: "aijaj535@gmail.com", city: "delhi" }
  ];
  
  let uniqueArr = mainarr.filter((obj, index, self) =>
      index === self.findIndex((item) => item.name === obj.name && item.email === obj.email && item.city === obj.city)
  );
  // console.log("uniqueArr", uniqueArr);



//6. Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {

  let start = 0 
  let end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {

      // Find the mid index
      let mid = Math.floor((start + end) / 2);
      // console.log("mid", mid)

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
let x = 8;

// if (iterativeFunction(arr, x))
//  console.log("Element found!");
// else console.log("Element not found!");




// 9. find binary no 
let newarr=[5,1,3,2,6];
let output=newarr.map((item)=> item.toString(2))
// console.log("output", output)


let string =["aijaj", "aijaj", "aman", "yogi", "satyam"]
// let number = [11, 12,12, 10, 15, 11, 14, 13, 16];

// charactor count
function CharactorCount(string){
  let newobj={}
  for (var word of string){
      newobj[word]=(newobj[word] || 0) +1  //same
  }
  console.log("newobj_string", newobj)
}
CharactorCount(string)



//10 find each count:-
const users=[
  { firstname: "aijaj", lastname: "khan", age: 25 },
  { firstname: "akshay", lastname: "kumar", age: 45 },
  { firstname: "hrithik", lastname: "roshan", age: 35 },
  { firstname: "elon ", lastname: "musk", age: 35 },
]

// const output2= users.reduce(function (newObj2, item){
//   // console.log("aijaj", newObj2[item.age])  new object check age exits or not
//   if(newObj2[item.age]){
//      newObj2[item.age] = ++newObj2[item.age]
//   }else{
//      newObj2[item.age]= 1
//   }
//   return newObj2;
// }, {})

// console.log("output2", output2)


11  //prime number in js
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
isPrime(19)



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



// 12 anagram
function isAnagram(str1, str2){

  if(str1.length!== str2.length){
      return false
  }

  let newObj={}
  for (var char of str1){
      newObj[char]=(newObj[char] || 0) +1
  }
  console.log("newObj", newObj)

  for (var item of str2){
      if(!newObj[item]){
          return false
      }
      newObj[item]-=1
  }
  return true
}

// let checked= isAnagram("aijaj", "ajaji")
// console.log("checked", checked)


//13 recursion using without loop   total= 5*4*3*2*1
let total=1;
function factorial(number){
  total*= number
  if(number>1){
      factorial(number-1)
  }else if(number==1){
      console.log("total", total)
  }
}
factorial(4)



15  // Function to check Palindrome
function checkPalindrome(n){
    let reverse = 0;
    let temp = n;
    while (temp != 0) {
        reverse = (reverse * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return (reverse == n); // if it is true then it will return 1;
     // else if false it will return 0;
}
let n2 = 7007;
// if (checkPalindrome(n2) == 1) {
//     console.log("Yes","</br>");
// }
// else {
//     console.log("No","</br>");
// }


// 16. string palindrom
function palindromString(string){
  let start=0
  let end=string.length-1
  let result=true;
  while(start<end){
    if(string[start]!= string[end]){
      result=false
    }
    start++
    end--
  }
  return result
}

let strings="level"
console.log(palindromString(strings))



// // 5 4 3 2 1
// // 5 4 3 2
// // 5 4 3
// // 5 4 
// // 5



let k=0;
for (var i=5; i>k; i--){
    let partern=""
    for (var j=i; j>k;  j--){
        partern+= j + " "
    }
    k+=1
    i+=1
    console.log(partern)
}



//doubt
// const str = 'sachin is the good batsman';
// let arr=str.split(" ")
// // console.log("arr", arr)
// let main=[]
// for (let i=0; i< arr.length; i++){
//     console.log(arr[i])
//     for (let j=0; j<arr[i].length; j++){
//           console.log(arr[i][0].toUpperCase())
          
//           break
//     }
// }




//14  //fibonacci series
//  function  fib(n){
//      /* Declare an array to store Fibonacci numbers. */
//      let f = new Array(n+2); // 1 extra to handle case, n = 0
//      let i;
//      /* 0th and 1st number of the series are 0 and 1*/
//      f[0] = 0;
//      f[1] = 1;
//      for (i = 2; i <= n; i++){
//          /* Add the previous 2 numbers in the series and store it */
//          f[i] = f[i-1] + f[i-2];
//      }
//      return f[n];
//  }
//  let n=9;
//  console.log(fib(n));