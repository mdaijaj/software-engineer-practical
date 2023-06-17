
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