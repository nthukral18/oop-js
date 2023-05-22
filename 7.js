import bootCamper from "./6.js";

class instructor extends bootCamper{
    constructor(fName , lName , age , exp){
        super(fName,lName,age)
        this.exp = exp
    }
}

const obj = new instructor("hero","udd",30,3);
console.log(obj);
obj.bio();