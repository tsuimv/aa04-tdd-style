const chai = require('chai');
const expect = chai.expect;


const Person = require('../problems/person');

describe('constructor', () => {
    it('should take in a name and an age', () => {
        expect(() => constructor.name).to.exist;
        expect(() => this.name).to.equal(this.name);
        expect(() => constructor.age).to.exist;
        expect(() => this.age).to.equal(this.age);
    })
});

describe('sayHello()', () => {
    it("should return a string of the Person instance's name and a greeting message", () => {
        expect(() => sayHello()).to.equal(`Hello, ${this.name}`);
    })
});

describe('visit(otherPerson)', () => {
    it('should return a string stating that this instance visited the passed-in person', () => {
        let person1 = new Person('Mai');
        let person2 = new Person('Erin');
        expect(() => visit(person2.name)).to.equal(`${person1.name} visited ${person2.name}`)
    })
})
