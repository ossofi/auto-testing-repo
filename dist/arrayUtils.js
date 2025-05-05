"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findMax = findMax;
exports.findMin = findMin;
exports.removeDuplicates = removeDuplicates;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function findMax(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return Math.max.apply(Math, _toConsumableArray(arr));
}

function findMin(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return Math.min.apply(Math, _toConsumableArray(arr));
}

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return [].concat(_toConsumableArray(new Set(arr)));
}