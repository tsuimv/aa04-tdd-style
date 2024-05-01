// Your code here 
const chai = require('chai')
const expect = chai.expect
const { returnsThree, reciprocal,  } = require(`../problems/number-fun`)

describe('returnsThree', () => {
    it('should return 3', () => {
        expect(returnsThree()).to.equals(3)
    })
})

describe('reciprocal', () => {
    it('should return reciprocal', () => {
        const num1 = 10
        const num2 = 3
        const num3 = 5

        expect(reciprocal(num1)).to.equal(1/num1)
        expect(reciprocal(num2)).to.equal(1/num2)
        expect(reciprocal(num3)).to.equal(1/num3)
    })
    it('should intake ONLY numbers 1 between 1,000,000', () => {
        const num4 = 100
        // const num5 = 2000000

        if ((num4 < 1) || (num4 > 1000000)) {
            expect(reciprocal(num4)).to.throw(RangeError)
        }
        // if ((num5 < 1) || (num5 > 1000000)) {
        //     expect(reciprocal(num5)).to.throw(RangeError)
        // }
    })
})