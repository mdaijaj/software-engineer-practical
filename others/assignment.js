

// let name2 = {
// firstname: "Mahenra sing",
// lastname: "dhoni"
// }
// // let name2 = {
// //     firstname: "Mahenra sing",
// //     lastname: "dhoni"
// // }

//function borrow
// printFullname.call(name2, "bhagalpur", "bihar")


var employee1={
    first_name: "rahul",
    last_name: "rahul@gmail.com",
    displayName: function(){
        console.log(this.firstname + this.lastname)
    }
}

const employee2={
    first_name: "aman",
    last_name: "aman@gmail.com",
    displayName: function(){
        console.log(this.firstname + this.lastname)
    }
}

employee1.displayName.apply(employee2, ["rohit", "kishan"] )  
console.log("employee1", employee1.displayName())
// let data=employee1.apply(employee1.first_name, "Hello", "how are you");
// // employee1.apply(employee2.first_name, "Hello", "how are you");

// // let data())


