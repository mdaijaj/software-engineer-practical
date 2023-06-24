

// const userdata= (username, callback)=>{
//     callback(username)
// }

//  function callback(username){
//     console.log("username", username)
//     return username
// }

// userdata("kishan", callback)


const userData= new Promise((resolve, reject)=>{
    let username="";

    if(username){
        resolve(username) 
    }else{
        reject("please enter user name")
    }
})
.then((item)=>{
    console.log("item", item)
})
.catch((err)=>{
    console.log("please enter user name")
})

// console.log("userData", userData)



// const {username, email, phone}=  req.body;

let arr1=[]

let username="prince";


username="priyanka"
console.log("username", username)


// user
// post
// lookup{ 
//     localfield id 
//     forignfield postid

// }


