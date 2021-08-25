const friends = ['Asad', 'Sohel', 'MD Robin', 'SkSatu', 'Mahmudul'];
// system 1 
// const nameLength = friend => friend.length;
// const output = friends.map(nameLength);

// system 2
const output = friends.map(friend => friend.length);

console.log(output);


const products = [
    { name: 'phone', price: 12000, color: 'black' },
    { name: 'smart watch', price: 2000, color: 'silver' },
    { name: 'sticky note', price: 200, color: 'orange' },
    { name: 'water bottle', price: 90, color: 'red' },
    { name: 'water glass', price: 20, color: 'pink' }
]

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productNames);
console.log(productPrice);

// products.map(product => console.log(product));
products.forEach(product => console.log(product));