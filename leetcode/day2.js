// let string1="AIJAJ"
// let string2= "RAM";

// let maxLength;
// let newString="";
// if(string1.length>string2.length){
//   maxLength=string1
// }else{
//   maxLength=string2
// }

// for(var i=0; i<maxLength.length; i++){
//   if(string2[i]!=undefined){
//     newString+=string1[i]
//     newString+=string2[i]
//   }else{
//     newString+=string1[i]
//   }
// }
// // console.log("newString", newString)


// 1071 greatest common divisor of strings
const commonDivisor = () => {
    let str1 = "CODELEET"
    let str2 = "CODE"
    let str3 = "";
    for (var i = 0; i < str1.length; i++) {
        if (str1[0] != str2[0]) {
            break;
        }
        else if (str1[i] != str2[i]) {
            str3 += str1[i]
        }
    }
}
// commonDivisor()


const kidWithCandies = (candies, extraCandies) => {
    let mainarr = [];
    for (var i of candies) {
        if (i + extraCandies >= candies.length) {
            mainarr.push(true)
        } else {
            mainarr.push(false)
        }
    }
    console.log("mainarr", mainarr)
}
let candies = [2, 3, 5, 1, 3]
let extraCandies = 3;
// kidWithCandies(candies, extraCandies)



// 345. Reverse Vowels of a String


const reverseVowels = (string) => {

    let start = 0;
    let end = string.length - 1;
    let temp = "";
    let temp2 = "";
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let index;
    let index2;
    let username = string.split('');

    while (start < end) {

        if (vowels.includes(username[start])) {
            let temp = username[index];
            username[index] = username[index2];
            username[index2] = temp;
        }
        if (vowels.includes(username[end])) {
            let temp2 = username[index];
            username[index] = username[index2];
            username[index2] = temp2;
        }
        //   if(temp && temp2){
        //     let temp = username[index];
        //     username[index] = username[index2];
        //     username[index2] = temp;

        // // Join the array back into a string
        // let swappedString = chars.join('');
        //   username[index]=temp2
        //   username[index2]=temp;     
        //   username.replace(temp2, 'U') 
        // }

        start++
        end--
    }
    // console.log("username", username)

}

let string = "rahul"
reverseVowels(string)


function reverseWords() {
    let username = "the sky is blue";
    let user = username.split(' ')
    let newstring = " ";
    for (var i = user.length - 1; i >= 0; i--) {
        // console.log(username[0])
        newstring += user[i] + " "
    }
    console.log(newstring)
}

reverseWords()


var maxOperations = function (nums, k) {

    let counter = 0;
    let newNums = [...new Set(nums)]
    for (var i = 0; i < newNums.length; i++) {
        for (var j = i; j < newNums.length; j++) {
            if (newNums[i] + newNums[j + 1] == k) {
                counter += 1
            }
        }
    }
    console.log(counter)
}

// let nums = [1,2,3,4]
// let k = 5
// maxOperations(nums, k)



var findMaxAverage = function(nums, k) {
    let mainarr=[];
    
    for (var i=0; i<k; i++){
      let sum=0;
        for (var j=i; j<nums.length; j++){
            if(j==k+i){
                break
            }else{
                sum+=nums[j]
            }
            
        }
        
        mainarr.push(sum)
    }
    let max=mainarr[0];
    for (var i=0; i<mainarr.length; i++){
      if(mainarr[i]>max){
          max=mainarr[i]
      }
    }
    let avg=max/k;
    console.log(avg)
    
    };
    
let nums=[1,12,-5,-6,50,3]
    let k = 4;
    
    findMaxAverage(nums, k)


    