//call module skill
var skill = require('./skill.js');
//diferent call if u will use object factory, skill now it's a class in new variable
var skill_object = skill();

//Setting Language from empty data
skill_object.language = "NodeJs";
//Showing Galang Arbi Skill on NodeJS
console.log("GalangArbi Skill on "+skill_object.language);