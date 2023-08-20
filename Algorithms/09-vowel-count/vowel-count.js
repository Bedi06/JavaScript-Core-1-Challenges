// Write code to return the the number of vowels in `str`
const vowels = ["a", "e", "i", "u", "o"];
const strings = "hello";
var vowelCount = function (str) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(vowelCount("hello"));
