// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10
const min = (x, y) => {
    if (x <= y) {
        return x;
    }
    else {
        return y;
    } 
};
console.log(min(0,10));
console.log(min(0,-10));
// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4
const circumference = diameter => {
    const pi = 3.14;
    return pi * diameter;
}
console.log(circumference(5));
// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
const searchString = (letter, word) => {

  let numberCount = 0;
    for (let i = 0; i <= word.length -1; i++)
        if(numberCount[i] == letter) {
            numberCount++;
        }
        return numberCount;
};
console.log(searchString("s", "mississippi"));

/* 
Easy way out: 
let string = "mississippi";
console.log(string.[1]); // I
*/
