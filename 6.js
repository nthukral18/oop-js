class bootCamper{
    constructor(fName , lName , age){
        this.fName = fName,
        this.lName = lName,
        this.age = age
    }
    bio(){
        console.log(this.fName, this.lName, this.age);
    }
}
//const person1 = new bootCamper("nav","thukral",21);
//console.log(person1);

export default bootCamper