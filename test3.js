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

let checked= isAnagram("aijaj", "ajaji")
console.log("checked", checked)