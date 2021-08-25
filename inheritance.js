class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'support web dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}


class StudentCare extends TeamMember {
    designation = 'student care web dev';
    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student);
    }
}


class NeptuneDev extends TeamMember {
    designation = 'neptune app dev';
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}
// support session --------------------------------------
const amir = new Support('amir', 'UK', 3);
const salman = new Support('salman', 'BD', 4);

/* amir.startSession();
salman.startSession(); */

// console.log(amir);
// console.log(salman);

// student care -------------------------------------------
const alia = new StudentCare('Alia bhatt', 'mumbai');
// console.log(alia);

// neptune dev --------------------------------------------
const ash = new NeptuneDev('ash', 'Mumbai', 'androin studio')
ash.releaseApp('1.12.4');
// console.log(ash);


