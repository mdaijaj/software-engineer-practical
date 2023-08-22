

function Pairsum_target(arr, target) {
    arr.sort();
    console.log("arr", arr)
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] + arr[end] == target) {
            console.log(start, end)
            return start, end
        }
        else if (arr[start] + arr[end] < target) {
            start++
        }
        else {
            end--
        }
    }
    return 0
}

let arr = [7, 8, 4, 2, 5, 9];
let target = 12;
// Pairsum_target(arr, target)




var merge = function (nums1, m, nums2, n) {

    let arr3 = [];
    var i = 0, j = 0, k = 0;
    while (i < m && j < n) {

        // Check if current element of first array is smaller than current element of second array. If yes, 
        // store first array element and increment first array index. 
        // Otherwise do same with second array
        if (nums1[i] < nums2[j]) {
            arr3[k++] = nums1[i++];
        }
        else {
            arr3[k++] = nums2[j++];
        }
    }

    // Store remaining elements of first array
    while (i < m) {
        arr3[k++] = nums1[i++];
    }

    // Store remaining elements of second array

    while (j < n) {
        arr3[k++] = nums2[j++];
    }
    console.log("arr3", arr3)
};

let arr1 = [1,2,3,0,0,0]
let arr2 = [2,5,6]

console.log("arr1", arr1.indexOf(0))
// merge(arr1, arr1.indexOf(0), arr2, arr2.length);



var removeElement = function(nums, val) {
    let arr=[]
    let index=0;
    for (var i of nums){
        if(i!=val){
           arr.push(i)
        }
    }
    console.log(arr);
    return arr
};


let nums= [3,2,2,3]
let val= 3;
// removeElement(nums, val)






