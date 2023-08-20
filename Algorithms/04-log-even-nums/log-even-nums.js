// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNum = function (num) {
  let i = 0;
  while (i <= num) {
    if (num % 2 == 0) {
      console.log(i);
    }
    i--;
  }
};
