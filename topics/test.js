// system designing
// low level designing

// 10 tempale
// youtube
// tinder
// whatsapp
// flipkart
// zomato
// flipkart


// 20 template
// parking system
// splite




function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]


let arr=[1, [2, [3, 4]], 5]
let result=arr.flat(Infinity);   // [1,2,3,4,5]
console.log(result)


function twoSum(arr, target) {
    let pairs = [];
    let map = new Map();
    for (let num of arr) {
        let complement = target - num;
        if (map.has(complement)) {
            pairs.push([complement, num]);
        }
        map.set(num, true);
    }
    return pairs;
}
console.log(twoSum([2, 7, 11, 15], 9)); // [[2, 7]]



// Check if two strings are anagrams.
function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams("listen", "silent")); // true


// Reverse words in a sentence.
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("Hello World")); // "World Hello"


//Count the number of vowels in a string.
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Hello World")); // 3



// Invert the key-value pairs of an object.
function invertObject(obj) {
    const inverted = {};
    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}
console.log(invertObject({ a: 1, b: 2 })); // {1: "a", 2: "b"}


// Compare two objects for equality.
function deepEqual(obj1, obj2) {
    console.log(obj1==obj2)
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(deepEqual({ a: 1 }, { a: 1 })); // true


// Use .reduce() to calculate the sum of an array.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3])); // 6


//fibonacci series
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // 5


// Find the greatest common divisor (GCD) of two numbers. (lcm and hcf)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(48, 18)); // 6



// Write a function to find the nth Fibonacci number using dynamic programming.
function fib(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(fib(5)); // 5


// Write a function to generate all permutations of a string.
function permute(str) {
    if (str.length <= 1) return [str];
    let permutations = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remaining = str.slice(0, i) + str.slice(i + 1);
        for (let perm of permute(remaining)) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}
console.log(permute("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]



