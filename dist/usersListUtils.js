/**
 * Filters users by age.
 * @param {Array} users - List of users.
 * @param {number} minAge - Minimum age.
 * @param {number} maxAge - Maximum age.
 * @returns {Array} - Filtered list of users.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.filterUsersByAge = filterUsersByAge;
exports.sortUsersByName = sortUsersByName;
exports.findUserById = findUserById;
exports.isEmailTaken = isEmailTaken;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function filterUsersByAge(users, minAge, maxAge) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.filter(function (user) {
    return user.age >= minAge && user.age <= maxAge;
  });
}

/**
 * Sorts the list of users by name (alphabetically).
 * @param {Array} users - List of users.
 * @returns {Array} - Sorted list of users.
 */

function sortUsersByName(users) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return [].concat(_toConsumableArray(users)).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

/**
 * Finds a user by ID.
 * @param {Array} users - List of users.
 * @param {number} id - User ID.
 * @returns {Object|null} - Found user, or null if user not found.
 */

function findUserById(users, id) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.find(function (user) {
    return user.id === id;
  }) || null;
}

/**
 * Checks if there is a user with the specified email in the list.
 * @param {Array} users - List of users.
 * @param {string} email - Email to check.
 * @returns {boolean} - True if a user with this email exists, otherwise false.
 */

function isEmailTaken(users, email) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.some(function (user) {
    return user.email === email;
  });
}