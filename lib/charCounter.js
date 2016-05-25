'use strict';
/* eslint-disable */

/**
 * Function to count how many characters are remaining in text fields
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * *
 * @module charCounter
 */

module.exports = function charCounter(input) {
  var msg = input.parent.querySelector('.input-plugin-textarea'),
      charRemain = input.parent.querySelector('.feedback-number'),
      maxChar = input.parent.querySelector('.input-plugin-textarea').maxLength,
      charCount = function () {
        charRemain.innerHTML = maxChar - msg.value.length;
        if (msg.value.length > maxChar) {
          charRemain.className = 'over-limit';
        }
        else {
          charRemain.className = '';
        }
    };

  // attach function to textarea as keydown event
  msg.onkeydown = charCount;

  // display max number of characters at start
  charRemain.innerHTML = maxChar;
};
