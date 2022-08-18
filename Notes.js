//1. Variables
let userName = "Mulweli"; //String
let surname = "Mushiana";
let age = 26; //Number
let isSmart = true; //Boolean

console.log("Before", userName);

userName = "Motion";

console.log("After", userName);

//2. Objects;
let person = {
  userName: "Mulweli",
  age: 26,
  isSmart: true,
  surname: "Mushiana",
  mother: {
    name: "Shonisani",
    age: 60,
  },
};
console.log(person.surname);

//3. Array;
let myFavourateColours = ["red", "green", "pink", "black"];

const users = [
  {
    userName: "Mulweli",
    age: 26,
  },

  {
    userName: "Poleboii",
    age: 23,
  },
  {
    userName: "Thivhi",
    age: 27,
  },
];
console.log("Before", users);

users[0].userName = "Motion"; //Edit info inside array

console.log("After", users);

users.splice(1, 1); //Remove one object starting from index 1

let newUser = {
  userName: "Poleboii",
  age: 27,
};
users.push(newUser); //Adding a new object into an existing array

console.log("After", users);
