/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
  if (age >= 18) {
    return "Adult";
  }
  return "Minor";
};

console.log("Exercise 2 Result:", isAdult(8));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
  const vowelCharacter = "aeiou";
  if (vowelCharacter.includes(char.toLowerCase())) {
    return true;
  }
  return false;
};

console.log("Exercise 3 Result:", isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (nameParameter, domain) => {
  if (domain.includes(".com")) {
    let email = nameParameter + "@" + domain;
    return email;
  }
  return "Enter a valid email";
};

console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (userName, dayTime) => {
  dayTime = dayTime.toLowerCase();
  if (
    dayTime === "morning" ||
    dayTime === "afternoon" ||
    dayTime === "evening"
  ) {
    return `Good ${dayTime}, ${userName}`;
  }
  return "Enter a valid dayTime";
};

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (firsNumber, secondNumber, thirdNumber) => {
  if (firsNumber > secondNumber && firsNumber > thirdNumber) {
    return firsNumber;
  }
  if (secondNumber > firsNumber && secondNumber > thirdNumber) {
    return secondNumber;
  }
  if (thirdNumber > firsNumber && thirdNumber > secondNumber) {
    return thirdNumber;
  }
};

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperator, scale) => {
  scale = scale.toLowerCase();
  if (scale === "c") {
    temperator = (temperator * 9) / 5 + 32;
    return temperator;
  }
  if (scale === "f") {
    temperator = ((temperator - 32) * 5) / 9;
    return temperator;
  }
};

console.log("Exercise 8 Result:", convertTemperature(32, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (firsNumber, secondNumber, operand) => {
  operand = operand.toLowerCase();
  if (operand === "add") {
    return firsNumber + secondNumber;
  }
  if (operand === "subtract") {
    return firsNumber - secondNumber;
  }
  if (operand === "multiply") {
    return firsNumber * secondNumber;
  }
  if (operand === "divide") {
    return firsNumber / secondNumber;
  }
};

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80 && score <= 89) {
    return "B";
  }
  if (score >= 70 && score <= 79) {
    return "C";
  }
  if (score >= 60 && score <= 69) {
    return "D";
  }
  return "F";
};

console.log("Exercise 10 Result:", calculateGrade(85));
