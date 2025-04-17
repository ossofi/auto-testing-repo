import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken
} from '../src/usersListUtils.js';

describe('User Utils', () => {
  const users = [
    { id: 1, name: 'Alex', age: 20, email: 'alex@example.com' },
    { id: 2, name: 'Ivan', age: 27, email: 'ivan@example.com' },
    { id: 3, name: 'Dan', age: 30, email: 'dan@example.com' },
    { id: 4, name: 'Anna', age: 32, email: 'anna@example.com' },
  ];

  describe('filterUsersByAge', () => {
    it('should return users within age range', () => {
      const result = filterUsersByAge(users, 25, 35);
      expect(result).to.deep.equal([
        { id: 2, name: 'Ivan', age: 27, email: 'ivan@example.com' },
        { id: 3, name: 'Dan', age: 30, email: 'dan@example.com' },
        { id: 4, name: 'Anna', age: 32, email: 'anna@example.com' },
      ]);
    });

    it('should return an empty array if no users in range', () => {
      const result = filterUsersByAge(users, 40, 50);
      expect(result).to.deep.equal([]);
    });

    it('should throw error if input is not an array', () => {
      expect(() => filterUsersByAge('not an array', 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it('should return users sorted alphabetically by name', () => {
      const result = sortUsersByName(users);
      expect(result).to.deep.equal([
        { id: 1, name: 'Alex', age: 20, email: 'alex@example.com' },
        { id: 4, name: 'Anna', age: 32, email: 'anna@example.com' },
        { id: 3, name: 'Dan', age: 30, email: 'dan@example.com' },
        { id: 2, name: 'Ivan', age: 27, email: 'ivan@example.com' },
      ]);
    });

    it('should throw error if input is not an array', () => {
      expect(() => sortUsersByName(null)).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it('should return the correct user by id', () => {
      const result = findUserById(users, 3);
      expect(result).to.deep.equal({ id: 3, name: 'Dan', age: 30, email: 'dan@example.com' });
    });

    it('should return null if user is not found', () => {
      const result = findUserById(users, 99);
      expect(result).to.be.null;
    });

    it('should throw error if input is not an array', () => {
      expect(() => findUserById({}, 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it('should return true if email exists in the list', () => {
      const result = isEmailTaken(users, 'ivan@example.com');
      expect(result).to.be.true;
    });

    it('should return false if email does not exist', () => {
      const result = isEmailTaken(users, 'nobody@example.com');
      expect(result).to.be.false;
    });

    it('should throw error if input is not an array', () => {
      expect(() => isEmailTaken('nope', 'email@example.com')).to.throw('Users must be an array');
    });
  });
});
