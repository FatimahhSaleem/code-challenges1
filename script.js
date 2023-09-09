// coding challenge variables and data types

// Q1
// Write a program that outputs the phrase "Hello, world!" to the console.


let print="Hello, world!";
console.log(print);


// Q2.  Write a Program to print this:
// My Name is “Your Name”
// I am Learning JavaScript via Full Stack Bootcamp of DiaaTech
// I will become the best developer by hard work.
// I am making commitment to do code with consistency.


console.log("My Name is Fatima Saleem.I am Learning JavaScript via Full Stack Bootcamp of DiaaTech .I will become the best developer by hard work.I am making commitment to do code with consistency.");


// Variables
// 1. Write a program that declares two variables, one with your name and one with a number value of your age.Concatenate the two variables and output the result to the console.

let myName="Fatima";
let age= 20;

console.log("My name is "+ myName + ". "+ "My age is "+ age);



// 2. Repeat the coding task 2 of output by putting these strings in variables and then outputting variables.



let name="Fatima";
let form="DiaaTech";
let become="developer";

let intro=`My Name is ${name}.I am Learning JavaScript via Full Stack Bootcamp of ${form}.I will become the best ${become} by hard work.I am making commitment to do code with consistency.`;
console.log(intro);


// 3. Initialize two variables and output their sum, minus, multiply and division.

let num1=16;
let num2=7;
console.log("num1: "+num1);
console.log("num2: "+num2);

let sum=Number(num1)+Number(num2);
console.log("Sum: "+sum);
let minus= num1 - num2;
console.log( "Minus: "+minus);

let divide= num1 / num2;
console.log("Divide: "+divide);

let multiply=num1 * num2;
console.log("Multiply: "+multiply);





// BMI
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your Tasks
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.


let johnHeight=1.615;
let johnMass=51;
let MarkHeight= 1.524;
let MarkMass=87;

let markBMI= MarkMass/ (MarkHeight ** 2);
let johnBMI= johnMass/ (johnHeight ** 2);
console.log("Mark BMI "+markBMI);
console.log("John BMI "+johnBMI);

let markHigherBMI=true;
console.log(markHigherBMI);



