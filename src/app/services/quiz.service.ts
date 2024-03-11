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
    this.quizzes = this.getQuizzesFromLocalStorage();
  }
  getQuizzes() {
    return this.quizzes;
  }
  getQuizById(quizId : number){
    return this.quizzes.find((quiz : Quiz)=> {
      return quiz.getId() == quizId
    });
  }

  getQuizzesFromLocalStorage() {
    let item = localStorage.getItem('quizzes');
    return item ? JSON.parse(item) : [];
  }

  saveQuizzesToLocalStorage() {
    localStorage.setItem('quizzes', JSON.stringify(this.quizzes));
  }

}
