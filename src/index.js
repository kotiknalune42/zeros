module.exports = function getZerosCount(number) {
  let zeros = 0; // A trailing zero is formed when a multiple of 5 is multiplied with a multiple of 2.
  while ( number > 0) {
    number = Math.floor(number / 5); // round to nearest whole int
    zeros += number
  }
  return zeros;
}
