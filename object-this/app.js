//deklarasi Object
var myObject = {
    name : "M Galang Arbi S",
    age  : 21,
    //function print
    print : function(){
        //Will printed like "M Galang Arbi S is 21 years old"
        console.log(this.name + " is "+ this.age + " years old");
        //Proof of MyObject with this, will be print true
        console.log(this === myObject);
    }
};

//Outside Function
function myFunction() {
    console.log("Im My Function");
    //if this object is global, will be print true
    console.log(this === global);
}

//show function print
myObject.print();
//Just a Line
console.log("--------------");
//Show myFunction
myFunction();