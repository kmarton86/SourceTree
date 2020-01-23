//--------------------------------------------
// Tutorial
console.log("hello world")

//--------------------------------------------
//1.
/* Data types:
undefined, null, boolean, string, symbol, number, and object*/
var myName = "Marton"

myName = 8
// let will only be used in the scope it was declared
let myName2 = "Hello"

//const should never be changed*/
const pi = 3.14

console.log("//1.----")
console.log("myName:" + myName + " ,myName2:" + myName2 + " ,pi:" + pi)

//--------------------------------------------
//2.
//Storing values with assignment operator*/

var a; //undefined
var b = 2;
console.log(a)
a = 7;
b = a;
console.log("//2.----")
console.log(a)


//--------------------------------------------
//3.
//initializing variables w/ Assignment Operator

a = 5;
b = 10;
var c = "I am a" ;

a = a + b + 2;
c = c + " String"
console.log("//3.----")
console.log(a)

//--------------------------------------------
//4.
//number operations
var sum = 10 + 0;
var product = 8 * 10;
var quotient = 66/332;
console.log("//4.----")
console.log(quotient)

//incerementing, decrementing
var myVar = 87;
//myVar = myVar + 1;
//myVar++;
myVar--;
console.log(myVar)

//decimal numbers (float)
var ourDecimal = 5.7;
ourDecimal = ourDecimal * 1.1;
console.log(ourDecimal)
var remainder;
remainder = 11 % 3;
console.log("remainder: ," + remainder)

//compound assignment, substraction with augmented addition
a = 3;
b = 17;
//a = a + 12;
a += 12;
//b = 9 + b;
b += 9;
c=21;
//c=c-12;
c -= 12;
d = 4.6;
d *=3.2;
console.log("a: " + a + ", b: " + b + ", c: " + c + ", d: " + d)

//--------------------------------------------
//5.
//Strings
//Escaping Literal quotes
var myStr = "I am a \"double quated\" string";
console.log("//5.----")
console.log(myStr)
//quoting strings with single quotes
var myStr2 = 'https://visualstudio.microsoft.com/free-developer-offers/';
console.log(myStr2)
//escape sequences
/*
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

//concatenating strings
var firstName = "Bela"
var lastName = "Nagy"
var fullName =  firstName + lastName
console.log(fullName)

//find length of String