// 1
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// 2
const multiply = function (num1, num2) {
    return num1 * num2;
};

// 3
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

// 4
const square = (x) => x * x;

// 5
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

// 6
car.start = function () {
    console.log("Engine started!");
};

// 7
function printObject(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// 8
const { make, model } = car;

// 9
const fruits = ["apple", "banana", "orange"];

// 10
fruits.push("grape");
fruits.shift();

// 11
function printFruits(fruitArray) {
    fruitArray.forEach(fruit => console.log(fruit));
}

// 12
function firstLast6(nums) {
    return nums[0] === 6 || nums[nums.length - 1] === 6;
}

// 13
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 14
let num = 2;
while (num <= 8) {
    console.log(num);
    num += 2;
}

// 15
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 16
const temperature = 35;
if (temperature > 30) {
    console.log("It's hot!");
}

// 17
const dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday":
        console.log("It's Monday!");
        break;
    // Add cases for other days...
}


// 18
const number = 15;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

// 19
const truthyExample = "Hello";
const falsyExample = "";
console.log(Boolean(truthyExample));  // true
console.log(Boolean(falsyExample));   // false

// 20
//  const numberToCheck = 15;
if (numberToCheck > 10 && numberToCheck < 20) {
    console.log("Number is greater than 10 and less than 20.");
}
