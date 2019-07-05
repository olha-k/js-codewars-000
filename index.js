// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR08Bm08VNaJaOrSQZodS4evXnHbP7b-lfbI5AK4eqEUzSMv-niPQgvVYnc

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript?fbclid=IwAR02QPAAcuU8yeMDy25r7q3hXZjaPI_WR8Vo92CYfj2aWsvVfxUDFhYCVkM

function whatNumberIsIt(n) {
 if (Number.isNaN(n)) return 'Input number is Number.NaN'
 if (n === Number.MAX_VALUE) return 'Input number is Number.MAX_VALUE'
 if (n === Number.MIN_VALUE) return 'Input number is Number.MIN_VALUE'
 if (n === Number.NEGATIVE_INFINITY) return 'Input number is Number.NEGATIVE_INFINITY'
 if (n === Number.POSITIVE_INFINITY) return 'Input number is Number.POSITIVE_INFINITY'
 else return 'Input number is'+ ' ' + n
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR1iLEx7YDY3ATKTRKliff82nxvxkX3umjWM-AWoOw5FKHFd76aU7MxMCAc

function buildFun(n) {

  var closure = []

  for (let i = 0; i < n; i++) {
    closure[i] = function () {
    return i;
    }
  }
  return closure;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript 

function giveMeFive(obj) {
  var x = [];
  for (var key in obj) {
    if(key.length == 5) x.push(key);
    if(obj[key].length == 5) x.push(obj[key]);
  }
  return x;
}
