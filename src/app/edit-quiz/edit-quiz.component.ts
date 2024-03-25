import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Quiz} from "../interfaces/quiz.interface";
import {Question} from "../interfaces/question.interface";
import {Answer} from "../interfaces/answer.interface";
import {QuizManagerService} from "../services/quizManager.service";

@Component({
  selector: 'app-edit-quiz',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './edit-quiz.component.html',
  styleUrl: './edit-quiz.component.scss'
})
export class EditQuizComponent{
  quiz!: Quiz;
  question!: Question;

  constructor(private quizManger: QuizManagerService, private router: Router, private route: ActivatedRoute) {

    const id = this.route.snapshot.params["id"];
    const potentialQuiz = this.quizManger.getQuizById(id);
    if (potentialQuiz == undefined) {
      this.router.navigate(["/"])
    }
    this.quiz = potentialQuiz!;
    if (this.quiz.questions.length > 0) {
      this.setSelectedQuestion(this.quiz.questions[0]);
    }else{
      this.question = this.quizManger.emptyQuestionFactory();
    }
  }
  public setSelectedQuestion(question: Question): Question {
     this.question = question;
     return this.question;
  }

  public deleteQuestion(question: Question) : void {
    this.quizManger.deleteQuestion(this.quiz.id, question);
  }

  public addQuestion() : void {
    const newQuestion: Question = this.quizManger.emptyQuestionFactory();
    this.quizManger.addQuestionToQuiz(this.quiz.id, newQuestion)
  }

  public setCorrectAnswer(answer: Answer): void {
    this.question.answers.forEach(answer => answer.correct = false);
    answer.correct = true;
    this.quizManger.updateQuestion(this.quiz.id, this.question);
  }

  public updateQuizTitle(event: Event): void {
    this.quiz.title = (event.target as HTMLInputElement).value;
    this.quizManger.updateQuiz(this.quiz);
  }

  public updateQuestionTimer(question: Question, event: Event): void {
    question.timer = parseInt((event.target as HTMLInputElement).value);
    this.quizManger.updateQuestion(this.quiz.id, question);
  }

  public getPredefinedTimers() : number[] {
    return [20, 40, 60, 80];
  }
  public updateQuestionTitle(question: Question, event: Event): void {
    question.question = (event.target as HTMLInputElement).value;
    this.quizManger.updateQuestion(this.quiz.id, question);
  }

  public updateAnswer(question: Question, answer: Answer, $event: Event): void {
    answer.answer = ($event.target as HTMLInputElement).value;
    this.quizManger.updateQuestion(this.quiz.id, question);
  }
}
