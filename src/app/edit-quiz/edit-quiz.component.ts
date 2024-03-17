import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Quiz} from "../interfaces/quiz.interface";
import {Question, Timers} from "../interfaces/question.interface";
import {Answer} from "../interfaces/answer.interface";
import {QuizHelper} from "../helpers/quiz.helper";

@Component({
  selector: 'app-edit-quiz',
  standalone: true,
  imports: [],
  templateUrl: './edit-quiz.component.html',
  styleUrl: './edit-quiz.component.scss'
})
export class EditQuizComponent{
  title = 'Edit Quiz';
  quiz!: Quiz;
  question!: Question;

  constructor(private quizHelper: QuizHelper, private router: Router, private route: ActivatedRoute) {

    const id = this.route.snapshot.params["id"];
    let potentialQuiz = this.quizHelper.getQuizById(id);
    if (potentialQuiz == undefined) {
      this.router.navigate(["/"])
    }
    this.quiz = potentialQuiz!;
    if (this.quiz.questions.length > 0) {
      this.selectedQuestion(this.quiz.questions[0]);
    }else{
      this.question = this.quizHelper.emptyQuestionFactory(0);
    }
  }
  selectedQuestion(question: Question) {
     this.question = question;
  }

  deleteQuestion(question: Question) {
    this.quizHelper.deleteQuestion(this.quiz.id, question.id);
  }

  addQuestion() : Question {
    const newQuestion: Question = this.quizHelper.emptyQuestionFactory(this.quizHelper.getHighestQuestionId(this.quiz.id) + 1);
    this.quizHelper.addQuestionToQuiz(this.quiz.id, newQuestion)
    return newQuestion;
  }

  setCorrectAnswer(answer: Answer) {
    this.question.answers.forEach(answer => answer.correct = false);
    answer.correct = true;
    this.quizHelper.updateQuestion(this.quiz.id, this.question);
  }

  updateQuizTitle(event: Event) {
    this.quiz.title = (event.target as HTMLInputElement).value;
    this.quizHelper.updateQuiz(this.quiz);
  }

  updateQuestionTimer(question: Question, event: Event) {
    question.timer = parseInt((event.target as HTMLInputElement).value);
    this.quizHelper.updateQuestion(this.quiz.id, question);
  }

  getTimers() : number[] {
    return Object.values(Timers).filter(value => typeof value === 'number') as number[];
  }
  updateQuestionTitle(question: Question, event: Event) {
    question.question = (event.target as HTMLInputElement).value;
    this.quizHelper.updateQuestion(this.quiz.id, question);
  }

  updateAnswer(question: Question, answer: Answer, $event: Event) {
    answer.answer = ($event.target as HTMLInputElement).value;
    this.quizHelper.updateQuestion(this.quiz.id, question);
  }
}
