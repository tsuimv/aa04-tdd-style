const chai = require('chai');
const expect = chai.expect;


const reverseString = require('../problems/reverse-string');
describe('reverseString', () => {
    it('should return string reversed', () => {
        expect(reverseString('fun')).to.equal('nuf');
    })
    it('should throw a TypeError if not a string', () => {
        const number = 5;
        const array = ["i", "am", "an", "array"];
        const object = { i: "am", an: "object" };
        const string = "i am a string";

        if(typeof number === 'number') {
            expect(() => reverseString(number)).to.throw(TypeError);
        }
        if(Array.isArray(array)) {
            expect(() => reverseString(array)).to.throw(TypeError);
        }
        if(typeof object === 'object') {
            expect(() => reverseString(object)).to.throw(TypeError);
        } else
        if(typeof string !== 'string') {
            expect(() => reverseString(string)).to.throw(TypeError);
        }
    })
})










// template from AA04-unit testing
// it("should throw an error if num is not type of Number", () => {
//     const string = "i am a string";
//     const object = { i: "am", an: "object" };
//     const array = ["i", "am", "an", "array"];

//     expect(() => isOdd(string)).to.throw(Error);
//     expect(() => isOdd(object)).to.throw(Error);
//     expect(() => isOdd(array)).to.throw(Error);
//   });
// });
