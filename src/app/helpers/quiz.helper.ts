import {Quiz} from "../interfaces/quiz.interface";
import {Question, Timers} from "../interfaces/question.interface";
import {Answer} from "../interfaces/answer.interface";

export class QuizHelper {
  private quizzes: Quiz[];
  constructor(){
    this.quizzes = this.getQuizzesFromLocalStorage();
  }

  // SAVED DATA

  getQuizzesFromLocalStorage(): Quiz[]{
    if (!localStorage) throw new Error('Local storage is not supported');

    let item : string | null = localStorage.getItem('quizzes');
    if (item) {
      try {
        return JSON.parse(item) as Quiz[];
      } catch (error) {
        throw new Error('Failed to parse quizzes from local storage');
      }
    } else {
      return [];
    }
  }

  saveQuizzesToLocalStorage(): void{
    if (!localStorage) throw new Error('Local storage is not supported');

    try {
      localStorage.setItem('quizzes', JSON.stringify(this.quizzes));
    } catch (error) {
      throw new Error('Failed to save quizzes to local storage');
    }
  }
  addQuiz(quiz: Quiz) : void {
    this.quizzes.push(quiz);
    this.saveQuizzesToLocalStorage();
  }
}
