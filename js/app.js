// // 1 VARIABLES
// let x;
// x = 123;
//
// let y = 200;
//
// console.log(x);
// console.log(y);
//
//      // Data types number
// let age = 25;
// let price = 100.99;
// let gpa = 2.1;
//
// console.log(typeof price);
// console.log(`you are ${age} years old`);
// console.log(`the price is €${price}`);
// console.log(`your gpa is ${gpa}`);
//
//      // String (series of characters)
// let firstname ='Jef'
// let favoriteFood = 'pizza'
// let email ='jef@gmail.com';
//
//      // Bolean (true or not) mostly used with if statements
// let online = true;
// let carForSale = false;
// console.log(typeof online);
// console.log(`bro is online: ${online}`)
// console.log(`is this car for sale: ${carForSale}`)
//
//      // DISPLAY ON HTML
// document.getElementById("h1").textContent = firstName;
// document.getElementById("h1").textContent = age;
// document.getElementById("h1").textContent = `You are ${age} years old`;
//



// 2 ARITHMETIC OPERATORS
//              operands (values, variables , etc.)
//              operators(+ - * /)
//              ex. 11 = x + 5;
// let students = 30;
// students = students + 1; add
// students = students - 1 subtract
// students = students * 2 multiply
// students = students / 2 divide
// students = students ** 3 to the power of, exponent operator
// students = students % 4; modulus operator 30 % 4 = 2 (28-30)
// let extraStudents = students % 4
// console.log(extraStudents);
//
// Shortcut to writing these expressions
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 3;
// students %= 4;
//
// students++; increment with 1
// students--; decrement with 1
//



// 3 TYPECONVERSIONS
// //        from ... to number: Number()
// //        from ... to number: String()
// //        from ... to number: Boolean()
// let age = '25'
// age = Number(age);
// age += 1;
// console.log(typeof age);
// console.log(age);
// //
// let x = "pizza";
// let y = "pizza";
// let z = "pizza";
//
// x = Number(x);
// y = String(y);
// z = Boolean(z);
//
// console.log(x, typeof x); // Not a number
// console.log(y, typeof y); // already a string
// console.log(z, typeof z); // true because truthy



// // 4 Constants
//        const = a variable that can't be changed
// const pi = 3.14159
// let radius = 10;
// let circumference;
//
// circumference = 2 * pi * radius;
// console.log(circumference);




// // 5 Math = built-in object that provides a collection of properties and methods
// console.log(Math.PI);

// let x= 3.2;
// let y= 2;
// let z= 0;

// z = Math.round(x); // round to nearest number
// z = Math.ceil(x); // rounds up
// z = Math.floor(x); // rounds down
// z = Math.trunc(x); // erase the decimals
// z = Math.pow(x,y); // raise to the power of , so x to the power of y
// z = Math.sqrt(x)
// z = Math.abs(x) // -3.2 becomes 3.2
// z = Math.ceil(Math.abs(x)) // combine 2
// console.log(z)

// let max = Math.max(x,y,z); // show the highest
// let min = Math.min(x,y,z); // show the lowest
// console.log(max);
// console.log(min);

// random number exc
// .random generates between 0-1
// let randomNum = Math.random();

// generate between 1-6
// let randomNum = Math.floor(Math.random()*6) + 1;
// console.log(randomNum);

// generate between 50 - 100
// let randomNum = Math.floor(Math.random() *50) + 50;
// console.log(randomNum);




// 6 IF STATEMENTS
//      if condition is true, execute code, if not ... do something else

// let age = 15
//   if (age <= 18) {
//   console.log('underage');
//  }
//   else{
//     console.log('legal age');
//  }

/*
let time = 15;
  if (time < 12) {
  console.log('goodmorning');
  }
  else {
    console.log('goodafternoon');
  }

let age = 17;
let hasLicense = false;
   if(age > 18){
     console.log('old enough to drive')

    if(hasLicense){
       console.log('You can drive!')
   }
     else{
       console.log("You can't drive!")
     }
   }
   else{
     console.log('not old enough to drive')
  }
*/



// 7 TERNARY OPERATOR = a shortcut to if and else statements
//                      helps to assign a var based on a cond
//                      condition ? codeIfTrue : codeIfFalse

// let age = 21;
// let message= age >= 18 ? "you're an adult" : "You're a minor";
//  console.log(message)
//
// let time = 16;
// let greeting = time < 12 ? "Goodmorning" : "Good afternoon";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You're a student": "You're not a student";
// console.log(message);
//
// let purchaseAmount = 200
// let discount = purchaseAmount > 100 ? 0.1: 0;
// let totalDiscountPercentage = discount * 100
// let totalToPay = purchaseAmount - (purchaseAmount * discount);
//
// console.log(`Your total discount is ${totalDiscountPercentage}%`);
// console.log(totalToPay);




// 8 STRING METHODS = allow you to manipulate and work with text (strings)
// let userName = "broCode"
// userName.charAt(0) // return the first letter
// console.log(userName.charAt(0));
// userName.indexOf("o") // where is the first "o"
// console.log(userName.indexOf("o"));
// userName.lastIndexOf("o") // where is the lasst "o"
// console.log(userName.lastIndexOf("o"));
//
// let user = "bro         "
// user = user.trim() // remove spaces
// console.log(user)
// .toUpperCas .toLowerCase is self explanatory

// .repeat to repeat the string (...how many times to repeat...)
// .startswith() will return true or not .endswith() self expl
// .includes() checks if something is included
// let username = "Remo ";
//
// let result = username.includes(" ");
// console.log(result);
//   if (result){
//   console.log("Username can not include a space");
//   }
//   else{
//     console.log("username is okay");
//   }
// .replaceAll ('what you want to replace', "what you want to replace with")
// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll('-',' ');
// console.log(phoneNumber);




// 9 STRING SLICING
//                  creating a substring from a portion of another string
// string.slice(start,end)
// const fullName = "Remy Bonjasky";
// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 19);

// indexOf(" ") show the index where something you are looking for is situated
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);
// let lastName = fullName.slice(fullName.indexOf(" ")+1 );
// console.log(lastName);

// const email = "brate@gmail.com";
// let username = email.slice(0,email.indexOf("@"));
// console.log(username);




// 10 METHOD CHAINING = Calling one method after another in one line of code
// no method chaining
// let userName = window.prompt("What is your username?");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();
//
// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;
// console.log(userName);

// method chaining
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);




// 11 LOGICAL OPERATORS  (used to combine or manipulate boolean values)
// AND = && , OR = || , NOT = !

// && both have to be true check something and something else
// const temp= 20;
// if(temp > 0 && temp <= 30){
//   console.log("it is good");
// }
// else {
//   console.log("it is bad");
// }

// || one of the 2 has to be true
// const temp= 20;
// if(temp <= 0 || temp > 30){
//   console.log("it is bad");
// }
// else {
//   console.log("it is good");
// }
// const isSunny = false;
// if(!isSunny){
//   console.log("it is cloudy");
// }
// else {
//   console.log("it is sunny")
// }



// 12 STRICT EQUALITY OPERATOR
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values and datatype are equal)
// != inequality operator
// !== strict ineq operator

// const pi = 3.14

// if(pi == "3.14"){
//   console.log('that is pi');
// }
// else{
//   console.log('that is NOT pi');
// }

// if(pi === "3.14"){
//   console.log('that is pi');
// }
// else{
//   console.log('that is NOT pi');
// }

// if(pi != "3.14"){
//   console.log('that is NOT pi');
// }
// else{
//   console.log('that is  pi');
// }

// if(pi !=== "3.14"){
//   console.log('that is pi');
// }
// else{
//   console.log('that is NOT pi');
// }



// 13 WHILE LOOPS = repeat some code WHILE some condition is true

// let loggedIn = false;
// let username;
// let password;
//
// while (!loggedIn) {
//   username = window.prompt('enter your username');
//   password = window.prompt('enter your password');
//
//   if(username === 'user123' && password === 'password123'){
//     loggedIn = true;
//     console.log('Logged in');
//   }
//   else{
//     console.log('wrong pass or username');
//   }
// }

// GUESSING GAME
/*
const minimum = 5;
const maximum = 50;
const answer = Math.floor(Math.random() * (maximum - minimum +1) + minimum);
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running){

  guess = window.prompt(`guess a number between ${minimum} and ${maximum}`);
  guess = Number(guess);

  if(isNaN(guess)){
    window.alert("Please enter a valid number")
  }
  else if(guess < minimum || guess > maximum){
    window.alert("Please enter a valid number")
  }
  else{
    attempts++;
    if(guess < answer){
      window.alert("TOO LOW");
    }
    else if (guess > answer){
      window.alert("TOO HIGH");
    }
    else{
      window.alert(`CONGRATS! the answer is ${answer}, it took you ${attempts} attempts`);
      running = false
    }
  }
}
*/


// let username ='123'
// while(username === ''){
//   username = window.prompt('Enter username');
// }
// console.log(`hello ${username}`);



// 14 FOR LOOP = repeat code a limited amount of times

// for(let i = 3; i > 0; i--){
//   console.log(i)
// }
// console.log('happy new year!');


// CONTINUE : SKIP AN ITERATION!
// for(i =1; i <= 20; i++){
//
//   if(i===13){
//     continue
//   }
//   console.log(i)
// }

// BREAK : stop at this iteration
// for(i =1; i <= 20; i++){
//
//   if(i===13){
//     break
//   }
//   console.log(i)
// }




// 15 FUNCTIONS = a section of reusable code
//                Declare code once and use it whenever you want
//                Call the function to execute that code

// function happyBirthday(name, age){
//   console.log('happy b-day!');
//   console.log(`${name}`);
//   console.log(`${age} years old`);
// }
//
// happyBirthday("John", 15);
// happyBirthday('Spongebob', 22)

/*
function add (x, y){
  return result = x + y;
}

let answer = add(2,3);
console.log(answer);
console.log(add(2,9));

function subtract (x, y){
  return x - y;
}
console.log(subtract(2,3));

function isEven(number){
  return number % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(11));

function isValidEmail(email){
  if(email.includes('@') && email.includes('.com')){
    return true;
  }
  else{
    return false;
  }
}

console.log(isValidEmail('nico@gmail.com'))
*/

/*
function isValidEmail(email){
  return email.includes('@') && email.includes('.com') ? true : false  ;
}

console.log(isValidEmail('nico@gmail.om'))
*/





// 16 VARIABLES SCOPES = where a var is recognized and accessible (local vs global)
// let x = 3
//
// function2();
// function function1(){
//   console.log(x);
// }
//
// function function2(){
//   console.log(x);
// }
//
// x = 4
// function1()
//
// // the code is always ran from top to bottom , the local scope is always chosen above the global one



// 17 ARRRRRRRRAAAAAAAAAAAAY
//                 = a var like structure that can hold more than one value

// let fruits= ['apple', 'banana', 'kiwi'];
// console.log(fruits);
// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
//
// fruits[0] = "coconut"
// console.log(fruits[0]); // coconut

// .POP() REMOVES LAST ELEMENT
// fruits.pop();
// console.log(fruits);

// .SHIFT() removes the first one
// fruits.shift()
// console.log(fruits);

// .PUSH("") add element to the end of the array
// fruits.push("grape");
// console.log(fruits);

// .UNSHIFT("") add element to the beginning
//fruits.unshift('mango')
//console.log(fruits);

/*let amountOfFruits = fruits.length;
console.log(amountOfFruits);

let index = fruits.indexOf('kiwi');
console.log(index); // 2*/

/*for(let i=0; i<fruits.length; i++){
  console.log(fruits[i]);
}

for(let fruit of fruits){
  console.log(fruit);
}*/

// SORT METHOD IN AN ARRAY
/*fruits.sort().reverse()

for(let fruit of fruits) {
  console.log(fruit);
}*/



// 18 SPREAD OPERATOR ... = allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)
/*
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

let username = "Nicolas Szpytowski"
let letters = [...username]
console.log(letters);

joinedLetters = letters.join("");
console.log(joinedLetters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];


let food = [...fruits, ...vegetables, "eggs", "milk"];
console.log(food);
*/



// 19 REST PARAMETERS = (...rest) allow a function work with a variable number of arguments by building them into an array

// spread opp  = expands an array to sepr elemnts
// rest opp = bundles separate elements into an array

/*
function openFridge(...foods){ // rest opp
  console.log(foods);
}

function getFood(...foods){ // rest opp
  return foods;
}

const food1 ="pizza"
const food2 ="hamburger"
const food3 ="hotdog"
const food4 ="pierogi"
const food5 ="kebab"

openFridge(food1,food2,food3)

const foods = getFood(food4,food5,food4);
console.log(...foods); // spread opp

function sum(...numbers){
  let result = 0
  for(let number of numbers){
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3 ,4)
console.log(`your total is ${total} euros`)


let numbers = [5,15,120]
function getAvarage(numbers){
  let result = 0;
  for(let number of numbers){
    result += number
  }
  return result/numbers.length;
}

console.log(getAvarage(numbers))

function combineStrings(...strings){
  return strings.join('-');
}

const fullName = combineStrings("Mr","Spongebob","Squarepants","III");
console.log(fullName);
*/



// 20 CALLBACKS = a function that is passed as an argument to another function,
//    used to handle asynchronous operations
//    1. reading a file 2. Network request 3. Interacting databases
/*
hello(leave);

function hello(callback){
  console.log("Hello World!");
  callback();
}

function leave(){
  console.log("leave!");
}

function goodbye(){
  console.log("Goodbye!");
}
//
sum(displayConsole, 1, 11)

function sum(callback, x,y){
  let result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}*/




// 21 FOR EAACH!!!
// array.forEach(callback)
// forEach()= method used to iterate over elements of an array
//            and apply a specific function (callback) to each elemnt

// array.forEach(callback)
// element, index, array are provided

/*
let numbers= [1,2,3,4,5];

numbers.forEach(double)
numbers.forEach(display)

function double(element,index,array){
  array[index] = element *2;
}

function display(element){
  console.log(element);
}

let fruits = ["apple", "orange", "banana", "coco"];
*/

/*fruits.forEach(upperCase)
fruits.forEach(display);

function upperCase (element, index, array){
  array [index] = element.toUpperCase();
}

function displayFruits(element){
  console.log(element)
}*/

/*
fruits.forEach(capitalize)
fruits.forEach(display);

function capitalize(element,index,array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function displayFruits(element) {
  console.log(element)
}

*/



// 22 .MAP() METHOD = accepts a callback and applies that function to each elmnt of an array , then return a new array

/*
const numbers = [1,2,3,4,5,6];

const squares= numbers.map(square)
function square(element){
  return Math.pow(element,2);
}
console.log(squares);

const cubes = numbers.map(cube);
function cube(element){
  return Math.pow(element,3);
}
console.log(cubes);

const students = ["Spongebob", "Patrick","Squidward","Sandy"];
const studentsUpperCase = students.map(makeUpperCase);
function makeUpperCase(element){
  return element.toUpperCase();
}
console.log(studentsUpperCase);

const studentsLowerCase = students.map(makeLowerCase);
function makeLowerCase(element){
  return element.toLowerCase();
}
console.log(studentsLowerCase);

const dates = ["2024-10-1", "2025-20-2","2026-30-3"];
const formatedDates = dates.map(formatDates)

function formatDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
console.log(formatedDates);
*/



// 23 FILTER METHODS .FILTER
//     = create a new array by filtering out elements
/*

let numbers = [1,2,3,4,5,6,7,8,9,10]
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

function isEven(element){
  return element % 2 === 0;
}
console.log(evenNumbers);


function isOdd(element){
  return element % 2 !== 0;
}
console.log(oddNumbers);


const ages = [16,18,17,18,18,19,20,60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

function isAdult(element){
  return element >= 18;
}
console.log(adults);

function isChild(element){
  return element < 18;
}
console.log(children);


const words = ['banana', 'kiwi', 'pierogi', 'cherry', 'coco'];
const shortWords = words.filter(getShortWords);

function getShortWords(element){
  return element.length <= 5;
}
console.log(shortWords);
*/



// 24  OBJECTS  = a collection of related properties and/or methods
//                Can represent a rl wrld objects (ppl, products, places)
//                object = {key:value,
//                          function()}

/*
const person = {
  firstName:"SpongeBob",
  lastName: 'Squarepants',
  age: 30,
  isEmployed: true,
  sayHello: function (){
    console.log('hi! I am Spongebob!')
  },
}

const person2 = {
  firstName: "Patrick",         // String property
  lastName: 'Star',             // String property
  age: 30,                      // Number property
  isEmployed: false,            // Boolean property
  sayHello: function () {       // Method (valid function declaration inside an object)
    console.log('hi! I am Patrick!')
  },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.isEmployed);
person.sayHello();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.isEmployed);
person2.sayHello();
*/

// this = reference to the object where THIS is used
//        (the object depends on the time immediate context)
//        person.name = this.name

/*
const person1 = {
  name: "spongebob",
  favFood: 'hamburger',
  eat: function(){
    console.log(`${this.name} is eating ${this.favFood}`);
  }
}

const person2 = {
  name: "patrick",
  favFood: 'pizza',
  eat: function(){
    console.log(`${this.name} is eating ${this.favFood}`);
  }
}

person1.eat();
person2.eat();
*/

// nested objects = Objects inside of anohter Object.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent object

//                Person{Adress{}, ContactInfo{}}
//                ShoppingCart{Keyboard{}, Mouse {}, Monitor {}}
/*
const person = {
  fullName: 'Spongebob Squarepants',
  age: 30,
  isStudent: true,
  hobbies: ['karate', 'jellyfishing','cooking'],
  adress: {
    street: '124 Conch st.',
    city: "Bikini Bottom",
    country: "Int. waters",
  }
}

console.log(person.fullName);
console.log(person.isStudent);
console.log(person.age);
console.log(person.hobbies[1],',', person.hobbies[2]);
console.log(person.adress);
console.log(person.adress.street);*/





// 25 ARRAY OF OBJECTS!!
/*const fruits = [{name: "apple", color:"red", calories: 105},
                            {name: "coco", color:"white", calories: 65},
                            {name: "orange", color:"orange", calories: 55},
                            {name: "banana", color:"yellow", calories: 135}];

console.log(fruits[1].name);
console.log(fruits[2].calories);

fruits.push({name: "grapes", color: "green", calories: 62});
console.log(fruits);

// fruits.splice(1, 1);
// console.log(fruits);  // Logs the modified array without the second element.

// --- for each
fruits.forEach(function(fruit){
  console.log(fruit.name);
})

// --- map()
const fruitNames = fruits.map(function(fruit){
  console.log(fruit.calories);
})

// --- filter
const orangeFruits = fruits.filter(function(fruit){
  return fruit.color == "orange";
})
console.log(orangeFruits);

const lowCaloriesFruits = fruits.filter(function(fruit){
  return fruit.calories <= 100;
})
console.log(lowCaloriesFruits);

const highCaloriesFruits = fruits.filter(function(fruit){
  return fruit.calories >= 100;
})
console.log(highCaloriesFruits);*/


// SORT() = method used to sort elements of an array in place
//            sorts elements as strings in lexicographic order, not alph
//            lexicograph = (alph + numbers + symbols) as strings

/*
let fruits = ["apple", "banana", "orange", "coco", "kiwi"];
fruits.sort();
console.log(fruits);

let numbers = [8,5,3,4,9,11,99,1,55];
numbers.sort();
console.log(numbers);

const correctSorted = numbers.sort((a,b) => a - b);

const fruitShop = [{name: "apple", color:"red", calories: 105},
  {name: "coco", color:"white", calories: 65},
  {name: "orange", color:"orange", calories: 55},
  {name: "banana", color:"yellow", calories: 135}];

fruitShop.sort((a, b) => a.calories - b.calories);
console.log(fruitShop);

const fruitsWithHigherCalories = fruitShop.filter(function(fruit){
  return fruit.calories <= 75;
})
console.log(fruitsWithHigherCalories);
*/




// 26 CLOSURES!!!!
// a function defined inside another function,
// the inner func has access to var and scopss of the outer func.
// Allow for private var and statement maintenance
// Used frequently in JS frameworks: React, Vue, Angular

/*
function outer(){

  let message = "hello from the oooutsideeeee"
  function inner (){
    console.log(message)
  }
  inner ()
}
message = "I've must called a thousand timeeeeees"
outer()
console.log(message)
*/


// For security let's inclose this in a closure
/*let score = 0;
function increaseScore(points){
  score += points;
  console.log(`+${points}pts`)
}

function decreaseScore(points){
  score -= points;
  console.log(`+${points}pts`)
}

function getScore(){
  return score;
}

increaseScore(150);
increaseScore(250);
decreaseScore(1)
decreaseScore(2)
console.log(`the final score is ${getScore()}`);*/

/*
function createGame(){

  let score = 0;

  function increaseScore(points){
    score += points;
    console.log(`+${points}pts`)
  }

  function decreaseScore(points){
    score -= points;
    console.log(`+${points}pts`)
  }

  function getScore(){
    return score;
  }
  return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(150);
game.increaseScore(250);
game.decreaseScore(1)

console.log(`the final score is ${game.getScore()}`);
*/



// 27 SETTIMEOUT() (callback,delay)
/*

function sayHello(){
  window.alert("Hello World!");
}

// setTimeout(sayHello, 3000);

setTimeout(function() {
  window.alert('CLOSE THIS');
    }, 1000);

*/


