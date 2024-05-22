//chp#1
//question#1
alert("Welcome to the javascript")
//question#2
alert("Error! Please enter a Valid Password")
//question#3
alert("Welcome To Js Land\n Happy Coding")



//chp#2
//question#1
var username;

//question#2
var myName = "jhone doe"

//question#3a,b,c
var message = "Hello world"
alert(message)


// //question#4
var student_data= "Tanzeel Haq"
var age = 31
alert(student_data);
alert("my age is" + "" + age)


// //question#5
var pizza = "PIZZA\n PIZZ\n PIZ\n PI\n P"
alert(pizza);

// //question#6
var email = "example@example.com"
alert("my address is" + "" + email)



//question#7
var iam =  "I am trying to learn from the Book A smater\n way to learn javascript"
alert(iam);

//question#8
  var textToDisplay = "Yah! I can write HTML content through javascript"
  document.write(textToDisplay + "<br>");



//chp# 3
//question#1
var age = 31
alert(age)

//question#2
var time = 14
alert("You have visited this site : " + "14" + "times" )

// //question#3
var brithyear = "25/12/1993"
document.write(brithyear + "<br>");


//question#4
var name = "tanzeel haq!";
var buy = "ordered 5  (T-shirts )";
var store = "xyzclothing.com";
document.write(name + " " +  buy + " " + store );

//chp#4
//question#1
// var username , $myvar , _variable;

//question#2
// var $myvar;
// var variable;
// var _Name;
// var name123;
// var myName;

// var 12name;
// var !Exlamation;
// var vf#gg;
// var vg=ef;
// var /ghf;

//question#3
var rule = "<h1> Rules for naming js variable </h1>"
document.write(rule);
var poo = "Variable name can only contain , number $ and _ .for example : $my_ 1stVariable"
var woo = "Variable must begin with a letter, $ or _ .for example: $name,_ name or name"
var too = "Variable name are case sensitive"
var yoo = "Variable name should not be js keywords"
document.write(poo + "<br>" + woo + "<br>" + too + "<br>" + yoo + "<br>");


//chp#5
//quetion#1
var num = 3 + 5;
document.write("The sum of 3 and 5 is : " + num + "<br>");

// //qeustion#2
var num = 3 - 5;
document.write("The substraction of 3 and 5 is : " + num + "<br>");

var num = 3 * 5;
document.write("The multiplication of 3 and 5 is : " + num + "<br>");


var num = 3 / 5;
document.write("The division of 3 and 5 is : " + num + "<br>");


var num = 3 % 5;
document.write("The modules of 3 and 5 is : " + num + "<br>");


// //question#3
var after = "Value after variable declaration is undefined"
var after2 = "Intial value: 5"
var after3 = "Value after increment is: 6"
var after4 = "Value after addition is: 13"
var after5 = "Value after decrement is: 13"
var after6 = "The reminder is: 0"
document.write(after + "<br>" + after2 + "<br>" + after3 + "<br>" + after4 + "<br>" + after5 + "<br>" + after6 + "<br>");


//question# 4
var ticketPrice = 600;
var buyingPrice = ticketPrice*5;
document.write("Your TotalAmount Of Movie Tickets is : " + buyingPrice + "<br>");

//question#5
  var number = prompt("Enter a number to generate its multiplication table:");
  number = parseInt(number);

  document.write("<h3>Multiplication Table of " + number + "</h3>");
  document.write("<table border='1'>");
  for (var i = 1; i <= 10; i++) {
    document.write("<tr>");
    document.write("<td>" + number + " x " + i + "</td>");
    document.write("<td>=</td>");
    document.write("<td>" + (number * i) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");

// //qustion#6
  var celsiusTemp = 25;
  var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

  document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

  var fahrenheitTemp2 = 77;

  var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
  document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C" + "<br>");

//question#7
var priceItem1 = 650;
var priceItem2 = 100; 
var quantityItem1 = 3; 
var quantityItem2 = 7; 
var shippingCharges = 100; 

var totalCostItems = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2);

var totalCostWithShipping = totalCostItems + shippingCharges;

console.log("Price of item 1: $" + priceItem1);
console.log("Price of item 2: $" + priceItem2);
console.log("Ordered quantity of item 1: " + quantityItem1);
console.log("Ordered quantity of item 2: " + quantityItem2);
console.log("Shipping charges: $" + shippingCharges);
console.log("Total cost of items: $" + totalCostItems);
console.log("Total cost including shipping: $" + totalCostWithShipping);


//question#8
var mark = "<h1>Mark Sheet</h1>" + "<br>";
document.write(mark);
var Obt_marks = 804;
var tt_marks = 980;
document.write("The Student persontage is : " + (Obt_marks/tt_marks * 100) .toFixed(2) + "%" + "<br>");


//question#9
var title = "<h1>Currency in Pkr</h1>"
document.write(title);
var totalRupees = (10 * 280) + (25 * 75);
document.write("Total amount in Pakistani Rupees: " + totalRupees + "<br>");

//question#10
var number = 10;
var result = (((number + 5) * 10) / 2);
console.log("Result: " + result);

//question#11
var currentYear = new Date().getFullYear();
var birthYear = 1993; 
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old." + "<br>");

//question#12
var the = "<h1>The Geometrizer"
document.write(the + "<br>");
var radius = 20; 
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);
document.write("The Radius of a Circle" + radius + "<br>");
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2) + "<br>");

// // //chp#6
// // //question#1
var num = 10;
document.write("The Value Of a is : " + num + "<br>");

var num = 10;
++num;
document.write("The Value Of ++a is : " + num + "<br>");
document.write("Now the value of a is: " + num + "<br>");

var num = 10;
num++;
document.write("The Value Of a++ is : " + num + "<br>");

var num = 11
++num
document.write("Now the value of a is: " + num + "<br>");

var num = 12;
--num;
document.write("The Value Of --a is : " + num + "<br>");
document.write("Now the value of a is: " + num + "<br>");


var num = 12;
num--;
document.write("The Value Of a-- is : " + num + "<br>");


//question# 2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is" + a + "<br>" + "b is" + b +"<br>");
document.write("result is" + result);

//QUESTION #3

function greetUser() {
    var name = prompt("Enter your name:");
    alert("Hello, " + name + "! Welcome!");
}

greetUser();


// //QUESTION #5

function displayMultiplicationTable() {

    var number = prompt("Enter a number:");


    number = parseInt(number);

    if (isNaN(number) || number <= 0) {
        number = 5;
    }

    var table = "<h2>Multiplication Table of " + number + "</h2>";

    for (var i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "<br>";
    }

    // document.getElementById("multiplicationTable").innerHTML = table;
}

displayMultiplicationTable();


// //question #6a

function getSubjectNames() {
    var subject1 = prompt("Enter the name of subject 1:");
    var subject2 = prompt("Enter the name of subject 2:");
    var subject3 = prompt("Enter the name of subject 3:");
    console.log("Subject 1: " + subject1);
    console.log("Subject 2: " + subject2);
    console.log("Subject 3: " + subject3);

}

getSubjectNames();

// //question #6b

function getSubjectNamesAndTotalMarks() {
    var subject1 = prompt("Enter the name of subject 1:");
    var subject2 = prompt("Enter the name of subject 2:");
    var subject3 = prompt("Enter the name of subject 3:");


    var totalMarks1 = 100;
    var totalMarks2 = 100;
    var totalMarks3 = 100;

    console.log("Subject 1: " + subject1 + ", Total Marks: " + totalMarks1);
    console.log("Subject 2: " + subject2 + ", Total Marks: " + totalMarks2);
    console.log("Subject 3: " + subject3 + ", Total Marks: " + totalMarks3);

}


getSubjectNamesAndTotalMarks();

// //question #6c

function getSubjectMarks() {
    var subject1 = prompt("Enter the name of subject 1:");
    var subject2 = prompt("Enter the name of subject 2:");
    var subject3 = prompt("Enter the name of subject 3:");

    var totalMarks1 = 100;
    var totalMarks2 = 100;
    var totalMarks3 = 100;

    var obtainedMarks1 = prompt("Enter the obtained marks for " + subject1 + ":");

    console.log("Subject 1: " + subject1 + ", Total Marks: " + totalMarks1 + ", Obtained Marks: " + obtainedMarks1);
    console.log("Subject 2: " + subject2 + ", Total Marks: " + totalMarks2);
    console.log("Subject 3: " + subject3 + ", Total Marks: " + totalMarks3);

}

getSubjectMarks();



// question #6d

function getSubjectMarks() {
    var subject1 = prompt("Enter the name of subject 1:");
    var subject2 = prompt("Enter the name of subject 2:");
    var subject3 = prompt("Enter the name of subject 3:");

    var totalMarks1 = 100;
    var totalMarks2 = 100;
    var totalMarks3 = 100;

    var obtainedMarks1 = prompt("Enter the obtained marks for " + subject1 + ":");
    var obtainedMarks2 = prompt("Enter the obtained marks for " + subject2 + ":");
    var obtainedMarks3 = prompt("Enter the obtained marks for " + subject3 + ":");

    console.log("Subject 1: " + subject1 + ", Total Marks: " + totalMarks1 + ", Obtained Marks: " + obtainedMarks1);
    console.log("Subject 2: " + subject2 + ", Total Marks: " + totalMarks2 + ", Obtained Marks: " + obtainedMarks2);
    console.log("Subject 3: " + subject3 + ", Total Marks: " + totalMarks3 + ", Obtained Marks: " + obtainedMarks3);

}

getSubjectMarks();

// //question #6E


function calculateResult() {
    var subject1 = prompt("Enter the name of subject 1:");
    var subject2 = prompt("Enter the name of subject 2:");
    var subject3 = prompt("Enter the name of subject 3:");

    var totalMarks1 = 100;
    var totalMarks2 = 100;
    var totalMarks3 = 100;

    var obtainedMarks1 = prompt("Enter the obtained marks for " + subject1 + ":");
    var obtainedMarks2 = prompt("Enter the obtained marks for " + subject2 + ":");
    var obtainedMarks3 = prompt("Enter the obtained marks for " + subject3 + ":");

    var totalMarks = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
    var percentage = (totalMarks / (totalMarks1 + totalMarks2 + totalMarks3)) * 100;

    var table = "<h2>Result</h2><table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
    table += "<tr><td>" + subject1 + "</td><td>" + totalMarks1 + "</td><td>" + obtainedMarks1 + "</td></tr>";
    table += "<tr><td>" + subject2 + "</td><td>" + totalMarks2 + "</td><td>" + obtainedMarks2 + "</td></tr>";
    table += "<tr><td>" + subject3 + "</td><td>" + totalMarks3 + "</td><td>" + obtainedMarks3 + "</td></tr>";
    table += "<tr><td><b>Total</b></td><td><b>" + (totalMarks1 + totalMarks2 + totalMarks3) + "</b></td><td><b>" + totalMarks + "</b></td></tr>";
    table += "<tr><td><b>Percentage</b></td><td colspan='2'><b>" + percentage.toFixed(2) + "%</b></td></tr>";
    table += "</table>";

    // document.getElementById("result").innerHTML = table;
}

calculateResult();


// //chp# 9-11//
// question # 1
function greetUser() {
    var city = prompt("Enter the name of your city:");

    if (city.toLowerCase() === "karachi") {
        alert("Welcome to the city of lights!");
    } else {
        alert("Welcome!");
    }
}

greetUser();


// //question #2

function greetUser() {
    var gender = prompt("Enter your gender (male/female):");

    gender = gender.toLowerCase();

    if (gender === "male") {
        alert("Good morning sir.");
    } else if (gender === "female") {
        alert("Good morning ma'am.");
    } else {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
}

greetUser();

// question # 3

function showTrafficMessage() {
    var color = prompt("Enter the color of the road traffic signal (red/yellow/green):");

    color = color.toLowerCase();

    switch (color) {
        case "red":
            alert("Must Stop! The signal is red.");
            break;
        case "yellow":
            alert("ready to move! The signal is about to turn yellow.");
            break;
        case "green":
            alert("Go ahead! The signal is green.");
            break;
        default:
            alert("Invalid input. Please enter 'red', 'yellow', or 'green'.");
    }
}

showTrafficMessage();


// //question # 4
function checkFuel() {

    var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

    if (remainingFuel < 0.25) {
        alert("Please refill the fuel in your car.");
    } else {
        alert("You have sufficient fuel in your car.");
    }
}

checkFuel();


// //question # 6

function calculateGrade() {
    var marksSubject1 = parseFloat(prompt("Enter the marks obtained in subject 1:"));
    var marksSubject2 = parseFloat(prompt("Enter the marks obtained in subject 2:"));
    var marksSubject3 = parseFloat(prompt("Enter the marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter the total marks:"));

    var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // document.getElementById("result").innerHTML = "Percentage: " + percentage.toFixed(2) + "%<br>Grade: " + grade;
}

calculateGrade();


// //question #7
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// const userGuess = parseInt(prompt("I've picked a number between 1 and 10. Can you guess what it is?"));

// if (userGuess === secretNumber) {
//     alert("Congratulations! You guessed the secret number.");
// } else {
//     alert(`Sorry, the secret number was ${secretNumber}. Better luck next time!`);
// }

// //question7A

const secretNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("I've picked a number between 1 and 10. Can you guess what it is?"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else {
    alert(`Sorry, the secret number was ${secretNumber}. Better luck next time!`);
}


// //question#7B

// const secretNumber = Math.floor(Math.random() * 10) + 1;

// const userGuess = parseInt(prompt("I've picked a number between 1 and 10. Can you guess what it is?"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert(`Sorry, the secret number was ${secretNumber}. Better luck next time!`);
// }


// //question# 8

// const number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));

// if (number % 3 === 0) {
//     alert(`${number} is divisible by 3.`);
// } else {
//     alert(`${number} is not divisible by 3.`);
// }


// //question # 9

// // const number = parseInt(prompt("Enter a number to check if it's even or odd:"));

// // if (number % 2 === 0) {
// //     alert(`${number} is an even number.`);
// // } else {
// //     alert(`${number} is an odd number.`);
// // }

// //quetion# 10A

const temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else {
    alert("The temperature is fine.");
}

// //question # 10 B

// const temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// if (temperature > 30) {
//     alert("The weather today is normal.");
// } else {
//     alert("The temperature is fine.");
// }

// //question # 10C

// const temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// if (temperature > 20) {
//     alert("Today's weather is cool.");
// } else {
//     alert("The temperature is fine.");
// }

// //question #10 D

// // const temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// // if (temperature > 10) {
// //     alert("OMG! Today's weather is cool.");
// // } else {
// //     alert("The temperature is fine.");
// // }


// //question # 11

const num1 = parseFloat(prompt("Enter the first number:"));

const num2 = parseFloat(prompt("Enter the second number:"));

const operator = prompt("Enter the operator (+, -, *, /, or %):");

// let result;
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero";
    }
} else if (operator === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Cannot divide by zero";
    }
} else {
    result = "Invalid operator";
}

alert(`Result: ${result}`);


// //chp# 12 - 13

//question# 1 

function checkCharacterType(char) {

    if (!isNaN(parseInt(char))) {
        console.log(char + " is a number.");
    }
    else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        console.log(char + " is an uppercase letter.");
    }
    else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        console.log(char + " is a lowercase letter.");
    }
    else {
        console.log(char + " is not a number, uppercase letter, or lowercase letter.");
    }
}
var inputChar = prompt("Enter a character:");
checkCharacterType(inputChar);


// //question # 2

function compareIntegers(num1, num2) {
    if (num1 === num2) {
        console.log("The two integers are equal.");
    } else if (num1 > num2) {
        console.log(num1 + " is larger than " + num2 + ".");
    } else {
        console.log(num2 + " is larger than " + num1 + ".");
    }
}
var input1 = parseInt(prompt("Enter the first integer:"));
var input2 = parseInt(prompt("Enter the second integer:"));
compareIntegers(input1, input2);


// //question#3

function checkNumber(number) {
    if (number > 0) {
        console.log(number + " is positive.");
    } else if (number < 0) {
        console.log(number + " is negative.");
    } else {
        console.log("The number is zero.");
    }
}
var userInput = parseFloat(prompt("Enter a number:"));
checkNumber(userInput);


// //question # 4

function isVowel(char) {
    char = char.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}
var userInput = prompt("Enter a character:");
var result = isVowel(userInput);
console.log("Is the character a vowel? " + result);

// //question # 5

var correctPassword = "password123";
var userPassword = prompt("Enter your password:");
if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// //question # 6

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


// //question # 7

var timeInput = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));
if (timeInput >= 0 && timeInput <= 2359) {
    var hour = Math.floor(timeInput / 100); 
    var minute = timeInput % 100; 

    var meridiem;
    if (hour >= 12) {
        meridiem = "pm";
        if (hour > 12) {
            hour -= 12;
        }
    } else {
        meridiem = "am";
        if (hour === 0) {
            hour = 12;
        }
    }
    var formattedTime = hour + ":" + (minute < 10 ? "0" + minute : minute) + meridiem;
    console.log("The time in 12-hour clock format is:", formattedTime);
} else {
    console.log("Invalid time input. Please enter a time between 0000 and 2359.");
}


// // CHP# 14-16

// //question # 1

var studentNames = [];

// //question #2
var studentNames = new Array();

// //question # 3

var stringsArray = ["apple", "banana", "orange", "grape"];

var stringsArray = [];
stringsArray.push("apple");
stringsArray.push("banana");
stringsArray.push("orange");
stringsArray.push("grape");

// //question # 4

var numbersArray = [1, 2, 3, 4, 5];

var numbersArray = [];
numbersArray.push(1);
numbersArray.push(2);
numbersArray.push(3);
numbersArray.push(4);
numbersArray.push(5);


// //question # 5

var booleanArray = [true, false, true, false];

var booleanArray = [];
booleanArray.push(true);
booleanArray.push(false);
booleanArray.push(true);
booleanArray.push(false);


// //question # 6

var mixedArray = ["apple", 123, true, "banana", false];

var mixedArray = [];
mixedArray.push("apple");
mixedArray.push(123);
mixedArray.push(true);
mixedArray.push("banana");
mixedArray.push(false);

// //question # 7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");


// //question # 8

var studentNames = ["John", "Emily", "Michael"];

var scores = [320, 230, 480];

var totalMarks = 500;

var percentages = [];
for (var i = 0; i < scores.length; i++) {
    percentages.push((scores[i] / totalMarks) * 100);
}

console.log("Student Scores and Percentages:");
for (var i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i] + ": Score - " + scores[i] + ", Percentage - " + percentages[i] + "%");
}


// //question # 9

var colors = ["red", "green", "blue"];

document.write("<h3>Original Array:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);

document.write("<h3>Array after adding color to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);

document.write("<h3>Array after adding color to the end:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.unshift("yellow", "orange");

document.write("<h3>Array after adding two more colors to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


colors.shift();


document.write("<h3>Array after deleting the first color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


colors.pop();

document.write("<h3>Array after deleting the last color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
var colorToAddAtIndex = prompt("Enter a color to add at index " + indexToAddColor + ":");
colors.splice(indexToAddColor, 0, colorToAddAtIndex);

document.write("<h3>Array after adding a color at a specific index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var indexToDelete = parseInt(prompt("Enter the index to delete color(s) from:"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

document.write("<h3>Array after deleting color(s) at a specific index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// //question # 10

var studentScores = [85, 72, 93, 68, 77];

console.log("Original array:", studentScores);

studentScores.sort(function(a, b) {
    return a - b;
});

console.log("Sorted array in ascending order:", studentScores);


// //question # 11

var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

var selectedCities = [];

selectedCities = cities.slice(0, 3);

console.log("Selected cities:", selectedCities);

//question # 12

var arr = ["This ", " is ", " my ", " cat"];

var singleString = arr.join("");

console.log(singleString);

// //question # 13

var fifoQueue = [];

function enqueue(value) {
    fifoQueue.push(value);
}

function dequeue() {
    return fifoQueue.shift();
}

enqueue(10);
enqueue(20);
enqueue(30);

console.log("Dequeued item:", dequeue()); 
console.log("Dequeued item:", dequeue()); 

// //question # 14

var lifoStack = [];

function push(value) {
    lifoStack.push(value);
}

function pop() {
    return lifoStack.pop();
}

push(10);
push(20);
push(30);

console.log("Popped item:", pop());                 
console.log("Popped item:", pop()); 


// //question # 15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");


// //chp # 17-20

// //question # 1

var multiArray = [];

multiArray.push([]);
multiArray.push([]);
multiArray[0].push(1, 2, 3);
multiArray[1].push("a", "b", "c");

console.log(multiArray);

// //question # 2

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// //question # 3

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// //question # 4


var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the table length:"));

console.log("Multiplication Table of", tableNumber, "up to", tableLength, "terms:");

for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
}


// //question # 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items of the array:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// //question # 6
function generateSeries() {
    var counting = "";
    var reverse = "";
    var even = "";
    var odd = "";
    var series = "";

    for (var i = 1; i <= 15; i++) {
        counting += i + ", ";
    }

    for (var i = 10; i >= 1; i--) {
        reverse += i + ", ";
    }

    for (var i = 0; i <= 20; i += 2) {
        even += i + ", ";
    }

    for (var i = 1; i <= 19; i += 2) {
        odd += i + ", ";
    }


    for (var i = 1; i <= 10; i++) {
        series += (2 * i) + "k, ";
    }


//     // document.getElementById('counting').textContent = counting;
//     document.getElementById('reverse').textContent = reverse;
//     document.getElementById('even').textContent = even;
//     document.getElementById('odd').textContent = odd;
//     document.getElementById('series').textContent = series;
}


generateSeries();

// //question # 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
    var lowerCaseItem = item.toLowerCase();

    for (var i = 0; i < A.length; i++) {
        var lowerCaseArrayItem = A[i].toLowerCase();

        if (lowerCaseArrayItem === lowerCaseItem) {
            console.log(item + " is found in the list.");
            return;
        }
    }

    console.log(item + " is not found in the list.");
}

var userInput = prompt("Enter an item to search:");

searchItem(userInput);


// //question # 8

var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]; 
    }
}

console.log("The largest number in the array is:", largest);

// //question # 9

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]; 
    }
}

console.log("The smallest number in the array is:", smallest);

// //question # 10

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i); 
    }
}

// //chp# 21-25

// //quaetion # 1

var firstName = prompt("Enter your first name:");

var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");



// //question# 2

var favoriteModel = prompt("What is your favorite mobile phone model?");

var lengthOfInput = favoriteModel.length;

document.write("<h2>The length of your input is: " + lengthOfInput + "</h2>");

//question#3

var word = "Pakistani";

var indexOfN = word.indexOf("n");

document.write("<h2>The index of letter 'n' in the word 'Pakistani' is: " + indexOfN + "</h2>");


// //question#4

var word = "Hello World";

var lastIndex = word.lastIndexOf("l");

document.write("<h2>The last index of letter 'l' in the word 'Hello World' is: " + lastIndex + "</h2>");

// //question#5

var word = "Pakistani";

var characterAtThirdIndex = word.charAt(3);

document.write("<h2>The character at the 3rd index in the word 'Pakistani' is: " + characterAtThirdIndex + "</h2>");

// //question#7

var word = "Hyderabad";

var replacedWord = word.replace("Hyder", "Islam");

document.write("<h2>The result after replacing 'Hyder' with 'Islam' in the word 'Hyderabad' is: " + replacedWord + "</h2>");


// //question# 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var replacedMessage = message.replace(/and/g, "&");

document.write("<h2>The result after replacing all occurrences of 'and' with '&' is: " + replacedMessage + "</h2>");

// //question# 9

var str = "472";

var num = Number(str);

document.write("<h2>Original String: " + str + "</h2>");
document.write("<h2>Converted Number: " + num + "</h2>");
document.write("<h2>Type of Original String: " + typeof str + "</h2>");
document.write("<h2>Type of Converted Number: " + typeof num + "</h2>");


// //question#10

var userInput = prompt("Enter some text:");

var capitalLetters = userInput.toUpperCase();

alert("Your input in capital letters is: " + capitalLetters);


// //question# 11

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

var userInput = prompt("Enter some text:");

var titleCase = toTitleCase(userInput);

alert("Your input in title case is: " + titleCase);


// //question# 12

    var num = 35.36;
    var numAsString = num.toString(); 
    var numWithoutDot = numAsString.replace(".", ""); 
    document.write(numWithoutDot); 

//     //question #13

    function isValidUsername(username) {
        var specialSymbols = ['@', '.', ',', '!'];

        for (var i = 0; i < username.length; i++) {

            if (specialSymbols.includes(username[i])) {
                return false; 
            }
        }
        return true; 
    }

    var username;
    do {
        username = prompt("Enter your username:");
        if (!isValidUsername(username)) {
            alert("Please enter a valid username without special symbols [@ . , !]");
        }
    } while (!isValidUsername(username));

    alert("Username '" + username + "' is valid!");

// //question #14

    var A = ["cake", "apple pie", "cookie", "chips", "patties"];

    function searchItem(item) {
        item = item.toLowerCase();
        for (var i = 0; i < A.length; i++) {
            if (A[i].toLowerCase() === item) {
                return true;
            }
        }
        return false; 
    }

    var userInput = prompt("Enter an item to search:");
    var found = searchItem(userInput);

    if (found) {
        alert("Yes, '" + userInput + "' is found in the list.");
    } else {
        alert("No, '" + userInput + "' is not found in the list.");
    }

// //question# 15

    function isValidPassword(password) {
        var containsAlphabets = /[a-zA-Z]/.test(password);
        var containsNumbers = /[0-9]/.test(password);

        var startsWithNumber = /^[0-9]/.test(password);

        // var isLengthValid = password.length >= 6;

        return containsAlphabets && containsNumbers && !startsWithNumber && isLengthValid;
    }

    var password;
    do {
        password = prompt("Enter your password:");
        if (!isValidPassword(password)) {
            alert("Please enter a valid password that meets the requirements:\n" +
                  "1. It should contain alphabets and numbers.\n" +
                  "2. It should not start with a number.\n" +
                  "3. It must be at least 6 characters long.");
        }
    } while (!isValidPassword(password));

    alert("Password is valid!");

// //question #16
    var university = "University of Karachi";

    var universityArray = university.split(" ");

    document.write("Array Elements:<br>");
    for (var i = 0; i < universityArray.length; i++) {
        document.write(universityArray[i] + "<br>");
    }

//     //question# 17

    var userInput = prompt("Enter a string:");

    if (userInput !== null && userInput !== "") {
        var lastCharacter = userInput.charAt(userInput.length - 1);

        alert("Last character of the input string is: " + lastCharacter);
    } else {
        alert("Invalid input! Please enter a non-empty string.");
    }

//     //question #18

    var sentence = "The quick brown fox jumps over the lazy dog";

    var lowercaseSentence = sentence.toLowerCase();

    var wordToCount = "the";

    var words = lowercaseSentence.split(" ");

    var count = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i] === wordToCount) {
            count++;
        }
    }

    alert("Number of occurrences of '" + wordToCount + "' in the given string: " + count);

// //chp# 26-30
// //question#1

    function promptPositiveInteger() {
        var input;
        do {
            input = prompt("Enter a positive integer:");
            input = parseInt(input);
        } while (isNaN(input) || input <= 0); 
        return input;
    }

    var number = promptPositiveInteger();

    var roundValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);

    document.write("<h2>Number Analysis:</h2>");
    document.write("<p>a. Number: " + number + "</p>");
    document.write("<p>b. Round off value: " + roundValue + "</p>");
    document.write("<p>c. Floor value: " + floorValue + "</p>");
    document.write("<p>d. Ceil value: " + ceilValue + "</p>");


// //question #2

    function promptNegativeFloat() {
        var input;
        do {
            input = prompt("Enter a negative floating point number:");
            input = parseFloat(input);
        } while (isNaN(input) || input >= 0);
        return input;
    }

    var number = promptNegativeFloat();

    var roundValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);

    document.write("<h2>Floating Point Number Analysis:</h2>");
    document.write("<p>a. Number: " + number + "</p>");
    document.write("<p>b. Round off value: " + roundValue + "</p>");
    document.write("<p>c. Floor value: " + floorValue + "</p>");
    document.write("<p>d. Ceil value: " + ceilValue + "</p>");

// //question # 3

    function promptNumber() {
        var input;
        do {
            input = prompt("Enter a number:");
            input = parseFloat(input);
        } while (isNaN(input)); 
        return input;
    }

    var number = promptNumber();

    var absoluteValue = Math.abs(number);

    alert("Absolute value of " + number + " is " + absoluteValue);

// //question # 4

function rollDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1; 
    document.getElementById('dice').textContent = diceValue; 
}
// //question # 5
function tossCoin() {
    var result = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById('coin').textContent = result;
}
// //question# 6
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; 
    document.getElementById('randomNumber').textContent = randomNumber; 
}
// //question# 7
function convertWeight() {
    var userInput = document.getElementById('weightInput').value.trim().toLowerCase();
    var weightInKgs;

    var regex = /(\d+(\.\d+)?)/;
    var match = userInput.match(regex);

    if (match) {
        weightInKgs = parseFloat(match[0]);
        if (userInput.includes('kg') || userInput.includes('kilogram') || userInput.includes('kilograms')) {
            displayResult(weightInKgs.toFixed(2) + " kilograms");
        } else if (userInput.includes('k')) {
            displayResult(weightInKgs.toFixed(2) + " kilograms");
        } else {
            weightInKgs = weightInKgs / 2.20462;
            displayResult(weightInKgs.toFixed(2) + " kilograms");
        }
    } else {
        displayResult("Invalid input");
    }
}

function displayResult(result) {
    document.getElementById('result').textContent = "Your weight is: " + result;
}
// //question#8
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// function checkGuess() {
//     var userInput = parseInt(document.getElementById('userInput').value);
//     if (userInput >= 1 && userInput <= 10) {
//         if (userInput === secretNumber) {
//             document.getElementById('result').textContent = "Congratulations! You guessed the secret number.";
//         } else {
//             document.getElementById('result').textContent = "Sorry, try again!";
//         }
//     } else {
//         document.getElementById('result').textContent = "Please enter a number between 1 and 10.";
//     }
// }


// //chp# 31-34
// //question# 1
function displayDateTime() {
    var currentDate = new Date();
    var dateString = currentDate.toDateString();
    var timeString = currentDate.toLocaleTimeString();
    var dateTimeString = dateString + ' ' + timeString;
    document.getElementById('datetime').textContent = dateTimeString;
}
displayDateTime();
// //question#2
function alertCurrentMonth() {
    var months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); 
    var currentMonthName = months[currentMonth]; 

    alert("The current month is " + currentMonthName);
}

alertCurrentMonth();
// //question#3
function alertCurrentDayAbbreviation() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var currentDate = new Date();
    var currentDay = currentDate.getDay(); 
    var currentDayAbbreviation = days[currentDay]; 
    alert("Today is " + currentDayAbbreviation);
}
alertCurrentDayAbbreviation();


// //question#4
function checkFunDay() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    if (currentDay === 6 || currentDay === 0) {
        alert("It's Fun day!");
    } else {
        alert("It's not Fun day :(");
    }
}
checkFunDay();
// //question# 5
function checkMonthDays() {
    var currentDate = new Date();
    var currentDayOfMonth = currentDate.getDate(); 
    if (currentDayOfMonth <= 15) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }
}
checkMonthDays();
// //question#6

var currentDate = new Date();

var millisecondsSinceEpoch = currentDate.getTime();

var minutesSinceMidnight = millisecondsSinceEpoch / (1000 * 60);

console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceMidnight);

// //question# 7
function checkAMPM() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours(); 
    if (currentHour < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
}
checkAMPM();
// //question#8

var laterDate = new Date('2020-12-31');

laterDate.setDate(32);

var currentDay = laterDate.getDate();

laterDate.setDate(currentDay - 1);

console.log("Later Date:", laterDate);

// //question#9

var ramadanStartDate = new Date('2015-06-18');

var currentDate = new Date();

var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();

var daysPastSinceRamadanStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert("Number of days past since 1st Ramadan: " + daysPastSinceRamadanStart);


// //question#10
function calculateElapsedSeconds() {
    var currentDate = new Date();
    var beginningOf2015 = new Date("January 1, 2015");
    var differenceInMilliseconds = currentDate - beginningOf2015;
    var elapsedSeconds = Math.floor(differenceInMilliseconds / 1000);
    document.write("<h1>Elapsed Seconds</h1>");
    document.write("<p>Seconds elapsed between the reference date and the beginning of 2015: " + elapsedSeconds + " seconds</p>");
}
calculateElapsedSeconds();

// //question#11
function manipulateDate() {
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    currentDate.setHours(currentHours + 1);
    document.write("<h1>Updated Date</h1>");
    document.write("<p>Date and time after resetting an hour ahead: " + currentDate + "</p>");
}
manipulateDate();

// //question#12
function resetDate() {
    var currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    alert("The date 100 years back is: " + currentDate.toDateString());
}
resetDate();



// //question#13
function calculateBirthYear() {
    var age = prompt("Please enter your age:");
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - parseInt(age);
    document.write("<h1>Birth Year</h1>");
    document.write("<p>Your birth year is: " + birthYear + "</p>");
}
calculateBirthYear();



// //question#14
function calculateBill() {
    var numUnits = 100; 
    var chargesPerUnit = 0.15; 
    var netAmount = numUnits * chargesPerUnit;
    var latePaymentSurcharge = netAmount * 0.10;
    var grossAmount = netAmount + latePaymentSurcharge;

    document.getElementById('numUnits').textContent = numUnits;
    document.getElementById('chargesPerUnit').textContent = '$' + chargesPerUnit.toFixed(2);
    document.getElementById('netAmount').textContent = '$' + netAmount.toFixed(2);
    document.getElementById('latePaymentSurcharge').textContent = '$' + latePaymentSurcharge.toFixed(2);
    document.getElementById('grossAmount').textContent = '$' + grossAmount.toFixed(2);
}
calculateBill();
// //chp# 35-38
// //question#1
function displayCurrentDateTime() {
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
    document.write("<h1>Current Date & Time</h1>");
    document.write("<p>" + dateTimeString + "</p>");
}
displayCurrentDateTime();

// //question#2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "! Welcome!");
}
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
greetUser(firstName, lastName);

// //question#3
function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input! Please enter valid numbers.";
    } else {
        var sum = num1 + num2;
        return sum;
    }
}
var result = addNumbers();
alert("The sum of the two numbers is: " + result);

// //question#4
function calculate(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input! Please enter valid numbers.";
    }
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero!";
            }
        default:
            return "Invalid operator! Please enter a valid operator (+, -, *, /).";
    }
}
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");

// var result = calculate(num1, num2, operator);
// alert("The result of " + num1 + " " + operator + " " + num2 + " is: " + result);

// // //question#5
function square(number) {
    return number * number;
  }
  console.log(square(5));   
// //question# 6
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  console.log(factorial(5)); 

// //question# 7

function countNumbers(start, end) {
    if (start > end) {
      console.error("Start number must be less than or equal to end number.");
      return;
    }
    for (let i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  }
  countNumbers(1, 10);


// //question #8

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
      return number * number;
    }
  
    const baseSquared = calculateSquare(base);
    const perpendicularSquared = calculateSquare(perpendicular);
    const hypotenuseSquared = baseSquared + perpendicularSquared;
    const hypotenuse = Math.sqrt(hypotenuseSquared);
  
    return hypotenuse;
  }


// //question#9

function calculateRectangleAreaValue(width, height) {
    return width * height;
  }
  function calculateRectangleAreaVariable() {
    const width = arguments[0];
    const height = arguments[1];
    return width * height;
  }
console.log(calculateRectangleAreaValue(5, 6)); 
console.log(calculateRectangleAreaVariable(5, 6)); 
  

// //question# 10

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  console.log(isPalindrome("madam")); 
  console.log(isPalindrome("hello")); 


// //question# 11

function capitalizeFirstLetter(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedStr = capitalizedWords.join(" ");
  
    return capitalizedStr;
  }
  console.log(capitalizeFirstLetter('the quick brown fox')); 


// //question# 12

function findLongestWord(str) {
    const words = str.split(" ");
  
    let longestWord = "";
    let maxLength = 0;
  
    for (let word of words) {
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
      if (cleanedWord.length > maxLength) {
        longestWord = cleanedWord;
        maxLength = cleanedWord.length;
      }
    }
  
    return longestWord;
  }
  console.log(findLongestWord('Web Development Tutorial')); 


// //question# 13

function countOccurrences(str, letter) {
    const lowercaseLetter = letter.toLowerCase();
    const lowercaseStr = str.toLowerCase();
  
    let count = 0;
  
    for (let char of lowercaseStr) {
      if (char === lowercaseLetter) {
        count++;
      }
    }
  
    return count;
  }
  console.log(countOccurrences('JSResourceS.com', 'o')); 


// //question# 14

function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
  }
  
  function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
  }
  calcCircumference(5); 
  calcArea(5);
