// let hello = {
//      age : 30,
//      name : navigator,
//      bio : function(){
//        return {
//         aa :1
//        }
//      }
// }

// hello.bio()
// console.log(hello);

const person = {
    fName : "Ateeq",
    lName : "Uddin",
    age : 30,
    bio : function(){
        console.log(this)
        return {
            aa : 1,
            bb : 2,
            cc : function(){
                console.log(this);
            }
        }
    }
}

person.bio().cc();