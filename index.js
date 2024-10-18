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

console.log("Exercise 8 Result:", convertTemperature(32, "f"));
