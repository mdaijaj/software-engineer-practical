function palindromString(string){   121
    let start=0
    let end=string.length-1
    while(start<end){
      if(string[start]!= string[end]){
        return false
      }
      start++
      end--
    }
    return true
  }
  let strings="123214"
  console.log("kkk", palindromString(strings))