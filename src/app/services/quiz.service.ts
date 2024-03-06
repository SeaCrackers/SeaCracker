import { Injectable } from '@angular/core';
import {Quiz} from "../models/quiz.model";
import {Question} from "../models/question.model";
import {Answer} from "../models/answer.model";
import {filter, find} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[];
  constructor() {
    this.quizzes = [
      new Quiz (1, 'Quiz 1', [
        new Question('1', 'Question 1', '10', [
          new Answer('1', 'Answer 1', true),
          new Answer('2', 'Answer 2', false),
          new Answer('3', 'Answer 3', false),
          new Answer('4', 'Answer 4', false)
        ]),
        new Question('2', 'Question 2', '10', [
          new Answer('5', 'Answer 5', true),
          new Answer('6', 'Answer 6', false),
          new Answer('7', 'Answer 7', false),
          new Answer('8', 'Answer 8', false)
        ]),
        new Question('3', 'Question 3', '10', [
          new Answer('9', 'Answer 9', true),
          new Answer('10', 'Answer 10', false),
          new Answer('11', 'Answer 11', false),
          new Answer('12', 'Answer 12', false)
        ]),
        new Question('4', 'Question 4', '10', [
          new Answer('13', 'Answer 13', true),
          new Answer('14', 'Answer 14', false),
          new Answer('15', 'Answer 15', false),
          new Answer('16', 'Answer 16', false)
        ])
      ]),

      new Quiz (2, 'Quiz 2', [
        new Question('5', 'Question 5', '10', [
          new Answer('17', 'Answer 17', true),
          new Answer('18', 'Answer 18', false),
          new Answer('19', 'Answer 19', false),
          new Answer('20', 'Answer 20', false)
        ]),
        new Question('6', 'Question 6', '10', [
          new Answer('21', 'Answer 21', true),
          new Answer('22', 'Answer 22', false),
          new Answer('23', 'Answer 23', false),
          new Answer('24', 'Answer 24', false)
        ]),
        new Question('7', 'Question 7', '10', [
          new Answer('25', 'Answer 25', true),
          new Answer('26', 'Answer 26', false),
          new Answer('27', 'Answer 27', false),
          new Answer('28', 'Answer 28', false)
        ]),
        new Question('8', 'Question 8', '10', [
          new Answer('29', 'Answer 29', true),
          new Answer('30', 'Answer 30', false),
          new Answer('31', 'Answer 31', false),
          new Answer('32', 'Answer 32', false)
        ])
      ]),
      new Quiz (3, 'Quiz 3', [
        new Question('9', 'Question 9', '10', [
          new Answer('33', 'Answer 33', true),
          new Answer('34', 'Answer 34', false),
          new Answer('35', 'Answer 35', false),
          new Answer('36', 'Answer 36', false)
        ]),
        new Question('10', 'Question 10', '10', [
          new Answer('37', 'Answer 37', true),
          new Answer('38', 'Answer 38', false),
          new Answer('39', 'Answer 39', false),
          new Answer('40', 'Answer 40', false)
        ]),
        new Question('11', 'Question 11', '10', [
          new Answer('41', 'Answer 41', true),
          new Answer('42', 'Answer 42', false),
          new Answer('43', 'Answer 43', false),
          new Answer('44', 'Answer 44', false)
        ]),
        new Question('12', 'Question 12', '10', [
          new Answer('45', 'Answer 45', true),
          new Answer('46', 'Answer 46', false),
          new Answer('47', 'Answer 47', false),
          new Answer('48', 'Answer 48', false)
        ])
      ]),
      new Quiz (4, 'Quiz 4', [
        new Question('13', 'Question 13', '10', [
          new Answer('49', 'Answer 49', true),
          new Answer('50', 'Answer 50', false),
          new Answer('51', 'Answer 51', false),
          new Answer('52', 'Answer 52', false)
        ]),
        new Question('14', 'Question 14', '10', [
          new Answer('53', 'Answer 53', true),
          new Answer('54', 'Answer 54', false),
          new Answer('55', 'Answer 55', false),
          new Answer('56', 'Answer 56', false)
        ]),
        new Question('15', 'Question 15', '10', [
          new Answer('57', 'Answer 57', true),
          new Answer('58', 'Answer 58', false),
          new Answer('59', 'Answer 59', false),
          new Answer('60', 'Answer 60', false)
        ]),
        new Question('16', 'Question 16', '10', [
          new Answer('61', 'Answer 61', true),
          new Answer('62', 'Answer 62', false),
          new Answer('63', 'Answer 63', false),
          new Answer('64', 'Answer 64', false)
        ])
      ]),


    ];
  }
  getQuizzes() {
    return this.quizzes;
  }
  getQuizById(quizId : number){
    return this.quizzes.find((quiz : Quiz)=> {
      return quiz.id == quizId
    });
  }


  getQuestions(quiz: Quiz) {
    return quiz.questions;
  }

  updateQuiz(quiz: Quiz) {
    let index = this.quizzes.findIndex(q => q.id === quiz.id);
    this.quizzes[index] = quiz;
  }

}
