import {Quiz} from "../interfaces/quiz.interface";
import {Question} from "../interfaces/question.interface";
import {Answer} from "../interfaces/answer.interface";
import {LocalStorageDataSaverService} from "./localStorageDataSaver.service";
import {DataSaver} from "../interfaces/data-saver.interface";
import {Injectable} from "@angular/core";

/**
 * This service treat data of quizzes in a business way (and will save using a DataSaver).
 * It supports most of the used CRUD operations.
 */
@Injectable({
  providedIn: 'root'
})
export class QuizManagerService{
  private quizzes: Quiz[];
  private dataSaver: DataSaver;
  constructor() {
    //TODO : Dependency injection instead
    this.dataSaver = new LocalStorageDataSaverService('quizzes')
    this.quizzes = this.getQuizzesFromLocalStorage();
  }

  private getQuizzesFromLocalStorage(): Quiz[] {
    return this.dataSaver.getData() as Quiz[];
  }
  private saveQuizzesToLocalStorage(): void {
    this.dataSaver.saveData(this.quizzes);
  }
  // CREATE

  public addQuestionToQuiz(quizId: number, question: Question): void{
    const quiz : Quiz | undefined = this.getQuizById(quizId);
    if (quiz) {
      quiz.questions.push(question);
      this.updateQuiz(quiz);
    }
  }

  private addQuiz(quiz: Quiz) : void {
    this.quizzes.push(quiz);
    this.saveQuizzesToLocalStorage();
  }

  public addEmptyQuiz(): void{
    this.addQuiz(
      this.emptyQuizFactory(
        this.getHighestQuizId() + 1
      )
    );
  }

  private emptyAnswerFactory(correct = false): Answer {
    return {
      answer: '',
      correct: correct
    } as Answer;
  }

  public emptyQuestionFactory(): Question {
    return {
      question: '',
      timer: 40,
      answers: [
        this.emptyAnswerFactory(true),
        this.emptyAnswerFactory(),
        this.emptyAnswerFactory(),
        this.emptyAnswerFactory()
      ]
    } as Question;
  }

  private emptyQuizFactory(id: number): Quiz {
    return {
      id: id,
      title: '',
      questions: [
        this.emptyQuestionFactory()
      ]
    } as Quiz;
  }

  // READ

  public getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  public getQuizById(quizId : number) : Quiz | undefined{
    return this.quizzes.find((q : Quiz)=> {
      return q.id == quizId
    });
  }

  private getHighestQuizId(): number {
    return Math.max(...this.quizzes.map(q => q.id), 0);
  }

  // UPDATE

  public updateQuiz(quiz: Quiz): void{
    this.quizzes[this.quizzes.findIndex((q: Quiz) => {return q.id == quiz.id;})] = quiz;
    this.saveQuizzesToLocalStorage();
  }

  public updateQuestion(quizId: number, question: Question): void {
    const quiz : Quiz | undefined = this.getQuizById(quizId);
    if (quiz) {
      const index = quiz.questions.indexOf(question);
      if (index !== -1) {
        quiz.questions[index] = question;
        this.updateQuiz(quiz);
      }
    }
  }

  // DELETE

  public deleteQuiz(quizId: number): void{
    const index = this.quizzes.findIndex((q: Quiz) => {
      return q.id == quizId;
    });
    this.quizzes.splice(index, 1);
    this.saveQuizzesToLocalStorage();
  }

  public deleteQuestion(quizId: number, question: Question): void {
    const quiz : Quiz | undefined = this.getQuizById(quizId);
    if (quiz) {
      const index = quiz.questions.indexOf(question);
      if (index !== -1) {
        quiz.questions.splice(index, 1);
        this.updateQuiz(quiz);
      }
    }
  }
}
