class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    go = ()=> {
        console.log(this.name + " is going");
    }
}

class Student extends Person {
    constructor(name, age){
        super(name, age);
    }

    study = () => {
        console.log(this.name + " is studying");
    }

    go = () => {
        console.log(this.name + " don't go");
    }
}

class Teacher extends Person {

    static Id = 100;

    constructor(name, age){
        super(name, age);
    }

    teach = () => {
        console.log(this.name + " is teaching");
    }
}

let studentHoang = new Student();
studentHoang.name = "Hoang";
console.log(studentHoang.name);
studentHoang.go();
studentHoang.study();