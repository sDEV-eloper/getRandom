# GetRandom
GetRandom is a lightweight npm package that provides various functions to generate random numbers and strings with different characteristics. This package can be useful in scenarios where you need to generate random data for testing, simulation, or any other purpose.


## Installation
npm install @sdev09/get-random


## Usage
```javascript
const getRandom = require('get-random');
or 
import getRandom from '@sdev09/get-random'

 //**Generates a random number with n-number of digits**.
console.log(getRandom.randomNumber(4));
// Output: 6204 (any four-digit number)

 //**Generates a random number within the range [a, b].**
console.log(getRandom.randomNumberRange(1, 5));
// Output: 3 (between 1 and 5)

// **Generates a random string with mixed uppercase and lowercase alphabetical characters.**
console.log(getRandom.randomMixString(8));
// Output: "GdKhJsWp"

//**Generates a random string with mixed alphanumeric characters.**
console.log(getRandom.randomMixNumString(9));
// Output: "Bf7gHJkLN"

//**Generates a random string with uppercase alphabetical characters.**
console.log(getRandom.randomCapitalString(6));
// Output: "HIJKLMNO"

 //**Generates a random string with lowercase alphabetical characters.**
console.log(getRandom.randomSmallString(5));
// Output: "abcde"

//**Generates a random string with a mix of uppercase, lowercase, alphanumeric, and special characters.**
console.log(getRandom.randomAllMixString(10));
// Output: "%&*()123Abc"
```


## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.