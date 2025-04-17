import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('String Utils', function () {
  describe('capitalize', function () {
    it('should capitalize the first letter of a word in lowercase', function () {
      const result = capitalize('hello');
      expect(result).to.equal('Hello');
    });

    it('should return the same string if first letter is capitalized', function () {
      const result = capitalize('Hello');
      expect(result).to.equal('Hello');
    });

    it('should return an empty string if input is an empty string', function () {
      const result = capitalize('');
      expect(result).to.equal('');
    });

    it('should throw an error if input is not a string', function () {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString', function () {
    it('should reverse a string', function () {
      const result = reverseString('abc');
      expect(result).to.equal('cba');
    });

    it('should return an empty string if input is an empty string', function () {
      const result = reverseString('');
      expect(result).to.equal('');
    });

    it('should reverse a string with spaces', function () {
      const result = reverseString('hello world');
      expect(result).to.equal('dlrow olleh');
    });

    it('should throw an error if input is not a string', function () {
      expect(() => reverseString(null)).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome', function () {
    it('should return true for a palindrome word', function () {
      const result = isPalindrome('kayak');
      expect(result).to.be.true;
    });

    it('should return false for a non-palindrome word', function () {
      const result = isPalindrome('hello');
      expect(result).to.be.false;
    });

    it('should return true for an empty string', function () {
      const result = isPalindrome('');
      expect(result).to.be.true;
    });

    it('should be case-sensitive', function () {
      const result = isPalindrome('Kayak');
      expect(result).to.be.false;
    });

    it('should throw an error if input is not a string', function () {
      expect(() => isPalindrome(12321)).to.throw('Input must be a string');
    });
  });
});
