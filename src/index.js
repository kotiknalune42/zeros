module.exports = function getZerosCount(number) {
  if (1 <= number <= 10 ^ 8) {
    // ex: assume number is 6
    var factorial = 1; // of 1 is 1, can't be 0

    for (var i = 2; i <= number; i++) // next starts with 2
      factorial = factorial * i;
    // 2 * 1 = 2; 2 * 2 = 4; 4 * 3 = 12; 12 * 5 = 60; 60 * 6 = 720;
    //factorial of 6 is 720, yay!

    var arr = factorial.toString().split('');

    var zeroes = 0;
    for (zeroes = 0; arr[arr.length - 1] == '0'; zeroes++) {
      arr.splice(-1, 1);
    }

    return zeroes;

  } else {
    return 'Pick smaller number'
  }
}

