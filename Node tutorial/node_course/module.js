const xyz = require('./people');//we r retrieving data  from people file directory

//it will give empty {} before exporting
console.log(xyz);
//to get people we have to export it from people.js file the we can get o/p for xyz
console.log(xyz.people, xyz.ages);

//another way
//const {people, ages} = require('./people');
//console.log(people,ages);

//os file is inbuilt in node
const os = require('os');
console.log(os.platform(),os.homedir());


