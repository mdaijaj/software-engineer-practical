// // //1 sorting
// // function bubbleSort(array) {
// //   var done = false;
// //   while (!done) {
// //     done = true;
// //     for (var i = 1; i < array.length; i += 1) {
// //       if (array[i - 1] > array[i]) {
// //         done = false;
// //         var tmp = array[i - 1];
// //         array[i - 1] = array[i];
// //         array[i] = tmp;
// //       }
// //     }
// //   }

// //   return array;
// // }

// // var numbers = [12, 10, 15, 11, 14, 13, 16];
// // bubbleSort(numbers);
// // console.log(numbers);




// //3 reverse string
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log("newString", newString)
//     return newString;
//  }
// //  reverseString('my name is king khan');



// //4 matrix Driver code
//     let A = [   
//                 [1, 1, 1, 1], 
//                 [2, 2, 2, 2], 
//                 [3, 3, 3, 3], 
//                 [4, 4, 4, 4]        
//             ]; 
//     let B = [   
//                 [1, 1, 1, 1], 
//                 [2, 2, 2, 2], 
//                 [3, 3, 3, 3], 
//                 [4, 4, 4, 4]
//             ]; 

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



// // //5 second max number
// // function SecondMax(arr2){
// //     if(arr2.length>0){
 
// //        let max=arr2[0];
// //        let second_max=arr2[0];
// //        for (var i=0; i<arr2.length; i++){
// //            if(arr2[i]>max){
// //                max= arr2[i]
// //            }
// //            if(arr2[i] > second_max && arr2[i]!=max) {
// //                second_max = arr2[i];
// //            }
// //        }
// //        console.log("second_max", second_max)
// //    }
// //  }
// //  let arr2=[7,8,9,4,25,56, 78, 69, 12, 70]
// //  SecondMax(arr2)



// let p1= new Promise((resolve, rejected)=>{
//     resolve("a")
// })

// let p2= new Promise((resolve, rejected)=>{
//     let smsdata="b"
//     setTimeout(() => {
//         resolve(smsdata)
//     }, 4*1000);
// })

// let p3= new Promise((resolve, rejected)=>{
//     setTimeout(() => {
//         resolve("c")
//     }, 1*1000);
// })

// let p4= new Promise((resolve, rejected)=>{
//     resolve("d")
// })

// Promise.all([p1,p2,p3,p4])
// .then((result)=>{
//     console.log(`total is  ${result}`)
// })
// .catch((error)=>{
//     console.log(`error promise ${error}`)
// })

//leet code
var twoSum = function(nums, target) {

    for(var i=0; i<nums.length;i++){
        for (var j= i; j<nums.length; j++){
            console.log(nums[i]+nums[j+1])
            if(nums[i]+ nums[j+1]==target){
                console.log([i, j+1])
                return [i, j+1]
            }
        }
    }
    console.log("not found sum of index")
    
};

let nums=[4,5,6,7,8,9];
// twoSum(nums, 12)



//roman to integer example
var romanToInt = function(item) {
    let I=1;
    let V=5
    let X=10
    let L=50
    let C=100
    let D=500
    let M=1000
    let CM = 900
    let XC = 90
    let IV = 4
    let IX=9



    let total=0;
    for (var s=0; s<item.length; s++){
       if(item[s]+ item[s+1]=="CM"){
            total+=CM
            s+=1
        }else if(item[s]+ item[s+1]=="XC"){
            total+=XC
             s+=1
        }else if(item[s]+ item[s+1]=="IX"){
            total+=IX
             s+=1
        }else if(item[s]+ item[s+1]=="IV"){
            total+=IV
            s+=1
        }else if(item[s]=="V"){
            total+=V
        }else if(item[s]=="X"){
            total+=X
        }else if(item[s]=="L"){
            total+=L
        }else if(item[s]=="C"){
            total+=C
        }else if(item[s]=="D"){
            total+=D
        }else if(item[s]=="M"){
            total+=M
        }else if(item[s]=="I"){
            total+=I
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
  console.log(result);



  
  var mergeTwoLists = function(list1, list2) {

    let arr=[]
    for (var i=0; i<list2.length; i++){
        if(list1[i]<list2[i]){
            arr.push(list1[i])
        }
        if(list1[i]==list2[i]){
            arr.push(list1[i])
        }
        arr.push(list2[i])
    }
    console.log("aijaj", arr)
    
  
    // // Output: [1,1,2,3,4,4]
} 
let list1 = [1,2,4]
let list2 = [1,3,4]
    
    // mergeTwoLists(list1, list2)



    function removeDuplicates(arrOfNum) {
        const set = new Set(arrOfNum);
        console.log("set", [...set])
        // return [...set];
    }
    // removeDuplicates([1,1,2])




    // function triangle(){
    //     let star="";
    //     for (var i=0; i<5; i++){
    //         for (var j=0; j<i; j++){
                
    //             let newstar="*"
    //             // console.log(j + " ", newstar)
    //             star+=" "
    //             // console.log(star)
    //         }
    //     }
    // }
    // triangle(5)

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
        for (let i = n - 2; i >= 0; i--) {
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
      printDiamond(5);




      //scope example
var username="rahul"
function userinfo(){
   username= "aijaj";

}

console.log("username", username)


userinfo()