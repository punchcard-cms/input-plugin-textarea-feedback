import test from 'ava';

const jsdom = require('jsdom');

let window;

test.serial.cb('PAGE REQUEST', t => {
  jsdom.env(
    '<div class="input-feedback"><label for="feedback-form">Form Field</label> <textarea class="input-plugin-textarea" id="feedback-form" maxlength="200" minlength="50" name="feedback-form" />type things</textarea><div class="textarea-feedback"><span class="feedback-number"></span> characters remaining</div></div>',
    ['http://code.jquery.com/jquery.js'],
    (err) => {
      console.log(err);
      console.log('test test', window.$('.input-plugin-textarea').text());
      t.end();
    }
  );
});

test.serial('PAGE LOADED', t => {
  t.plan(1);

  const attr = window.document.body.getAttribute('input-plugin-textarea');

  t.truthy(attr.length > 0, attr);
});
