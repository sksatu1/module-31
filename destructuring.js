const fish = { id: '31', name: 'king hilsa', mobile: '01739061955', price: 500, address: 'amshatta', dress: 'silver' };

/* const phone = fish.mobile;
const name = fish.name;
const id = fish.id;
console.log(phone);
console.log(name, id, phone);
console.log(id); */

const { mobile, address, dress } = fish;
// console.log(mobile, address, dress);


// -------------------------------------------------------------------------------------------
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
/* const framework = company.web.framework;
const work = company.web.work;
console.log(framework, work); */

// or ------------------------------------------------------------------------------

const { framework, work } = company.web;
const { food } = company.ceo;
console.log(framework, work);
console.log(food);

const { second, third } = company.web.tech;
console.log(second, third);
