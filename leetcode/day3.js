var moveZeroes = function(nums) {
    for (let i=0; i<nums.length; i++){
        for (let k=0; k<nums.length-1; k++){
            if(nums[k]==0){
                let temp=nums[k];
                nums[k]=nums[k+1];
                nums[k+1]=temp;
            }
        }
    }
        return nums
        
    };
        let nums=[0,1,0,3,12]
        // moveZeroes(nums)
    

var isSubsequence = function(s, t) {
    for (var i of s){
        if(!t.includes(i)){
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
};

let s="axc"
let t="ahbgdc"
isSubsequence(s,t)
    