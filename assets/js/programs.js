//2-a Diagonal of a square length of each side is 9.
const diagonal = Math.sqrt(2) * 9;
console.log('Diagonal os square ', diagonal);

//2-b Area of a triangle length sides 5,6 and 7
let a = 5,
    b = 6,
    c = 7;
const sides = (a + b + c) / 2;
const area = Math.sqrt(sides * ((sides - a) * (sides - b) * (sides - c)));
console.log('Area of triangel is', area);

//2-3 Circumference and surface area of a circle whose radius is 4.
const radius = 4;
const surfaceArea = radius * radius * Math.PI;
console.log('Surface area is', surfaceArea);

//3-a Program that accepts two integers and display the larger of two
function greaterNumber(a, b) {
    a = 20;
    b = 30;
    if (a >= b) {
        console.log('a=20 is greater than b=30');
    } else {
        console.log('b=30 is greater than a=20');
    }
}
greaterNumber();
//3-b Program to check if the number is even or odd

// const number = prompt("Enter a number: ");
//check if the number is even
if (number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}