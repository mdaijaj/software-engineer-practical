
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
// Example usage
const strs = ["flower", "flow", "flight"];
// const result = longestCommonPrefix(strs);
//   console.log(result);



//4 sorting merge two arr
var mergeTwoLists = function (list1, list2) {

    let arr = []
    for (var i = 0; i < list2.length; i++) {
        if (list1[i] < list2[i]) {
            arr.push(list1[i])
        }
        else if (list1[i] == list2[i]) {
            arr.push(list1[i])
        }
        arr.push(list2[i])
    }
    // console.log("aijaj", arr)
    // // Output: [1,1,2,3,4,4]
}
let list1 = [1, 2, 4]
let list2 = [1, 3, 4]
// mergeTwoLists(list1, list2)


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



// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);

//7 Print -> 1 2 3 using async await
const printNum = async () => {
    console.log(1);
    await new Promise((resolve) => setTimeout(() => {
        console.log(2);
        resolve();
    }, 1000));
    console.log(3);
}
// printNum()



//8 Call by reference:
let person = { name: 'Alice', age: 30 };
// let age=26   variable not update but object update
function updateAge(p) {
    p.age++;
}
// updateAge(person);
// console.log(person.age); // Output: 31



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



// 11 print diamond 
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
for (let i = n - 2; i >= 0; i--){
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
// printDiamond(5);



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


let obj1= {
    "name": "User1",
    "age": 30,
    "city": "Hyderabad"
  }
  let obj2 ={
    "name": "User1",
    "age": 25,
    "country": "India"
  }
  
  for (const item in obj1) {
    console.log(item)
  }
  
  
  // let mainarr=[];
  // for (const [key, value] of Object.entries(obj1)) {
  
  // for (const [key2, value2] of Object.entries(obj2)) {
  //     console.log(value, value2)
  //     if(value!=value2){
        
  //     }
  // }
  
  // }
  // console.log(mainarr)
  
  //     let data2=Object.values(obj2)
  //     let data1=Object.values(obj1)
  //     let data3=Object.keys(obj2)
  //     let data4=Object.keys(obj1)
  
  
  //     let mainarr=[];
  // // for (let item of data2){
      
  //     for (var i=0; i<data2.length; i++){
  //       let data=data1.includes(data2[i])
  //         if(!data){
  //           let single= data3[i]
  //             let other= data4[i]
  //             mainarr.push(single)
  //             mainarr.push(other)
  //         }
  //     }
      
  //     console.log(mainarr)
  