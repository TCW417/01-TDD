'use strict';

const myMath = require('../lib/arithmetic');

describe('Testing arithmetic module', () => {
  describe('Testing add function', () => {
    test('Add with valid numeric inputs', () => {
      expect(myMath.add(2, 2)).toEqual(4);
    });
    test('Add -2, -2', () => {
      expect(myMath.add(-2, -2)).toEqual(-4);
    });
    test('Add 5, -2', () => {
      expect(myMath.add(5, -2)).toEqual(3);
    });
    test('Add 0, 0', () => {
      expect(myMath.add(0, 0)).toEqual(0);
    });
    test('Add 2.5, 2.6', () => {
      expect(myMath.add(2.5, 2.6)).toEqual(5.1);
    });
    test('Add 2, 2.5', () => {
      expect(myMath.add(2, 2.5)).toEqual(4.5);
    });
    test('Add 2.5, 2.5', () => {
      expect(myMath.add(2.5, 2.5)).toEqual(5);
    });

    test('Add "2", 2', () => {
      expect(myMath.add('2', 2)).toBeNull();
    });
    test('Add "2", "2"', () => {
      expect(myMath.add('2', '2')).toBeNull();
    });
    test('Add 2, "2"', () => {
      expect(myMath.add(2, '2')).toBeNull();
    });
  });
  describe('Testing sub function', () => {
    test('Sub 5, 2', () => {
      expect(myMath.sub(5, 2)).toEqual(3);
    });
    test('Sub 2, 5', () => {
      expect(myMath.sub(2, 5)).toEqual(-3);
    });
    test('Sub 5, -2', () => {
      expect(myMath.sub(5, -2)).toEqual(7);
    });
    test('Sub -5, 2', () => {
      expect(myMath.sub(-5, 2)).toEqual(-7);
    });
    test('Sub 5.5, 2', () => {
      expect(myMath.sub(5.5, 2)).toEqual(3.5);
    });
    test('Sub 5.5, 2.1', () => {
      expect(myMath.sub(5.5, 2.1)).toEqual(3.4);
    });
    test('Sub 0, 0', () => {
      expect(myMath.sub(0, 0)).toEqual(0);
    });
    test('Sub 0, 2', () => {
      expect(myMath.sub(0, 2)).toEqual(-2);
    });
    test('Sub 5, 0', () => {
      expect(myMath.sub(5, 0)).toEqual(5);
    });

    test('Sub "5", 2', () => {
      expect(myMath.sub('5', 2)).toBeNull();
    });
    test('Sub "5", "2"', () => {
      expect(myMath.sub('5', '2')).toBeNull();
    });
    test('Sub 5, "2"', () => {
      expect(myMath.sub(5, '2')).toBeNull();
    });
  });
});
