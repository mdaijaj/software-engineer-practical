//top 20 question
// intersection element from two array
// function intersection(arr1, arr2) {
//     return arr1.filter(x => arr2.includes(x));
// }
// console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]



// let arr=[1, [2, [3, 4]], 5]
// let result=arr.flat(Infinity);   // [1,2,3,4,5]
// console.log(result)



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



// // Reverse words in a sentence.
// function reverseWords(sentence) {
//     return sentence.split(' ').reverse().join(' ');
// }
// console.log(reverseWords("Hello World")); // "World Hello"



// // Invert the key-value pairs of an object.
// function invertObject(obj) {
//     const inverted = {};
//     for (let key in obj) {
//         console.log(key)  // a,b
//         console.log(obj[key])   //1,2
//         inverted[obj[key]] = key;
//     }
//     return inverted;
// }
// let obj={ a: 1, b: 2 }
// console.log(invertObject(obj)); // {1: "a", 2: "b"}



// Compare two objects for equality.
// function deepEqual(obj1, obj2) {
//     console.log(obj1==obj2)  //false
//     return JSON.stringify(obj1) === JSON.stringify(obj2);  //true
// }
// console.log(deepEqual({ a: 1 }, { a: 1 }));



// // Find the greatest common divisor (GCD) of two numbers. (lcm and hcf)
function gcd(a, b) {
    if (b === 0) {  // Base case: if b is 0, return a
        return a;
    }
    return gcd(b, a % b);  // Recursive case: gcd of b and remainder of a divided by b
}
let num1 = 56;
let num2 = 98;
console.log(`The HCF of ${gcd(num1, num2)}`); // Output: 14



//1 leet code
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            console.log(nums[i] + nums[j + 1])
            if (nums[i] + nums[j + 1] == target) {
                console.log([i, j + 1])
                return [i, j + 1]
            }
        }
    }
    console.log("not found sum of index")
};
// let nums = [4, 5, 6, 7, 8, 9];
// twoSum(nums, 12)



//solve time complexity n^2 to n;
var twoSum = function(nums, target) {
    let map = new Map();  // Create a map to store the value and index
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  // Calculate the complement
        if (map.has(complement)) {  // Check if complement exists in the map
            console.log("map1", map)
            return [map.get(complement), i];  // Return the indices
        }
        map.set(nums[i], i);  // Store the current value and its index in the 
        console.log("map2", map)
    }
};
let nums= [2, 7, 11, 15]
let target= 26
console.log("twoSum", twoSum(nums, target))



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



//2. roman to integer example
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



//3. synonyms
function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) {
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



//5 let const var example
let a = 14;
function getData(a) {
    a = 20
    // console.log(a) // 20
}
console.log(a)
// getData(a) //14



//6. find binary to decimal number
let input = "1001110";
const binaryToDecimal = (num) => {
    let output = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        let val = Math.pow(2, num.length - 1 - i) * Number(num[i]);
        console.log("val", val)
        output += val;
    }
    let reverseNum = num.split("").reverse();
    let res = 0;
    for (let i = 0; i < reverseNum.length; i++) {
        let val = Math.pow(2, i) * Number(reverseNum[i]);
        res += val;
    }
    console.log("output", output)  //38
    return [res, output];
};
// binaryToDecimal(input)



//9 using hash map
let str1 = "acadbdbadc";
const checkCount = (str) => {
    let hashMap = {};
    for (let i= 0; i < str.length; i++) {
        if (!hashMap[str[i]]) 
            hashMap[str[i]] = 1;
        else hashMap[str[i]]++;
    }
    console.log("hashMap", hashMap)
    return hashMap;
};
// checkCount(str1)



//10 matrix Driver code
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



// // Write a function to generate all permutations of a string.
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



// //fibonacci series
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5)); // 5



// // Write a function to find the nth Fibonacci number using dynamic programming.
// function fib(n) {
//     const dp = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// }
// console.log(fib(5)); // 5