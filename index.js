// word vs keyword

// Datatypes in js
// let name = "Shubham";
// let age = 21;
// let isLOggedIn = true;
// let state = null;

//number
//bigInt
//string
//boolean => true/false
//undefined
//null => standalone value

//object

// console.log(typeof undefined); //undefined
// console.log(typeof null); //object

// let value = 3
// let negValue = -value;
// console.log(negValue);

// let str1 = "Hello";
// let str2 = "Javascript";

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log("1" + "2");
// console.log("1" + 3 + 3);
// console.log(1 + 3 + "2");

//STRINGS IN JS
// const name = "Shubham bora";
// const gameName = "    Resident evil";

// console.log(name);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(3));
// console.log(name.indexOf('a'));
// console.log(name.substring(0,4));
// console.log(name.slice(1,5));
// console.log(gameName.trim());

// ++++++++++++++++++++++++++++++++++Date and Time+++++++++++++++++++++++++++++++++++++++++++++++=

// let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth());

//+++++++++++++++++++++++++++++++++++++++++Arrays+++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myArray = [1,2,3,4,5,6];
// let myHeroes = ["ironman", "logan", "Deadpool"];

// console.log(myArray);
// console.log(myHeroes[1]);

// methods
// myHeroes.push('Spidey');
// myHeroes.pop()
// myArray.shift()
// myArray.unshift(9)
// myArray.slice(1,3)
// myArray.splice(1,3)
// myHeroes.includes('spidey')
// console.log(myHeroes.includes('spidey'));

// let marvelHeros = ["Ironman", "Thor", "Spidey"];
// let dcHeros = ["Superman", "Flash", "Batman"];

// let CollectiveHeros = marvelHeros.concat(dcHeros);
// console.log(CollectiveHeros);

// let mergeArrays = [1,2,3,[4,5,6], 7,8,9, [10,11,12]];
// let newArray = mergeArrays.flat(Infinity)
// console.log(newArray);

//+++++++++++++++++++++++++++++++++++++++++++OBJECTS+++++++++++++++++++++++++++++++++++++++++++++++++++

// let user = {
//     name: "Shubham",
//     "fullname": "Shubham bora",
//     age: 21,
//     location: "Dhampur",
//     email: "sb@gmail.com",
//     isLoggedIn: "False",
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(user.email);
// console.log(user["fullname"]);

// user.email = "Shubhambora.google.com";
// Object.freeze(user);
// console.log(user);

// user.greetings = function(){
//     console.log(`Hello jsUser, ${this.name}`);
// }
// console.log(user.greetings());

// let obj1 = {name: "shubham", age: 21, location: "Dhampur"}
// let obj2 = {name: "Anant", age: 15, location: "Dhampur"}

// let obj3 = {...obj1 , ...obj2}
// console.log(obj3);

//+++++++++++OBJECT DESTRUCTURING
// let course = {
//     name: "Javascript course",
//     instructor: "Shubham",
//     duration: "Three Hours"
// }

// const {duration} =course
// console.log(duration);

//+++++++++++++++++++++++++++++++++++++++++++FUNCTIONS+++++++++++++++++++++++++++++++++++++++++++++++++++

// function myName() {
//     console.log("Shubham bora");
// }

// myName();

// function sum(num1,num2) {
//     return num1 + num2
// }

// let result = sum(5,5);
// console.log(result);

// function userLogin(username){
//     if(!username){
//         console.log("Please enter a name");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(userLogin(''));

// let user ={
//     name: "Shubham bora",
//     price: 40
// }

// function cartCount(getUser){
//     return `Username is ${getUser.name} and price is ${getUser.price}`
// }
// console.log(cartCount(user));

//+++++++++++++++++++++++++++++++++++++++GLOBAL SCOPE & LOCAL SCOPE+++++++++++++++++++++++++++++++++++++++++

// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);

//++++++++++++++++++++++++++++++++++++++++ARROW FUNCTIONS++++++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1,num2) => {
//   return num1 + num2
// }
// console.log(addTwo(5,5));

//IMMEDIATELY INVOKED FUNCTION

// (function chai(){
//     console.log('Coding is my hobby');
// })();

// ((name) => {
//     console.log(`Welcome ${name} to the JS course`);
// })('Shubham')


//++++++++++++++++++++++++++++++++++++++++++CONTROL FLOW+++++++++++++++++++++++++++++++++++++++++++++++++++

// let email = "Shubham@ai.com";

// if(email){
//     console.log('Got the email');
// } else {
//     console.log("Don't have the user email");
// }

//++++++++++++++++++++++++++++++++++++++++++LOOPS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for(i=0; i<=10; i++){
//     console.log(i);
// }

// for(i=1; i<=10; i++){
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + "*" + j + " = " + i*j);
//     }
// }

// let myArray = ["Ironman", "Superman", "Thor", "Raiden", "Sub zero", "Scorpion"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }