
/**
 * The function takes an object with the student's answers and compares them with the correct answers.
 * @param {Object} studentAnswers - Student answers in the format { question1: answer1, question2: answer2, ... }.
 * @param {Object} correctAnswers - Correct answers in the same format.
 * @returns {boolean} Returns true if all answers are correct, and false if at least one answer is incorrect.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkStudentKnowledge = checkStudentKnowledge;

function checkStudentKnowledge(studentAnswers, correctAnswers) {
  var studentKeys = Object.keys(studentAnswers);
  var correctKeys = Object.keys(correctAnswers);

  if (studentKeys.length !== correctKeys.length) {
    return false;
  }

  for (var i = 0; i < studentKeys.length; i++) {
    if (studentKeys[i] !== correctKeys[i]) {
      return false;
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = studentKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (studentAnswers[key] !== correctAnswers[key]) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}