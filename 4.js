const person = {
    firstName : "Bill",
    lastName : "Gates",
    fullName : function(){
        return this.firstName + " " + this.lastName ;
    }
}

const obj = {
    firstName : "JOhn",
    lastName : "Doe" 
}
console.log(person.fullName());
let fullName = person.fullName.bind(obj);
console.log(fullName());

