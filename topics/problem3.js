//maximum sum of any contiguous subarray
let arr=[1,2,6,2,4,1]
let max_sum=0;
for (var i=0; i<arr.length-2; i++){
    let current_sum= arr[i] + arr[i+1] + arr[i+2];
    console.log(i)
    if(current_sum>max_sum){
        max_sum=current_sum;
    }
}
console.log(max_sum)




