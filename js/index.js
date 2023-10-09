console.log("I love me");

let a = 6;
let b = 10;

let total = a + b;

console.log(total);

function greeting(firstName) {
    //console.log(firstName);
    return "hello baby girl " + firstName;
};

function addition(number1, number2) {
    //console.log (number1+number2);
    return number1 + number2;
}


function conversation() {
    greeting("Makhosi");
    greeting("Stubin")
    console.log("How are you");
    console.log("Goodbye");

}


addition(409, 78);
addition(76, 2);

function surname(lastName) {
    return "my last name is " + lastName;
};




const age = function (age) {
    return "my age is " + age;

}

age(3);

//constructor function starts with a capital letter
function Book() {

}

const myBook = new Book();
const hisBook = new Book()

// Immediately-invoked function expression
//(function(){
// code goes here

//}())

//arrow function 
//const multiply = () => {
//return 2 * 2

//}
// you can copy online the arrow function but be careful of the variable (e.g multiply) above.

// to minise the arrow function
const multiply = () => 2 * 2;

console.log(multiply());


//objects

const person1 = {
    firstName: "Makhosi",
    lastName: "Mabusa",
    eye: 2,
    legs: 2,
    // to create a method inside an object we use a function property not arrow.
    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

person1.getFullName();   // call the method

const person2 = {
    name: "Love",
    eye: 1,
    legs: 3
};

const book = {
    title: "",
    author: "",
    yearOfPublication: ""

};



console.log(person1.name); //dot notation
console.log(person1["legs"]); //bracket notation

person1.name = "Lils";
console.log(person1);

const personA = {
    firstName: "Makhosi",
    likes: "reading books"
};

console.log(personA);

const personB = personA;

console.log(personB);

console.log("Before");
console.log(personA.firstName);
console.log(personB.firstName);

personB.firstName = "Coco";
personB.likes = "hiking";

console.log(personB);

/*console.log("After");
console.log(personA .firstName);
console.log(personB .firstName);*/

// modulus is the remainder of a number 

const modulus = a % b;

console.log("Modulus of a and b : " + modulus);

// exponentiation 

const apple = "two";
const orange = "two";

console.log(apple === orange);

const eyes = 2;
const legs = "two";
console.log(eyes == legs); // double = sign will check for value , #type coersion

console.log(eyes !== legs);

let age1 = 33;
const minDAge = 17;

let oldenoughToDrive = age1 >= minDAge;

console.log("are you old enough to drive? " + oldenoughToDrive);

age1 = 54;

oldenoughToDrive = age1 >= minDAge;


console.log("are you old enough to drive? " + oldenoughToDrive);

// if and else statements 

if (age1 >= minDAge) {
    console.log("you can definitely drive"); // it runs when the condition is true all the time.
} else {
    console.log("you have some growing up to do lol"); // else will run when the condition is false
}

//ternary operator , shortcut for if statements 

age1 >= minDAge
    ? console.log("you can definitely drive") // ? is for when the condition is true 
    : console.log("you have some growing up to do lol"); // : is the else part of the if condition

// if else if statements 

score = 30;

if (score > 90) {
    console.log("A+")
} else if (score > 80 && score <= 90) {
    console.log("A");
} else if (score > 70 && score <= 80) {
    console.log("B");
} else if (score > 60 && score <= 70) {
    console.log("C");
} else if (score > 50 && score <= 60) {
    console.log("D");
} else if (score > 40 && score <= 50) {
    console.log("E");
} else if (score > 30 && score <= 40) {
    console.log("F");
} else if (score > 20 || score <= 25) {
    console.log("you may have chance");
} else {
    console.log("Fail, retake the class");
}


score >= 100
    ? console.log("A+")
    : console.log("better luck next time");





// logical operators AND (&& cant use and on java so need to use &&), OR (||), NOT (!)
// And (&&) results in true when all the conditions returns true 
// OR (||) results in true when atleast one of the conditions returns true



// switch statements are a short version of if else if statements 
x = 2 + 2;

/*switch (x) {
    case 3:
        alert("too small");
        break;

    case 4:
        alert("exactly");
        break;

    case 5:
        alert("too large");
        break;

    default:
        alert("no such values");
}*/

// while loop 

let i = 1; // starting point
total = 0;


while (i <= 10) {
    // code you want to write
    total = i; // first iteration, total = 1,2,3,4,5,6,7,8,9,10
    console.log("total:" + total);
    i = i + 1; // increments the i so for a loop to work
}

Math.random() // to generate a random number 

let g = 1;

while (g < 10) {
    console.log(Math.random());
    g = g + 1;
}

//for loop 

for (let i = 5; i <= 20; i += 5) {   // can also do i++ instead of i = i+1, this is only for a +1
    //do something
    total = i;
    console.log("total:" + total);
}

// i =i + 5 can also be written as i+=5 works the same 
// Math.floor makes a number whole and Math.random generates number from 0-1. If you want more random numbers use Math.random() * 20
for (let g = 1; g < 10; g++) {
    console.log(Math.floor(Math.random() * 10));
}


// do while loop will check first check for the curly braces. it will always be implemented once
i = 1;
do {
    // do something
    total = i;  // total = 1,2,3,4,5,6,7,8,9,10
    console.log("total:" + total);
    i++
} while (i < 4); // condition


// Arrays

let namesArray = ["Makhosi", "Khanya", "Lils", "Love"];
// arrays are 0 indexed. the first element of an array starts with 0 instead of 1

let personArray = ["Makhosi", "Mabusa", 33, 5.55, { canDance: false }]

console.log(namesArray[3]);

console.log(personArray[4].canDance)

console.log("the number of elements inside the names' Array" + namesArray.length);

for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}



// codecademy practice 

let userName = '';
userName = "Coco"
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'What will you eat today?';
console.log("hello " + userName + ', ' + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

eightBall = randomNumber;

/*switch (eightBall) {
  case 1:
  console.log('It is certain');
  break;
  case 2:
  console.log(' It is decidedly so');
  break;
  case 3:
  console.log('Reply hazy try again');
  break;
  case 4:
  console.log('Cannot predict now');
  break;
  case 5:
  console.log('Do not count on it');
  break;
  case 6:
  console.log("My sources say no");
  break;
  case 7:
  console.log('Outlook not so good')
  break;
  case 8:
  console.log("Signs point to yes");
  break;
  default:
  console.log('this eightball is not for you.Give up');
  break;
};*/




if (eightBall === 1){
  console.log('It is certain')
} else if( eightBall === 2) {
  console.log('It is decidedly so')
} else if( eightBall === 3) {
  console.log('Reply hazy try again')
} else if(eightBall === 4 ) {
   console.log('Cannot predict now')
}else if (eightBall =5) {
  console.log('Do not count on it')
}else if (eightBall === 6) {
  console.log("My sources say no")
}else if ( eightBall === 7) {  
  console.log('Outlook not so good')
} else if ( eightBall === 8){
  console.log("Signs point to yes")
}else  {
  console.log('this eightball is not for you.Give up')
};