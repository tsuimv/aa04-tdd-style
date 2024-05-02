function reverseString(string) {
  if(typeof string === 'number') {
    throw new TypeError('thats a number, string arg must be a string')
  }
  if(Array.isArray(string)) {
    throw new TypeError('thats an array, string arg must be a string')
  }
  if(typeof string === 'object') {
    throw new TypeError('thats an object, string arg must be a string')
  } else
  if(typeof string !== 'string') {
    throw new TypeError('string argument must be a string')
  }


    let result = '';
    for(let i = string.length - 1; i >= 0; i--) {
        let char = string[i];
        result += char;
        // console.log(result);
      }
      console.log(result);
      return result;
};

// let bob = {name: Bob};   // says 'Bob is not defined'

// reverseString(5);
reverseString('fun');
// reverseString([1,2,3]);
// reverseString({});




module.exports = reverseString;
