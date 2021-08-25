const numbers = [5, 22, 45, 67, 78, 76, 3, 17];
const largeNumber = numbers.filter(number => number > 50);
// console.log(largeNumber);


const products = [
    { name: 'phone', price: 12000, color: 'black' },
    { name: 'smart watch', price: 2000, color: 'silver' },
    { name: 'sticky note', price: 200, color: 'orange' },
    { name: 'water bottle', price: 90, color: 'red' },
    { name: 'water glass', price: 20, color: 'pink' }
]
const expensive = products.filter(product => product.price > 100);
console.log(expensive);

const blackItem = products.find(product => product.color == 'black');
const whiteItem = products.find(product => product.color == 'white');
console.log('black item is -', blackItem);
console.log('white item is -', whiteItem);