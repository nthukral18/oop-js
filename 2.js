function abc(){
    console.log(this);
}
let obj = {
    age : 30,
    bio : abc
}
obj.bio();
// whenever annonymous function inside the objects they are called methods
