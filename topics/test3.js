// questionNo2:
function dominantIndex(nums) {
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
            console.log("maxIndex", maxIndex)
        }
    }
    // console.log("maxIndex", maxIndex)

    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[maxIndex] < nums[i] * 2) {
            return -1;
        }
    }
    return maxIndex;
}
// console.log(dominantIndex([3, 6, 1, 0]));  // Output: 1
console.log(dominantIndex([3, 6, 2, 4]));  // Output: -1
// // arr =[3,6,1,0]
// // output 0;

// // arr =[3,6,2,4]
// // output= -1



// question:3
let arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        console.log("kkk", Array.isArray(arr[i]), arr[i] )
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        } 
    }
    return result;
}

// let flattenedArray = flattenArray(arr2);
// console.log(flattenedArray);




//question:1
function pascals(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]]
    }
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                console.log("firstval", result[row-2][col-1])
                console.log("secondvalue", result[row-2][col])
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    console.log(result)
    return result;
}
// pascals(5);


















var lectures = new Schema({
    name     : String
  , body      : String
  , date      : Date
  });


  var class_tearch = new Schema({
    name     : String
  , body      : String
  , date      : Date
  });
  
  
  var teachers = new Schema({
    id    : ObjectId
  , tearcher_name     : String
  , tearcher_classses  : [class_tearch]
 
  });
  