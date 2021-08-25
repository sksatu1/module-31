class Support {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const amir = new Support('amir', 'UK');
const salman = new Support('salman', 'BD');
amir.startSession();
salman.startSession();
/* console.log(amir);
console.log(salman); */