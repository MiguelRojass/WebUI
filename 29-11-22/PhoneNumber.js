// Create Phone Number
function createPhoneNumber(numbers) {
  const allNumbers = numbers.join('');
  console.log(allNumbers) // Output: '1234567890'
  return `(${allNumbers.slice(0,3)}) ${allNumbers.slice(3,6)}-${allNumbers.slice(6,10)}`; // Output: '(123) 456-7890'
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))