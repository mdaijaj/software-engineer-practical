

// multiple request handle in nodejs example || handle concurrency
function request(order){
    console.log("order", order)
    response(function (){
        console.log("Delivered Order!", order)
    })
}

function response(callback){
    setTimeout(callback , 5000);
}

request(1)
request(2)
request(3)
request(4)
request(5)



// Events module
// where u can create, fire, and listen for your own Events. once time.

const EventEmitter= require('events');
const event= new EventEmitter()

event.on("saymyname", ()=>{
    console.log("my name is adil khan")
})


event.emit("saymyname")

