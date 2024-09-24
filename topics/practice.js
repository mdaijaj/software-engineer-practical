let count=0;
function getData(){
    console.log("feting datas", count)
    count+=1
}

//debouncing
function myDebounce(callback, delay){  //debounce
    let timer;
    return function(...args){
        if(timer){    
            clearTimeout(timer)    //when while search user before getting data user type agian then clear time again search .
        }
        timer=setTimeout(()=>{
            return callback()
        }, delay)
    }
}
const betterFunction= myDebounce(getData, 1000);





//Throttling  
function myThottle(newFun, delay){
    return function(...args){
        document.getElementById("myId").disabled=true;
        setTimeout(()=>{
            newFun()
        }, delay)
    }
}

const newfunction= myThottle(()=>{
    document.getElementById("myId").disabled=false;
    console.log("User clicked ...")
}, 5000)




