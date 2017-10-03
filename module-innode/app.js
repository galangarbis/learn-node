//call modul1
var modul1 = require('./modul1.js');
var modul2 = require('./modul2.js');


//show variable from modul1
console.log(modul1.myName + " is " + modul1.myAge + " years old");
modul1.Print;

//show variable and function from modul2
console.log(modul2.name+" ==> "+modul2.age);
modul2.Print();