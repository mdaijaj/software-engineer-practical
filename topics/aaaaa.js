// const fs=require("fs")


let readfileSys= async()=>{
    console.log("readfile function")
}

let writeFsFile= ()=>{
    console.log("write file exe")
    readfileSys()
}


// let writeFsFile= (callback)=>{
//     console.log("write file exe")
//     callback()
// }


const promise= new Promise((resolve, rejected)=>{
    let writedata= writeFsFile()

    if(writedata){
        resolve("promise is resolve", writedata)
    }
    else{
        rejected("there is some error")
    }
})


ElementInternals("message", data)


// // fs.readfileSys(writeFsFile)
// let data=writeFsFile(readfileSys())

// console.log("data", data)



userdata.findall({
    include[{
        model: "prodc",
        forignkey: "userid"
    }]
})

