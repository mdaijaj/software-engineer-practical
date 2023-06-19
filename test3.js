// const { EventEmitter } = require("selenium-webdriver");


// let userdata= EventEmitter.emit("user", data)
// console.log("userdata", userdata)




function isAnagram(str1, str2){

    if(str1.length!== str2.length){
        return false
    }

    let counter={}
    for (var char of str1){
        counter[char]=(counter[char] || 0) +1
    }
    console.log("counter", counter)

    for (var item of str2){
        if(!counter[item]){
            return false
        }
        counter[item]-=1
    }
    return true

}

// let checked= isAnagram("aijaj", "ajaji")
// console.log("checked", checked)


//recursion using   total= 5*4*3*2*1
let total=1;
function factorial(number){
    total*= number
    if(number>1){
        factorial(number-1)
    }else if(number==1){
        console.log("total", total)
    }
}

factorial(5)