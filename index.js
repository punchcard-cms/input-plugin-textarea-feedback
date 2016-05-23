'use strict';

/**
 * textarea-feedback Input Plugin
 *
 *
 * A simple feedback textarea input type
 */
const validation = require('./lib/validation.js');
const counter = require('./lib/charCounter.js');

/**
 * Single textarea-feedback Input Plugin
 * @module textareaFeedbackInputPlugin
 */
module.exports = {
  name: 'textarea-feedback',
  description: 'A simple feedback textarea input type',
  validation: {
    textareaFeedbackValidation: validation,
  },
  scripts: {
    characterCounter: counter,
  },
  inputs: {
    textareaFeedback: {
      scripts: {
        function: 'characterCounter',

      },
      validation: {
        function: 'textareaFeedbackValidation',
        on: 'blur',
      },
      label: 'Please enter some text',
      type: 'textarea',
      value: 'type here...',
      settings: {
        empty: true,
        minlength: '50',
        maxlength: '200',
      },
    },
  },
  html: '<label for="{{textareaFeedback.id}}">{{textareaFeedback.label}}</label><textarea id="{{textareaFeedback.id}}" class="input-plugin-textarea" maxlength="{{textareaFeedback.settings.maxlength}}" minlength="{{textareaFeedback.settings.minlength}}" name="{{textareaFeedback.name}}" />{{textareaFeedback.value}}</textarea><div class="textarea-feedback"><span class="feedback-number">{{textareaFeedback.settings.maxlength}}</span> characters remaining</div>',
};
