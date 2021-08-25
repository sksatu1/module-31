const numbers = [3, 4, 5, 7];
const output2 = [];

/* function doubleIt(number) {
    return number * 2;
} */

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2.for each element from the loop call the provided function
// 3. result from each element will be stored in an array

// const output = numbers.map(doubleIt);
// niser system e full function ke map() er moddhe likhe o korte pari
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);