// //1 sorting
function bubbleSort(array){
  for (let i=0; i< array.length; i++){
    for (let j=0; j< array.length-i; j++){   //each loop sorted last item so -i big value sorted send on last item
      if(array[j] > array[j+1]){
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



//.sorting
let numbers = [0, 1, 2, 30, 15, 5, 20];
// numbers.sort( function(a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log("numbers", numbers);



//2 second max number
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



//3 duplicate remove value
  function removeDuplicates(arrOfNum) {
      const set = new Set(arrOfNum);
      // console.log("set", [...set])
  }
  // removeDuplicates(arr2)


  // const arr = [1,2,3,4,4,1,2, 4];
  // const b=[];
  // for(let i=0;i<arr.length;i++){
  //     if(b.includes(arr[i])==false){   
  //         b.push(arr[i])
  //     }
  // }
  // console.log("removed duplicate array value",b)


  const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];
  function removeDuplicate(arr) {
      const tempArr = [];
      const obj = {};
      let idx = 0;
      for (let i of arr) {
          if (!obj[i]) {   //condition check object item is not exits or undefine
              // obj[i] = 1;
              tempArr.push(i)
              tempArr[idx] = i;
              idx++;
          } 
      }
      return tempArr;
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



//4. Binary Search
let iterativeFunction = function (arr, x) {
  let start = 0 
  let end = arr.length - 1;

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
let x = 8;

// if (iterativeFunction(arr, x))
//  console.log("Element found!");
// else console.log("Element not found!");


let string =["aijaj", "aijaj", "aman", "yogi", "satyam"]
// let number = [11, 12,12, 10, 15, 11, 14, 13, 16];

//5 charactor count
function CharactorCount(string){
  let newobj={}
  for (var word of string){
      if(newobj[word]){
          newobj[word]+=1
      }
      else{
          newobj[word]=1
      }    
  }
  console.log("newobj_string", newobj)
}
CharactorCount(string)



// find each count:-
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


 //6 prime number in js
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
    console.log("prime number", n) //7
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
    console.log( i );
  }
}


// 7 anagram
function isAnagram(str1, str2){
  if(str1.length!== str2.length){
      return false
  }
  let newObj={}
  for (var char of str1){
    if(newObj[char]){
      newObj[char]+=1
    }else{
      newObj[char]=1
    }
  }

  for (var item of str2){
      if(!newObj[item]){
          return false
      }
      newObj[item]-=1
  }
  console.log("newObj", newObj)
  return true
}
let checked= isAnagram("aijaj", "ajaji")
console.log("checked", checked)


//8 recursion using without loop   total= 5*4*3*2*1
let total=1;
function factorial(number){
  total*= number
  if(number>1){
      factorial(number-1)
  }else if(number==1){
      console.log("total", total)
  }
}
// factorial(4)



//9 Function to check Palindrome
//  string palindrom
function palindromString(string){   121
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
let strings="123217"
console.log("kkk", palindromString(strings))


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


// 15. swap two value without using third variable
let a = 5;
let b = 10;
a = a + b; // a now becomes 15
b = a - b; // b becomes 5 (original value of a)
a = a - b; // a becomes 10 (original value of b)
console.log('a:', a); // a: 10
console.log('b:', b); // b: 5


//Using Destructuring Assignment: 
// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log('a:', a); // a: 10
// console.log('b:', b); // b: 5


//Using Bitwise XOR
// let a = 5;
// let b = 10;
// a = a ^ b; // a now becomes 15 (in binary: 0101 ^ 1010 = 1111)
// b = a ^ b; // b becomes 5 (in binary: 1111 ^ 1010 = 0101)
// a = a ^ b; // a becomes 10 (in binary: 1111 ^ 0101 = 1010)
// console.log('a:', a); // a: 10
// console.log('b:', b); // b: 5



// find vovels from string.


//10 each word first capital letter 
const str = 'sachin is the good batsman';
let arr3=str.split(" ")
console.log("arr", arr3)
let newstring=[]
for (let i=0; i< arr3.length; i++){
    // console.log("arr3[i]", arr3[i])
    const str2 = arr3[i].charAt(0).toUpperCase() + arr3[i].slice(1);
    // newstring.push(str2)
    newstring[i]=str2
}
console.log("newstring", newstring)


//armstrong number
// let number=1634;
// let result=number.toString();
// // console.log(typeof(result))
// let total=0;
// for (var i=0; i<result.length; i++){
//     let qub=result[i] ** result.length;
//     total+=qub;
//     console.log("qub", qub)
// }
// console.log("total", total)


// if(total==number){
//     console.log("this is armstrong number")
// }
// else{
//         console.log("this is not armstrong number")
// }


// 11  //fibonacci serie
function fibonacci(n){
  let previous=0;
  let current=1;       
  let sum=0;
  let fibonacciSeries=[0,1];
  for (var i=2; i<=n; i++){
    previous=current
    current=sum
    sum=previous+ current
    fibonacciSeries.push(sum)
  }
  console.log("fibonacciSeries", fibonacciSeries)
}
// fibonacci(10)


//first n fibonacci series
function generateFibonacciSeries(n) {
  var fibonacciSeries = [0, 1];
  for (var i = 2; i < n; i++) {
    var nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];  //formulla fn= (fn-1) + (fn-2)
    fibonacciSeries.push(nextNumber);
  }
  console.log("fibonacciSeries", fibonacciSeries) ;
}
var result = generateFibonacciSeries(10);
console.log(result);



// 12. find binary no 
let newarr=[5,1,3,2,6];
let output=newarr.map((item)=> item.toString(2))
// console.log("output", output)


const object1 = {
  a: 'somestring',
  b: 42,
};

//13 object iteration
// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }
// Expected output:
// "a: somestring"
// "b: 42"


//missing number
function findMissingNumber(arr, n) {
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  return sum - arrSum;
}