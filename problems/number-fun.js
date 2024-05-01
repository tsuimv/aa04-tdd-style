function returnsThree() {
  return 3
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new RangeError('Number is not between 1 to 1,000,000')
  }

  return 1/n 
}

console.log(reciprocal(1000))

module.exports = {
  returnsThree,
  reciprocal
};
