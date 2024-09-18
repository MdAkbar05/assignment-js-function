// 1. Calculate the difference between two numbers
function calculateDifference(a, b) {
  return a - b;
}

// 2. Check if a number is odd
function isOdd(num) {
  return num % 2 !== 0;
}

// 3. Find the smallest number in an array
function findMin(arr) {
  return Math.min(...arr);
}

// 4. Filter even numbers from an array
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// 5. Sort an array of numbers in descending order
function sortArrayDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

// 6. Lowercase the first letter of a string
function lowercaseFirstLetter(str) {
  if (str.length === 0) return str; // handle empty string
  return str[0].toLowerCase() + str.slice(1);
}

// 7. Count the number of vowels in a string
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}

// 8. Find the average of numbers in an array
function findAverage(arr) {
  if (arr.length === 0) return 0; // handle empty array
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

// call every function for test
console.log(calculateDifference(22, 5));

console.log(isOdd(21));

console.log(findMin([10, 20, 30, 40, 50]));

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

console.log(sortArrayDescending([5, 3, 8, 1, 2, 4]));

console.log(lowercaseFirstLetter("Hello World"));

console.log(countVowels("Hello World"));

console.log(findAverage([1, 2, 3, 4, 5]));
