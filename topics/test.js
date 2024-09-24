


// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);

//7 Print -> 1 2 3 using async await
const printNum = async () => {
    console.log(1);
    await new Promise((resolve) => setTimeout(() => {
        console.log(2);
        resolve();
    }, 1000));
    console.log(3);
}
// printNum()



//8 Call by reference:
let person = { name: 'Alice', age: 30 };
// let age=26   variable not update but object update
function updateAge(p) {
    p.age++;
}
// updateAge(person);
// console.log(person.age); // Output: 31



// 11 print diamond 
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
for (let i = n - 2; i >= 0; i--){
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
// printDiamond(5);



// // 5 4 3 2 1
// // 5 4 3 2
// // 5 4 3
// // 5 4 
// // 5



let k=0;
for (var i=5; i>k; i--){
    let partern=""
    for (var j=i; j>k;  j--){
        partern+= j + " "
    }
    k+=1
    i+=1
    console.log(partern)
}


let obj1= {
    "name": "User1",
    "age": 30,
    "city": "Hyderabad"
  }
  let obj2 ={
    "name": "User1",
    "age": 25,
    "country": "India"
  }
  
  for (const item in obj1) {
    console.log(item)
  }
  
  
//   let mainarr=[];
//   for (const [key, value] of Object.entries(obj1)) {
  
//   for (const [key2, value2] of Object.entries(obj2)) {
//       console.log(value, value2)
//       if(value!=value2){
        
//       }
//   }
  
//   }
//   console.log(mainarr)
  
  //     let data2=Object.values(obj2)
  //     let data1=Object.values(obj1)
  //     let data3=Object.keys(obj2)
  //     let data4=Object.keys(obj1)
  
  
  //     let mainarr=[];
  // // for (let item of data2){
      
  //     for (var i=0; i<data2.length; i++){
  //       let data=data1.includes(data2[i])
  //         if(!data){
  //           let single= data3[i]
  //             let other= data4[i]
  //             mainarr.push(single)
  //             mainarr.push(other)
  //         }
  //     }
      
  //     console.log(mainarr)
  

  
//4 sorting merge two arr
var mergeTwoLists = function (list1, list2) {

    let arr = []
    for (var i = 0; i < list2.length; i++) {
        if (list1[i] < list2[i]) {
            arr.push(list1[i])
        }
        else if (list1[i] == list2[i]) {
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