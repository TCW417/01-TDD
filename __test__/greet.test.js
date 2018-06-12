'use strict';

const greet = require('../lib/greet');

describe('Testing greet module', () => {
  test('Valid string, length > 1', () => {
    expect(greet('world')).toEqual('hello world');
  });
  test('Valid string, length = 1', () => {
    expect(greet('!')).toEqual('hello !');
  });
  test('Empty string', () => {
    expect(greet('')).toEqual('hello ');
  });
  test('Non string input', () => {
    expect(greet(15)).toBeNull();
  });
  test('Long string input', () => {
    expect(greet('to all you beautiful people')).toEqual('hello to all you beautiful people');
  });
});
