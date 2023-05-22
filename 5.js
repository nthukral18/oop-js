function bootCamper (fName , lName , age){
   this.fName = fName,
   this.lName = lName,
   this.age = age
   this.bio = function(){
    console.log(this.fName,this.lName,this.age);
   }
}

const person1 = new bootCamper("nav","thukral",21)
console.log(person1);
person1.bio();