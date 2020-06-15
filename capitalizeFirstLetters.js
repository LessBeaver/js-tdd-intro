const assert = require('assert');

function capitalizeFirstLetters(input) {
    return input.length > 0
      ? input[0].charAt(0).toUpperCase() + input.slice(1)
      : '';
  }
  
// Check that capitalizeFirstLetters transforms i am learning TDD correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('i'), 'I');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');