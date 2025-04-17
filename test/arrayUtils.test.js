import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('Array Utils', function() {
  describe('findMax', function() {
    it('should return the max value from the array', function() {
      const result = findMax([1, 2, 3, 4, 5]);
      expect(result).to.equal(5);
    });

    it('should throw an error if input is not an array', function() {
      expect(() => findMax('not an array')).to.throw('Input must be an array');
    });

    it('should return -1 for an array with negative numbers', function() {
      const result = findMax([-1, -2, -3, -4]);
      expect(result).to.equal(-1);
    });
  });

  describe('findMin', function() {
    it('should return the min value from the array', function() {
      const result = findMin([1, 2, 3, 4, 5]);
      expect(result).to.equal(1);
    });

    it('should throw an error if input is not an array', function() {
      expect(() => findMin('not an array')).to.throw('Input must be an array');
    });

    it('should return -4 for an array with negative numbers', function() {
      const result = findMin([-1, -2, -3, -4]);
      expect(result).to.equal(-4);
    });
  });

  describe('removeDuplicates', function() {
    it('should remove duplicate values from the array', function() {
      const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should throw an error if input is not an array', function() {
      expect(() => removeDuplicates('not an array')).to.throw('Input must be an array');
    });

    it('should return an empty array when input is an empty array', function() {
      const result = removeDuplicates([]);
      expect(result).to.deep.equal([]);
    });
  });
});
