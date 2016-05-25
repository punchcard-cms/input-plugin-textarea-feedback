import test from 'ava';
import charCounter from '../lib/charCounter.js';

const mockMsg = {
  maxLength: 6,
  value: 'test',
};

const mockCharRemain = {
  innerHTML: '',
};

const mockPage = {
  querySelector(selector) {
    if (selector === '.input-plugin-textarea') {
      return mockMsg;
    }
    else if (selector === '.feedback-number') {
      return mockCharRemain;
    }

    return null;
  },
};

const mockChild = {
  parent: mockPage,
};

test('Character Count is updated when text is added', t => {
  charCounter(mockChild);
  mockMsg.onkeydown();
  t.is(mockCharRemain.innerHTML, 2);
});
