
var test = () => console.log("Test Add JS");
var greeting = name => { console.log('Hello ' + name); }

test();
greeting("IZE");

var name = "John", lastName = "Cena"
console.log('My name is ' + name + ' ' + lastName + '.');   // ES 5
console.log(`My name is ${name} ${lastName}.`); // ES 6

//////// ES 5
var add = function (a, b) {
    return a + b;
}

//////// ES 6
var add2 = (a, b) => a + b;


var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);

for (i=0; i<cars.length; i++){
    console.log(cars[i]);
}


//////////////////// JS Objects ///////////////////////
var person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

console.log(person.firstName);
///////////////////////////////////////////////////////

////////////////////// IF /////////////////////////////
x=6;

if(x==5){
    console.log("IF TEST");
}else{
    console.log("ELSE TEST");
}

///////////////////////////////////////////////////////
var x = 9.656;
console.log(x.toExponential(2));     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

var cars = [1,2,3,4,99,6,7,8,9,10];

console.log(Math.max(...cars)); // Needs to have ...
console.log(Math.min(...cars)); // Needs to have ...

console.log( Boolean(10 > 9) );

var d = new Date("2015-03-25");

////////////////////// SORT /////////////////////////////
var points = [40, 100, 1, 5, 25, 10];
var p = points.sort(function(a, b){return a - b});
console.log(p);

var points = [40, 100, 1, 5, 25, 10];
var o = points.sort(function(a, b){return b - a});
console.log(o);
////////////////////////////////////////////////////////

var d = new Date();
console.log(d.getTime());
console.log(d.getMonth()+1);  //The getMonth() method returns the month of a date as a number (0-11):

console.log(d.getDate());
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[d.getMonth()]);
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
//////////////////////////////////////////////////////

var ds = Math.floor(Math.random() * 11) + 1;
console.log(ds);

