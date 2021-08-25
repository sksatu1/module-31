// declare variable based on the name of an object property
const myObject = { a: 12, b: 13, c: 14, x: 44, y: 45, z: 51 };
const { x } = myObject;

//----------------------------------------   optional chaining ----------------------------------
console.log('myObject.p = ', myObject?.p?.q);

// destructuring array 
const myArray = [3, 4, 56, 76];

// to get '1st' ,'2nd' and '4th' value of the Array
const [p, q, , r] = myArray;
// console.log(p, q, r);


const company = {
    name: 'gp',
    ceo: { id: 999, name: 'SANAT', food: 'chicken' },
    web: {
        work: 'website development', employee: 22, framework: 'react', tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};

//----------------------------------------   optional chaining 2 --------------------------------
console.log(company?.backend?.tech.third);