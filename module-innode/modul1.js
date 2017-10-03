//variable deklarasi
var name = "M Galang Arbi S";
var age = 21;

//create a Function
function Print() {
    console.log("My name is "+name+" i'am "+age+" years old");
}

//export private variable
module.exports.myName = name;
module.exports.myAge = age;
module.exports.Print = Print();