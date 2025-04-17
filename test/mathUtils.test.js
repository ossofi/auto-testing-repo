import { expect } from 'chai'; 
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('Math Utils', function() {
  describe('add', function() {
    it('should add two positive numbers', function() {
      const result = add(2, 3);
      expect(result).to.equal(5);
    });

    it('should add two negative numbers', function() {
      const result = add(-2, -3);
      expect(result).to.equal(-5);
    });

    it('should add a positive and a negative number', function() {
      const result = add(5, -3);
      expect(result).to.equal(2);
    });
  });


  describe('subtract', function() {
    it('should subtract two numbers', function() {
      const result = subtract(5, 3);
      expect(result).to.equal(2);
    });

    it('should subtract negative numbers', function() {
      const result = subtract(-2, -3);
      expect(result).to.equal(1);
    });

    it('should subtract a negative number from a positive number', function() {
      const result = subtract(5, -3);
      expect(result).to.equal(8);
    });
  });


  describe('multiply', function() {
    it('should multiply two numbers', function() {
      const result = multiply(2, 3);
      expect(result).to.equal(6);
    });

    it('should multiply a positive number by a negative number', function() {
      const result = multiply(2, -3);
      expect(result).to.equal(-6);
    });

    it('should multiply two negative numbers', function() {
      const result = multiply(-2, -3);
      expect(result).to.equal(6);
    });

    it('should return 0 when multiplying by 0', function() {
      const result = multiply(5, 0);
      expect(result).to.equal(0);
    });
  });


  describe('divide', function() {
    it('should divide two numbers', function() {
      const result = divide(6, 2);
      expect(result).to.equal(3);
    });

    it('should divide a positive number by a negative number', function() {
      const result = divide(6, -2);
      expect(result).to.equal(-3);
    });

    it('should divide two negative numbers', function() {
      const result = divide(-6, -2);
      expect(result).to.equal(3);
    });

    it('should throw an error when dividing by 0', function() {
      expect(() => divide(6, 0)).to.throw('Cannot divide by zero');
    });
  });
});
