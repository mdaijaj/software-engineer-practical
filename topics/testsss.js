function print() {
  setTimeout(function() {
    console.log("print inside setTimeout ");  4
  }, 4000);
  console.log("print");  2
}

setTimeout(function() {
  console.log("inside setTimeout");   3
}, 1000);

console.log("outside setTimeout");    1

print();