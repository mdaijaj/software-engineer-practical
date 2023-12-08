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
const commonDivisor=()=>{
    let str1 = "CODELEET"
    let str2 ="CODE"
    let str3 ="";
    for (var i=0; i<str1.length; i++){
        if(str1[0]!=str2[0]){
            break;
        }
        else if(str1[i]!=str2[i]){
            str3+=str1[i]
        }
    }
}
// commonDivisor()


const kidWithCandies= (candies, extraCandies)=>{
    let mainarr=[];
    for (var i of candies){
        if(i+extraCandies>= candies.length){
            mainarr.push(true)
        }else{
            mainarr.push(false)
        }
    }
    console.log("mainarr", mainarr)
}
let candies = [2,3,5,1,3]
let extraCandies = 3;
// kidWithCandies(candies, extraCandies)



// 345. Reverse Vowels of a String


const reverseVowels=(string)=>{
    
    let start=0;
    let end=string.length-1;
    let temp="";
    let temp2="";
    let vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let index;
    let index2;
    let username= string.split('');

    while (start<end){
        
      if(vowels.includes(username[start])){
        let temp = username[index];
        username[index] = username[index2];
        username[index2] = temp;
      }
      if(vowels.includes(username[end])){
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

// let string="rahul"
// reverseVowels(string)



const increasingTripletSubsequence=(nums)=>{
    for (var i=0; i<nums.length; i++){
        if(nums[i]<nums[i+1] && nums[i+1]<nums[i+2]){
            console.log(true)
            return true
        }
    }
    console.log(false)
    return false
}
let nums=[20,100,10,12,5,13]

// increasingTripletSubsequence(nums)


const stringCompression=(string)=>{
    let obj={}
    for (var char of string){
        obj[char]=(obj[char] || 0) +1  
    }
    let mainstring="";
    let valuelength=Object.values(obj);
    let keylength=Object.keys(obj);

    for (var i=0; i<valuelength.length; i++){
        if(valuelength[i]>1){
            mainstring+=keylength[i] + valuelength[i]
        }else{
            mainstring+=keylength[i]
        }
    }
    let staringarr=mainstring.split("")
    console.log("mainstring", staringarr)
    return mainstring.length

}

// let string = ["a","a","b","b","c","c","c"]
stringCompression(string)
 
//ab12  ["a","b","1","2"]  4


let string="rahul"
reverseVowels(string)


function reverseWords(){
    let username="the sky is blue";
    let user=username.split(' ')
    let newstring=" ";
    for (var i=user.length-1; i>=0; i-- ){
        // console.log(username[0])
        newstring+=user[i] + " "
    }
    console.log(newstring)
}

reverseWords()


