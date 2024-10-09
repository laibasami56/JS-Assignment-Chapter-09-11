document.write("<h1>CHAPTER : 09 to 11</h1>");

//Question 01 : Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city = prompt(" Question : 01  \n What city do you live in?");

if (city == "karachi" || city == "Karachi") {
    alert("Welcome to city of lights");
}
else {
    alert("Good City");
}


//Question 02 :  . Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


let gender = prompt(" Question : 02 \n which gender are you?");

if (gender == "male") {
    alert("Good Morning Sir");
}
else if (gender == "female") {
    alert("Good Morning Ma'am");
}
else {
    alert("Invaild");
}

//Question 03 : Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


let trafficSignal = prompt(" Question : 03 \n Which color is currently on at the traffic signal?");

if (trafficSignal == "red") {
    alert("Must Stop");
}
else if (trafficSignal == "yellow") {
    alert("Ready to Move");
}
else if (trafficSignal == "green") {
    alert("Move Now");
}
else {
    alert("Invaild color");
}

// Question 04 : Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car” 


// Take input from the user for remaining fuel in liters
var remainingFuel = prompt("  Question : 04 \n Enter the remaining fuel in your car (in liters):");

// Check if the remaining fuel is less than 0.25 liters
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Fuel level is sufficient");
}


// Question 05 : 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


alert(" Question : 05 \n OUTPUT  given condition for variable a is true \n a. No alert for part b \n b.condition 2 is true \n c.condition 4 is true \n d.The cost equals \n e.True\n f.car is smaller than cat ");



// Question 06 : Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


// Storing subject names
var subject1 = 100;
var subject2 = 100;
var subject3 = 100;

// Total marks per subject
var totalMarks = 100;

// Taking obtained marks input from the user for each subject
var marks1 = Number(prompt(" Question : 06 /n Enter obtained marks for " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total marks obtained and percentage
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / (totalMarks * 3)) * 100;

// Determine grade and remarks based on percentage
var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Display the results
alert("Marks Sheet\n" +
    "Total marks: " + (totalMarks * 3) + "\n" +
    "Marks obtained: " + obtainedMarks + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%\n" +
    "Grade: " + grade + "\n" +
    "Remarks: " + remarks);


//Question : 07 Guess game: Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

let hiddenNumber = 8;
let guessNumber = prompt(" Question : 07 \n Guess the number :   \n(Hint: ranging from 1 to 10 ) ");

if(hiddenNumber==guessNumber){
    alert("Bingo! Correct answer");
}
else if (guessNumber=="9"){
    alert("Close enough to the correct answer");
}
else{
    alert(" you Lost the game!  Try Again ");
}

//Question : 08 Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

let number = prompt("Question : 08 \n Enter the any number :  ");
if(number%3==0){
    alert("it is divisble by 3 ");
}
else{
    alert("it is not divisble by 3");
}

// Question:9 Write a program that checks whether the given input is an
// even number or an odd number.

let num = prompt("Question : 09 \n Enter the any number :  ");
if(num%2==0){
    alert("Even number ");
}
else{
    alert("Odd number");
}

// Question: 10 Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = prompt("Question 10 \n Enter the today temperature :  ");
if(temperature>40){
    alert("It is too hot outside.");
}
else if (temperature>30){
    alert("The Weather today is Normal.");
 
}
else if (temperature>20){
    alert("Today’s Weather is cool.");
 
}
else if (temperature>10){
    alert("OMG! Today’s weather is so Cool.");
 
}

// Question: 11 Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// Take input from the user
var firstNumber = Number(prompt("Enter the first number:"));
var secondNumber = Number(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Variable to store the result
var result;

// Using if-else statements to perform the operation
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    // Check if secondNumber is not zero to avoid division by zero
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Error: Division by zero is not allowed.";
    }
} else if (operation === "%") {
    // Check if secondNumber is not zero to avoid modulus by zero
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
    } else {
        result = "Error: Modulus by zero is not allowed.";
    }
} else {
    result = "Error: Invalid operation!";
}

// Display the result to the user
alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
