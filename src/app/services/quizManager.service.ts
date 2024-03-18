import {Quiz} from "../interfaces/quiz.interface";
import {Question} from "../interfaces/question.interface";
import {Answer} from "../interfaces/answer.interface";
import {LocalStorageDataSaverService} from "./localStorageDataSaver.service";
import {DataSaver} from "../interfaces/dataSaver.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class QuizManagerService{
  private quizzes: Quiz[];
  private dataSaver: DataSaver;
  constructor() {
    this.dataSaver = new LocalStorageDataSaverService('quizzes')
    this.quizzes = this.getQuizzesFromLocalStorage();
  }

  getQuizzesFromLocalStorage(): Quiz[] {
    return this.dataSaver.getData() as Quiz[];
  }
  saveQuizzesToLocalStorage(): void {
    this.dataSaver.saveData(this.quizzes);
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

  emptyAnswerFactory(correct = false): Answer {
    return {
      answer: '',
      correct: correct
    } as Answer;
  }

  emptyQuestionFactory(id : number): Question {
    return {
      id: id,
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
