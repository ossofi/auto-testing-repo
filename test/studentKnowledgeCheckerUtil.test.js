import { expect } from 'chai';
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js'; 

describe('checkStudentKnowledge', () => {
  it('should return true if all answers are correct', () => {
    const studentAnswers = {
      q1: 'a',
      q2: 'b',
      q3: 'c',
    };
    const correctAnswers = {
      q1: 'a',
      q2: 'b',
      q3: 'c',
    };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it('should return false if at least one answer is incorrect', () => {
    const studentAnswers = {
      q1: 'a',
      q2: 'x',
      q3: 'c',
    };
    const correctAnswers = {
      q1: 'a',
      q2: 'b',
      q3: 'c',
    };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return false if keys are in different order', () => {
    const studentAnswers = {
      q1: 'a',
      q3: 'c',
      q2: 'b',
    };
    const correctAnswers = {
      q1: 'a',
      q2: 'b',
      q3: 'c',
    };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return false if the number of answers is different', () => {
    const studentAnswers = {
      q1: 'a',
      q2: 'b',
    };
    const correctAnswers = {
      q1: 'a',
      q2: 'b',
      q3: 'c',
    };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return true for empty objects', () => {
    expect(checkStudentKnowledge({}, {})).to.be.true;
  });
});
