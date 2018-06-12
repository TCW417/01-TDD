'use strict';

module.exports = {
  add: (a, b) => ((typeof a === 'number' && typeof b === 'number') ? a + b : null),
  sub: (a, b) => ((typeof a === 'number' && typeof b === 'number') ? a - b : null),
};
