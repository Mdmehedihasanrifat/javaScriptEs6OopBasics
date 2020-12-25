console.log(2+10-19+4 -90+1);
console.log(-20 + -19 - (-10) - (-1) + 24);
console.log((10/5) * 4 - 20);
console.log(4096 % 12);
console.log("hello+5*10");
console.log("hello"+5*10);
console.log("green">"Green");

//variable

let a=5;
let b=6;
//String

let Food="rice";


console.log(Food);



/*
 * Programming Quiz: String Equality for All (2-4)
 *
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `answer`
 * 2. Your code should have "ALL Strings are CrEaTeD equal" on the left side
 * 3. Your code should use `==` comparison operator
 * 4. The comparison should evaluate to true
 * 5. The right side of your expression should match the left side
 */

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);


/*
 * Programming Quiz: All Tied Up (2-5)

 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/
var joke ="Why couldn't the shoes go out and play?\n\
They were all \"tied\" up!";
console.log(joke);

/*
 * Programming Quiz: Yosa Buson (2-6)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 */

var haiku = "Blowing from the west"+"\nFallen leaves gather"+"\nIn the east."
console.log(haiku);


console.log("3">1);

console.log(3!="3");
console.log(3===3);
console.log(true>=0);
console.log(1!==false);
console.log("false"===0);


/*
 * Programming Quiz: Semicolons! (2-8)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */


let thingOne="hello";
let thingTwo="World";

console.log(thingOne+thingTwo);


/*
 * Programming Quiz: Out to Dinner (2-10)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */

// your code goes here


var bill=10.25 + 3.99 + 7.15;
var tip=bill*.15;


var total=bill+tip;
console.log("$"+total.toFixed(2));

/*
 * Programming Quiz: MadLibs (2-11)
 *
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

// your code goes here
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

var madLib="\"The Intro to JavaScript course is "+adjective1+".James and Julia are so"+adjective2+". I cannot wait to work through the rest of this"+adjective3+" content!\"";
console.log(madLib);