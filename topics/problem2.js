//1 Invert the key-value pairs of an object.
// function invertObject(obj) {
//     const inverted = {};
//     for (let key in obj) {  //object loop using in not of
//         console.log(key)  // a,b
//         console.log(obj[key])   //1,2
//         inverted[obj[key]] = key;
//     }
//     return inverted;
// }
// let obj={ a: 1, b: 2 }
// console.log(invertObject(obj)); // {1: "a", 2: "b"}


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
// console.log(arr)1 2 3
// 1 2 3
// 1 2 3
// 1 2 3



//2. // Find the greatest common divisor (GCD) of two numbers. (hcf)
function gcd(a, b) {
    if (b === 0) {  // Base case: if b is 0, return a
        return a;
    }
    return gcd(b, a % b);  // b value store in a, and b value always a%b  Recursive case: gcd of b and remainder of a divided by b
}
let num1 = 56;
let num2 = 98;
console.log(`The HCF of ${gcd(num1, num2)}`); // Output: 14




// 5.  //fibonacci serie
function fibonaccieSerries(n){
    let arr=[0,1]
    for (var i=2; i<n; i++){
        // let current= arr[arr.length-1]
        // let previous=arr[arr.length-2]
        // current+= previous
        let sum= arr[arr.length-1] + arr[arr.length-2]   // currentValue + previousValue of arr   //formulla fn= (fn-1) + (fn-2)
        arr.push(sum)
    }
    console.log(arr)
}
fibonaccieSerries(10)
  


// //fibonacci series using recursion
function fibonaccieSerries(n, arr){
    let sum= arr[arr.length-1] + arr[arr.length-2] 
    arr.push(sum)
    if(n<=3){
        console.log(arr)
        return arr;
    }
    fibonaccieSerries(n-1, arr)
}
let arr=[0,1]
fibonaccieSerries(5, arr)


//7. matrix Driver code
let A = [   
    [1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3], 
    [4, 4, 4, 4]        
]; 
let B = [   
    [1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3], 
    [4, 4, 4, 4]
]; 

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



//8. roman to integer example
var romanToInt = function (item) {
    let I = 1;
    let V = 5
    let X = 10
    let L = 50
    let C = 100
    let D = 500
    let M = 1000
    let CM = 900
    let XC = 90
    let IV = 4
    let IX = 9
    let total = 0;

    for (var s = 0; s < item.length; s++) {
        if (item[s] + item[s + 1] == "CM") {
            total += CM
            s += 1
        } else if (item[s] + item[s + 1] == "XC") {
            total += XC
            s += 1
        } else if (item[s] + item[s + 1] == "IX") {
            total += IX
            s += 1
        } else if (item[s] + item[s + 1] == "IV") {
            total += IV
            s += 1
        } else if (item[s] == "V") {
            total += V
        } else if (item[s] == "X") {
            total += X
        } else if (item[s] == "L") {
            total += L
        } else if (item[s] == "C") {
            total += C
        } else if (item[s] == "D") {
            total += D
        } else if (item[s] == "M") {
            total += M
        } else if (item[s] == "I") {
            total += I
        }
    }
    console.log("total", total)
    return total
};
// romanToInt("MCDLXXVI");

// 9. happy number
let num=6;
function happyNumber(nums){
    let sum=0;
    // let arr= nums.toString();
    for(let i=1; i<nums; i++){
        if(nums%i==0){
            sum+=i
        }
    }
     if (sum==nums) {
        console.log(`${nums} is a perfect number.`);
    } else {
        console.log(`${nums} is not a perfect number.`);
    }
}
happyNumber(num)



// // 10. Product of Array Except Self
// let arr=[1,2,3,4]
// let temp=[];
// for (var i of arr){
//     let prefix= i;
//     let product=1;
//     arr.map((item)=> {
//         if(item!=i){
//             product*=item
//         }
//     })
//     temp.push(product)
// }
// console.log("product", temp)


//11 permutations
function permutations(str) {
    const results = [];
    if (str.length === 1) return [str];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        for (let perm of permutations(remaining)) {
            results.push(char + perm);
        }
    }
    return results;
}
console.log(permutations("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]



// //12. Problem: Rotate an array to the right by k steps.
// function rotate(nums, k) {
//     k = k % nums.length;
//     nums.unshift(...nums.splice(nums.length - k, k));
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arr, 3);
// console.log(arr); // [5, 6, 7, 1, 2, 3, 4]


//4. // Write a function to generate all permutations of a string.
// function permute(str) {
//     if (str.length <= 1) return [str];
//     let permutations = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let remaining = str.slice(0, i) + str.slice(i + 1);
//         for (let perm of permute(remaining)) {
//             permutations.push(char + perm);
//         }
//     }
//     return permutations;
// }



//3. synonyms  test doubt
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}
// Example usage  find intersection
const strs = ["flower", "flow", "flight"];
// const result = longestCommonPrefix(strs);
//   console.log(result);