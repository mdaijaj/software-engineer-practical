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
    while (start<end){
   
      if(vowels.includes(string[start])){
          temp=string[start] 
          index=string.indexOf(temp);
      }
      if(vowels.includes(string[end])){
          temp2=string[end]
          index2=string.indexOf(temp2, 3);

      }
      if(temp && temp2){
          string[index]=temp2
          string[index2]=temp
      }
      start++
      end--
    }
    console.log("temp", string)
}

let string="rahul"
reverseVowels(string)
