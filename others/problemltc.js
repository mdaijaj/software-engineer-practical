
//leet code
var twoSum = function (nums, target) {

    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            console.log(nums[i] + nums[j + 1])
            if (nums[i] + nums[j + 1] == target) {
                console.log([i, j + 1])
                return [i, j + 1]
            }
        }
    }
    console.log("not found sum of index")

};

let nums = [4, 5, 6, 7, 8, 9];
// twoSum(nums, 12)



//roman to integer example
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
const result = longestCommonPrefix(strs);
//   console.log(result);




var mergeTwoLists = function (list1, list2) {

    let arr = []
    for (var i = 0; i < list2.length; i++) {
        if (list1[i] < list2[i]) {
            arr.push(list1[i])
        }
        if (list1[i] == list2[i]) {
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


// let a=14;
// function getData(){
//     a=20
//     // console.log(a)
// }
// console.log(a)
// getData() //20


let input = "10001010";
// Output: 138;
const binaryToDecimal = (num) => {
    let output = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        let val = Math.pow(2, num.length - 1 - i) * Number(num[i]);
        output += val;
    }
    let reverseNum = num.split("").reverse();
    let res = 0;
    for (let i = 0; i < reverseNum.length; i++) {
        let val = Math.pow(2, i) * Number(reverseNum[i]);
        res += val;
    }
    console.log("output", output)
    return [res, output];
};

binaryToDecimal(input)



// Print -> 1 2 3 using async await
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
const printNum = async () => {
    console.log(1);
    await new Promise((resolve) => setTimeout(() => {
        console.log(2);
        resolve();
    }, 100));
    console.log(3);
}



// Call by reference:
let person = { name: 'Alice', age: 30 };
function updateAge(p) {
    p.age++;
}
updateAge(person);
console.log(person.age); // Output: 31
let myArray = [1, 2, 3];
function addToEnd(arr, value) {
    arr.push(value);
}
addToEnd(myArray, 4);
console.log(myArray); // Output: [1, 2, 3, 4]


//using hash map
let str1 = "acadbdbadc";
const checkCount = (str) => {
let hashMap = {};
for (let i = 0; i < str.length; i++) {
if (!hashMap[str[i]]) hashMap[str[i]] = 1;else hashMap[str[i]]++;
}
return hashMap;
};


//duplication removiing numb
// let nums = [4, 3, 3, 1];
let nums1 = [1, 2, 3, 5, 5, 6];
const checkDuplicate = (nums) => {
let hashMap = {},
missingNum = 0,
repeatedNum = 0;
for (let i = 0; i < nums.length; i++) {
if (!nums.includes(i + 1)) missingNum = i + 1;
if (!hashMap[nums[i]]) hashMap[nums[i]] = 1;
else {
hashMap[nums[i]]++;
repeatedNum = nums[i];
}
}
return {
repeatedNum,
missingNum,
sum: repeatedNum + missingNum,
};
};
console.log(checkDuplicate(nums));
console.log(checkDuplicate(nums1));