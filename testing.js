
const NodeGeocoder = require('node-geocoder');

const findLocation= async()=>{

  fetch('https://maps.googleapis.com/map/api/geocode/json', {
    params: {
      address: "New Delhi",
      key: "AIzaSyAQ_whj_1erp3EJhc-pLDo8anC2w7vtkcA"
    }
  }).then((response)=>{
    console.log('response', response)
    console.log(response.data)
  })
    // const options = {
    //     provider: 'google',
      
    //     // Optional depending on the providers
    //     fetch: 'https://maps.googleapis.com/map/api/geocode/json',
    //     apiKey: 'AIzaSyAQ_whj_1erp3EJhc-pLDo8anC2w7vtkcA', // for Mapquest, OpenCage, Google Premier
    //     formatter: null // 'gpx', 'string', ...
    //   };
      
    //   const geocoder = NodeGeocoder(options);
      // Using callback
    // const res = await geocoder.geocode('29 champs elysée paris');

    // console.log("res", res)
}

findLocation()


setTimeout(() => {
  
}, timeout);


let readline=require("readline-sync"); 


//here is user input 
console.log("Welcome to the Talks to your task constranit of the day:- ");
// let talks=readline.question("Enter your events: ");
// const talksList=[]


// for (var i=0; i<talks; i++){
//     var talkswithtime=readline.question("Enter your talks with time: ");
//     talksList.push(talkswithtime)
// }


const talksList=["study 60min", "breakfast 30min", "python 80min","login thinking 30min", "javascript 90min", "reading bookin 80min", "pair learning 50min", "discussion with friend 40min"]

var startDate = new Date('2022-06-16 09:00:00');
console.log("talksList", talksList)
for(var i=0;i<talksList.length;i++){
    let taketime=parseInt(talksList[i].slice(-5, -3))
    let previoutHour= startDate.getHours()
    let previousMin= startDate.getMinutes()

    startDate.setMinutes( startDate.getMinutes() + taketime );
    var time = startDate.getHours() + ":" + startDate.getMinutes();

    if( (startDate.getHours()>=13) && (startDate.getHours()<14)){ 
        console.log("aijaj", time)
        console.log(`${previoutHour}:${previousMin} - ${time}   Lunch Time`)
    }
    else if(startDate.getHours()>=16 && (startDate.getHours()<17)){
        console.log(`${previoutHour}:${previousMin} - ${time}   Networking Events`)
    }
    
    else{
        console.log(`${previoutHour}:${previousMin} - ${time}   ${talksList[i]}`)
    }
}




//new task
var arr = ["123" , 12, "abc" , 678, "99" , 1234 , "ab1234" , 756];
// output= [123,12,678,1234,756]

let numArr=[];
for (var i=0; i<arr.length; i++){
    let numdata=parseInt(arr[i])

    console.log("numdata", numdata)
    if(numdata!=="NaN"){
        // console.log("numdata", numdata)
        numArr.push(arr[i])
    }
}
console.log("numArr", numArr)




let city="delhi";

let newcity=""
for (var i=city.length-1; i>=0; i--){
    newcity+=city[i]
}
console.log("newcity", newcity)




let persons = [
    {"first_name":"Anup", "last_name":"Kumar"},
    {"first_name":"Manoj", "last_name":"Kumar"},
    {"first_name":"kumar", "address":"abc"}
  ];
  
  
  function search(keyword){
     let $res = [];
  
     for(var i=0; i<persons.length; i++){
      let users=Object.values(persons[i])
          for(j=0; j<users.length; j++){
              if(users[j]==keyword){
                  $res.push(persons[i])
              }
          }
     }
     console.log("$res", $res)
  
     return $res;
  }
  // console.log(search("kumar"));
  //result must be [{"first_name":"Anup", "last_name":"Kumar"}, {"first_name":"Manoj", "last_name":"Kumar"}, {"first_name":"kumar", "address":"abc"}];
  console.log(search("Anup"));
  // result must be [{"first_name":"Anup", "last_name":"Kumar"}]
  console.log(search("XYZ"));
  // result must be []



  


  // var fruit = 'apple'

// {
//   var fruit = 'orange'
//   console.log(fruit) // ??  orange
// }

// console.log(fruit) // ??   apple




// console.log(bar) // ??  refrence error
// var bar = 111
// console.log(bar) //??  111

// let name="aijaj khan";
// let datatype=false
// let user= new Promise(async ( resole, reject)=>{
//     if(name){
//         resole(name)
//     }else{
//         name="please enter name"
//         reject(name)
//     }
// })

// .then((data)=>{
//     console.log("data", data)
// })
// .catch((err)=>{
//     console.log(err)
// })


// let userdata= async ()=>{
//     let name="rahul kumar"
//     let userdata= await new Promise(name)
//     console.log("userdata", userdata)
//     if (userdata){
//         // console.log(userdata)
//         resolve(userdata)
//     }else{
//         // console.log("please enter name")
//         reject("please enter name")
//     } 
// }
// let userInfo= userdata;
// console.log(userInfo)


// let userInfo2= async ()=>{
//     let fetchdata= 
// }



// input1: [ "a","b","c","d","e","f","g","h","i" ]
// input2: 3
// output: [ d,e,f,g,h,i,a,b,c ]

// let data= [ "a","b","c","d","e","f","g","h","i" ]
// let userinput=2;
// let stringdata=""
// let datas;
// for (var i=0; i<=userinput; i++){
//     // datas=data[0]
//     data[data.length-1]= data[i]
//     data[i]= data[i+1]
//     datas=data[data.length-1]
// }
// console.log("stringdata", data)





// let data = ["a","b","c","d","e","f","g","h","i"];
// let userinput = 2;

// for (let i = 0; i <= userinput; i++) {
//   let temp = data[0]; // Store the first element temp value

//   // shift each element to the left position
//   for (let j = 0; j < data.length - 1; j++) {
//     data[j] = data[j + 1];
//   }

//   data[data.length - 1] = temp; // replace the end elment on first variable
// }

// console.log("stringdata", data);









const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000; // Or any port you prefer


const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'AIzaSyAQ_whj_1erp3EJhc-pLDo8anC2w7vtkcA';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';
const SCOPES = 'https://www.googleapis.com/auth/fitness.activity.read';


app.get('/authorize', (req, res) => {
  const authorizationUrl = `https://accounts.google.com/o/oauth2/auth` +
    `?client_id=${CLIENT_ID}` +
    `&redirect_uri=${REDIRECT_URI}` +
    `&scope=${encodeURIComponent(SCOPES)}` +
    `&response_type=code` +
    `&access_type=offline`;
  res.redirect(authorizationUrl);
});



app.get('/callback', async (req, res) => {
  const authorizationCode = req.query.code;
  const tokenUrl = `https://oauth2.googleapis.com/token`;
  const tokenParams = {
    code: authorizationCode,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code'
  };
  try {
    const response = await axios.post(tokenUrl, tokenParams);
    const accessToken = response.data.access_token;
    // Use the access token to make API requests
    // For example, retrieve fitness data
    const fitnessUrl = `https://www.googleapis.com/fitness/v1/users/me/dataSources`;
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };
    const fitnessResponse = await axios.get(fitnessUrl, config);
    const fitnessData = fitnessResponse.data;
    // Handle the fitness data as needed
    res.send(fitnessData);
  } catch (error) {
    console.error('Error retrieving access token:', error);
    res.status(500).send('Error retrieving access token');
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



