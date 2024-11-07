// square patern

// let n=4;
// for (var i=0; i<n; i++){
//     let ptr1=""
//     for (var j=1; j<=n; j++){
//         ptr1+="*" + " "
//     }
//     console.log(ptr1)
// }

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
//  or 
// * * * * 
// * * * * 
// * * * * 
// * * * * 



// let n=3;
// let char = '@';  //using ascai value inc   @ 64 value and 65 "A"
// let inc=1;
// for (var i=0; i<n; i++){
//     let ptr1=""
//     for (var j=1; j<=n; j++){
//         let incrementedChar = String.fromCharCode(char.charCodeAt(0) + inc++);
//         ptr1+=incrementedChar + " "
//     }
//     console.log(ptr1)
// }
// output
// A B C 
// D E F 
// G H I 




// let n=3;
// let number=1;
// for (var i=0; i<n; i++){  //outer loop  me how many line
//     let ptr1=""
//     for (j=1; j<=n; j++){   //inner loop me how many element
//         ptr1+= number++ + " "
//     }
//     console.log(ptr1)
// }
// output
// 1 2 3 
// 4 5 6 
// 7 8 9 




// let n=4;
//     let char='A'
// for (var i=0; i<n; i++){
//     let ptr1=""
//     for (var j=1; j<n+1; j++){
//         let char = '@';  //using ascai value inc   @ 64 value and 65 "A"
//         let incrementedChar = String.fromCharCode(char.charCodeAt(0) + j);
//         ptr1+=incrementedChar + " "
//     }
//     console.log(ptr1)
// }


//star tringle patern
// let n=5;
// for (var i=0; i<n; i++){
//     let ptr1=""
//     for (var j=0; j<i+1; j++){    //inner loop limit outpuer loop range
//         ptr1+= "*"
//     }
//     console.log(ptr1)
// }

// ouput
// *
// **
// ***
// ****
// *****


// let n=5;
// for (var i=0; i<n; i++){
//     let ptr1=""
//     for (var j=0; j<i+1; j++){    //inner loop limit outpuer loop range
//         ptr1+= i+1
//     }
//     console.log(ptr1)
// }
// output:-
// 1
// 22
// 333
// 4444
// 55555



let n=4;
let char = '@';  //using ascai value inc   @ 64 value and 65 "A"
for (var i=0; i<n; i++){
    let ptr1=""
    for (var j=0; j<i+1; j++){
        let incrementedChar = String.fromCharCode(char.charCodeAt(0) + i+1);  //same things
        ptr1+=incrementedChar + " "
    }
    console.log(ptr1)
}
// output
// A 
// B B 
// C C C 
// D D D D 


// let n=4;
// for (var i=0; i<n; i++){
//     let ptr1=""
//     for (var j=1; j<i+1; j++){    //inner loop limit outpuer loop range
//         ptr1+= j
//     }
//     console.log(ptr1)
// }
// output:-
// 1
// 12
// 123
// 1234


//reverse patern
// let n=3;
// for (var i=0; i<=n; i++){
//     let ptr1=""
//     for (var j=i+1; j>0; j--){    //inner loop limit outpuer loop range
//         ptr1+= j
//     }
//     console.log(ptr1)
// }
// 1
// 21
// 321
// 4321

// //floyd's triangle patern
// let n=4;
// let inc=1;
// for (var i=0; i<=n; i++){
//     let ptr1=""
//     for (var j=1; j<i+1; j++){    //inner loop limit outpuer loop range
//         ptr1+= inc++
//     }
//     console.log(ptr1)
// }
// output:-
// 1
// 23
// 456
// 78910