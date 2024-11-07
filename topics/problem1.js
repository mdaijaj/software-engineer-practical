// top 30 question

// //1 sorting
function bubbleSort(array){
  for (let i=0; i< array.length; i++){
    for (let j=0; j< array.length-i; j++){   //each loop sorted last item so -i big value sorted send on last item
      if(array[j] > array[j+1]){
        //swaping value
        let temp=array[j];  //big value store temp
        array[j]= array[j+1];
        array[j+1]= temp
      }
    }
  }
  console.log("aijaj", array)
}
// let number = [12, 10, 15, 11, 14, 13, 16];
// bubbleSort(number)



//sorting using recursion
function recursiveBubbleSort(arr, n = arr.length) {
  if (n === 1) {  // Base case: If the size of the array is 1, it's already sorted
      return;      
  }
  // Perform one pass of the bubble sort
  for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
          // Swap if the element found is greater than the next element
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
  }
  // Call the function recursively to sort the remaining array
  recursiveBubbleSort(arr, n - 1);
}

let array = [64, 34, 25, 12, 22, 11, 90];
recursiveBubbleSort(array);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]



//sorting
// let string=["a", "c", "b", "g","d", "r" ,"z", "o"]  // string only do sort()
// let numbers = [0, 1, 2, 30, 15, 5, 20];
// numbers.sort(function(a , b){
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
  // removeDuplicates(arr2).



  // const arr = [1,2,3,4,4,1,2, 4];
  // const b=[];
  for(let i=0;i<arr.length;i++){
      if(!b.includes(arr[i])){   
          b.push(arr[i])
      }
  }
  console.log("removed duplicate array value",b)



  // const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];
  // function removeDuplicate(arr) {
  //     const tempArr = [];
  //     const obj = {};
  //     let idx = 0;
  //     for (let i of arr) {
  //         if (!obj[i]) {   //condition check object item is not exits or undefine
  //             obj[i] = 1;
  //            // tempArr.push(i)
  //              tempArr[idx] = i;
  //             idx++;
  //         } 
  //     }
  //     return tempArr;
  // }
  // // console.log("remove duplicate", removeDuplicate(input));



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



//4. Binary Search (array should be sorted)
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
const output2= users.reduce(function (accumulator, currentValue){
  // console.log("aijaj", accumulator[currentValue.age])  new object check age exits or not
  if(accumulator[currentValue.age]){
     accumulator[currentValue.age] = ++accumulator[currentValue.age]
  }else{
     accumulator[currentValue.age]= 1
  }
  return accumulator;
}, {})
console.log("output2", output2)



 //6 prime number in js
 function isPrime(n) {
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
// console.log(twoSum([2, 7, 11, 15], 9)); // [[2, 7]]
// // Check if two strings are anagrams.
// function areAnagrams(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(areAnagrams("listen", "silent")); // true



//8 factorial number recursion using without loop   total= 5*4*3*2*1
let total=1;
function factorial(number){
  total*= number
  if(number>1){
      factorial(number-1)
  }else{
      console.log("total", total)
  }
}
// factorial(4)



//9 Function to check Palindrome
//  string palindrom
function palindromString(string){  // 121
  let start=0 
  let end=string.length-1
  while(start<end){
    if(string[start]!= string[end]){
      return false
    }
    start++
    end--
  }
  return true
}
let strings="123214"
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



// // Reverse words in a sentence.
// function reverseWords(sentence) {
//     return sentence.split(' ').reverse().join(' ');
// }
// console.log(reverseWords("Hello World")); // "World Hello"



// 10. swap two value without using third variable
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



//11 find vovels from mystring.
function findVovelsLetter(mystring){
  let vovels=["a", "e", "o", "u", "i"]
  let vovelsString="";
  for (var i of mystring){
      if(vovels.includes(i)){
          vovelsString+=i
      }
  }
}
console.log(vovelsString)
let mystring="my name is king khan";
// findVovelsLetter(mystring)



//12 each word first capital letter 
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



//13. armstrong number  //153 is an Armstrong number. 1*1*1 + 5*5*5 + 3*3*3 = 153
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
//  console.log("this is not armstrong number")
// }



// 14. find binary no 
let newarr=[5,1,3,2,6];
let output=newarr.map((item)=> item.toString(2))
// console.log("output", output)


//decimal to binary
function binaryNumber(nums){
  let string=""
  while(0<nums){
      let remain= nums%2;
      nums=Math.floor(nums/2);
      string+=remain
  }
return string
}
let result=15;

// let num=10; 
// for (var i=0; i<num; i++){
//   console.log(binaryNumber(i))
// }



//15. find binary to decimal number
// let number=11001
// let str= number.toString();
// let sum=0;
// let index=0;
// for (var i=str.length-1; 0<=i; i--){
//     let result= Math.pow(2, i);
//     let final= result * parseInt(str[index])
//     sum+=final;
//     index+=1
// }
// console.log("sum", sum)


// //16 object iteration
const object1 = {
  a: 'somestring',
  b: 42,
};
// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }
// Expected output:
// "a: somestring"
// "b: 42"



//17 missing number
function findMissingNumber(arr) {
  const n = arr.length + 1;  // Since one number is missing
  const totalSum = (n * (n + 1)) / 2;  // Sum of first n natural numbers
  const arraySum = arr.reduce((acc, num) => acc + num, 0);  // Sum of elements in the array
  return totalSum - arraySum;  // The missing number
}
// const arr = [1, 2, 4, 5, 6];
// console.log('Missing number:', findMissingNumber(arr));  // Output: 3



//18 find index of item which is sum of numbers equal to target value.
function findTwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; // Return the indices
      }
    }
  }
  return []; // Return an empty array if no pair is found
}
let num = [2, 7, 1, 15];
let target = 3;
// const result = findTwoSum(num, target);
// console.log(result); // Output: [0, 2]




// add subarr and equal to target value with code optimized
// function twoSum(arr, target) {
//     let pairs = [];
//     let map = new Map();
//     for (let num of arr) {
//         let complement = target - num;
//         if (map.has(complement)) {
//             pairs.push([complement, num]);
//         }
//         map.set(num, true);
//     }
//     return pairs;
// }
// console.log(twoSum([2, 7, 11, 15], 9)); // [[2, 7]]



//19 intersection element from two array
// function intersection(arr1, arr2) {
//     return arr1.filter(x => arr2.includes(x));
// }
// console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]



//20 Compare two objects for equality.
// function deepEqual(obj1, obj2) {
//     console.log(obj1==obj2)  //false
//     return JSON.stringify(obj1) === JSON.stringify(obj2);  //true
// }
// console.log(deepEqual({ a: 1 }, { a: 1 }));


//21 swap in array
// let arr=[7,8,5,4,7,8]
// let start=0; 
// let end=arr.length-1;

// function swap(arr, start, end){
//    let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
// }

// while(start<end){
//     swap(arr, start, end);
//     start++;
//     end--;
// }
// console.log(arr)