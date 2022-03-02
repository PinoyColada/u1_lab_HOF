/**
 * Utilizing the provided {arr} argument in each function, follow the prompts.
 * In order for the tests to pass, you MUST return the result!
 * The provided arr parameter for the non bonus questions will ALWAYS be an array with numbers from 1-15.
 * The bonus questions will tell you what to expect as an argument.
 */

const getSquares = (arr) => {
  /**
   * Use .map to return an array of all nums multiplied by 2
   */
   let mappedNumbersByTwo = arr.map( (num) => {
    let result = num * 2;
    return result;
  })
  return mappedNumbersByTwo;
}

const isDivBy3 = (arr) => {
  /**
   * Use .map to return an array of booleans, if the number is divisible by 3 return true otherwise false
   * * The modulus % operator may be useful *
   */
   let divisBy3 = arr.map( (num) => {
    if (num % 3 === 0) {
      return true;
    } else {
      return false;
    }
  })
    return divisBy3;
}

const filterOdds = (arr) => {
  /**
   * Use .filter to return an array of all odd numbers
   * * The modulus % operator may be useful *
   */
  let onlyOdds = arr.filter((num) => {
    if (num % 2 !== 0){
      return num;
    }
  });
  return onlyOdds;

}

const filterEvens = (arr) => {
  /**
   * Use .filter to return all even numbers
   * * The modulus % operator may be useful *
   */
   let onlyEvens = arr.filter((num) => {
    if (num % 2 === 0){
      return num;
    }
  });
  return onlyEvens;
}
const filterDivBy4 = (arr) => {
  /**
   * Use .filter to return all numbers that are divisible by 4
   * * The modulus % operator may be useful *
   */
   let divisBy4 = arr.filter((num) => {
    if (num % 4 === 0){
      return num;
    }
  });
  return divisBy4;
}
const addAllUp = (arr) => {
  /**
   * Use .reduce to return the total sum of all numbers
   */
  let totalSum = (arr).reduce((accumulator, value) => {
    return accumulator + value;
  });
  return totalSum;
}
const multiplyAllNums = (arr) => {
  /**
   * Use .reduce to return the total product of all numbers
   */
   let productSum = (arr).reduce((accumulator, value) => {
    return accumulator * value;
  });
  return productSum;
}

// BONUS
const sumSquareAllNums = (arr) => {
  /**
   * Use .reduce to return the total sum of each number to the second power
   * @param {[Number]} arr will contain numbers from 1-15
   * Your final result should be 1240
   */
   let secondPowerSum = (arr).reduce((accumulator, value) => {
    return accumulator + Math.pow(value, 2);
  });
  return secondPowerSum;

}
const addAllAges = (arr) => {
  /**
   * Use .reduce to return the total sum of all ages in the provided arr
   * The arr parameter contains:
      { name: 'Carl', age: 30 },
      { name: 'Cara', age: 10 },
      { name: 'Carmen', age: 15 }
    ]
    Your final result should be 55
   */

    function sumOfAges(arr, age) {
      return arr.reduce(function(accumulator, value) {
        (accumulator[value[age]] = accumulator[value[age]] || []).push(value);
        return accumulator;
      }, {});
    };

    return sumOfAges;
}
// BONUS

module.exports = {
  getSquares,
  isDivBy3,
  filterOdds,
  filterEvens,
  filterDivBy4,
  addAllUp,
  multiplyAllNums,
  sumSquareAllNums,
  addAllAges
}
