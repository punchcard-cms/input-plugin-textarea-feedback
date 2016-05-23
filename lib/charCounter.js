'use strict';

/**
 * Function to count how many characters are remaining in text fields
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * *
 * @module charCounter
 */

module.exports = function charCounter(input) {
  const msg = input.parent.querySelector('.input-plugin-textarea');
  const charLeft = input.parent.querySelector('.feedback-number');
  const maxChar = input.parent.querySelector('.input-plugin-textarea').maxLength;
  const charCount = function () {
    setTimeout(() => {
      charLeft.innerHTML = maxChar - msg.value.length;
      if (msg.value.length > maxChar) {
        charLeft.className = 'over-limit';
      }
      else {
        charLeft.className = '';
      }
    }, 5);
  };

  // attach function to textarea as keydown event
  msg.onkeydown = charCount;

  // display max number of characters at start
  charLeft.innerHTML = maxChar;
};
