
function first(){
  setTimeout(() => {
    console.log("first")
  }, 2000);
}


function second( callback){
  setTimeout(() => {
    callback
  }, 2000);
  console.log("second")
}

function main(){
  setTimeout(() => {
    second(first())
  }, 2000);
  console.log("third")
}

main();
