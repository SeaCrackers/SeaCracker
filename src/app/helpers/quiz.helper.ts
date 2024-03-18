import {Quiz} from "../interfaces/quiz.interface";
import {Question, Timers} from "../interfaces/question.interface";
import {Answer} from "../interfaces/answer.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

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

  // CREATE

  addQuestionToQuiz(quizId: number, question: Question): void{
    let quiz : Quiz | undefined = this.getQuizById(quizId);
    if (quiz) {
      quiz.questions.push(question);
      this.updateQuiz(quiz);
    }
  }

  addQuiz(quiz: Quiz) : void {
    this.quizzes.push(quiz);
    this.saveQuizzesToLocalStorage();
  }

  addEmptyQuiz(): void{
    this.addQuiz(
      this.emptyQuizFactory(
        this.getHighestQuizId() + 1
      )
    );
  }

  emptyAnswerFactory(id : number, correct = false): Answer {
    return {
      id: id,
      answer: '',
      correct: correct
    } as Answer;
  }

  emptyQuestionFactory(id : number): Question {
    return {
      id: id,
      question: '',
      timer: Timers.FORTY,
      answers: [
        this.emptyAnswerFactory(1, true),
        this.emptyAnswerFactory(2),
        this.emptyAnswerFactory(3),
        this.emptyAnswerFactory(4)
      ]
    } as Question;
  }

  emptyQuizFactory(id: number): Quiz {
    return {
      id: id,
      title: '',
      questions: [
        this.emptyQuestionFactory(0)
      ]
    } as Quiz;
  }

  // READ

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  getQuizById(quizId : number) : Quiz | undefined{
    return this.quizzes.find((q : Quiz)=> {
      return q.id == quizId
    });
  }

  getHighestQuizId(): number {
    return Math.max(...this.quizzes.map(q => q.id), 0);
  }

  getHighestQuestionId(quizId: number): number {
    let quiz : Quiz | undefined = this.getQuizById(quizId);
    return quiz ? Math.max(...quiz.questions.map(q => q.id), 0): 0;
  }

  // UPDATE

  updateQuiz(quiz: Quiz): void{
    this.quizzes[this.quizzes.findIndex((q: Quiz) => {return q.id == quiz.id;})] = quiz;
    this.saveQuizzesToLocalStorage();
  }

  updateQuestion(quizId: number, question: Question): void{
    let quiz : Quiz | undefined = this.getQuizById(quizId);
    if (quiz) {
      let index = quiz.questions.findIndex((q: Question) => {
        return q.id == question.id;
      });
      quiz.questions[index] = question;
      this.updateQuiz(quiz);
    }
  }

  // DELETE

  deleteQuiz(quizId: number): void{
    let index = this.quizzes.findIndex((q: Quiz) => {
      return q.id == quizId;
    });
    this.quizzes.splice(index, 1);
    this.saveQuizzesToLocalStorage();
  }

  deleteQuestion(quizId: number, questionId: number): void{
    let quiz : Quiz | undefined = this.getQuizById(quizId);
    if (quiz) {
      let index = quiz.questions.findIndex((q: Question) => {
        return q.id == questionId;
      });
      quiz.questions.splice(index, 1);
      this.updateQuiz(quiz);
    }
  }
}
