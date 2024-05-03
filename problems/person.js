class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // INSTANCE METHODS
    sayHello() {
        return `Hello, ${this.name}`;
    }

    visit(person2) {
        return `${this.name} visited ${person2}`
    }

}

// const coolPerson = new Person('Mai', 32);
// console.log(coolPerson.visit('Erin')); // 'Mai visited Erin'


module.exports = Person;
