import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Quiz} from "../interfaces/quiz.interface";
import {Question} from "../interfaces/question.interface";
import {Answer} from "../interfaces/answer.interface";
import {QuizManagerService} from "../services/quizManager.service";

@Component({
  selector: 'app-edit-quiz',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-quiz.component.html',
  styleUrl: './edit-quiz.component.scss'
})

export class EditQuizComponent {
  quiz: Quiz;
  question!: Question;

  constructor(private quizManager: QuizManagerService, private router: Router, private route: ActivatedRoute) {

    const id = this.route.snapshot.params["id"];
    const potentialQuiz: Quiz | undefined = this.quizManager.getQuizUsingId(id);
    if (potentialQuiz == undefined) {
      this.router.navigate(["/"])
    }
    this.quiz = potentialQuiz!;
    if (this.quiz.questions.length > 0) {
      this.setSelectedQuestion(this.quiz.questions[0]);
    } else {
      this.addQuestion();
    }
  }

  public setSelectedQuestion(question: Question): Question {
    this.question = question;
    return this.question;
  }

  public deleteQuestion(question: Question): void {
    if (confirm("Are you sure you want to delete this question?")) {
      this.quizManager.deleteQuestion(this.quiz.id, question);
    }
  }

  public addQuestion(): void {
    const newQuestion: Question = this.quizManager.emptyQuestionFactory();
    this.quizManager.addQuestionToQuiz(this.quiz.id, newQuestion)
    this.question = newQuestion;
  }

  public toggleCorrectAnswer(answer: Answer): void {
    answer.correct = !answer.correct;
    this.quizManager.updateQuestion(this.quiz.id, this.question);
  }

  public updateQuizTitle(event: Event): void {
    this.quiz.title = (event.target as HTMLInputElement).value;
    this.quizManager.updateQuiz(this.quiz);
  }

  public updateQuestionTimer(question: Question, event: Event): void {
    question.timer = parseInt((event.target as HTMLInputElement).value);
    this.quizManager.updateQuestion(this.quiz.id, question);
  }

  public getPredefinedTimers(): number[] {
    return [20, 40, 60, 80];
  }

  public updateQuestionTitle(question: Question, event: Event): void {
    question.question = (event.target as HTMLInputElement).value;
    this.quizManager.updateQuestion(this.quiz.id, question);
  }

  public updateAnswer(question: Question, answer: Answer, $event: Event): void {
    answer.answer = ($event.target as HTMLInputElement).value;
    this.quizManager.updateQuestion(this.quiz.id, question);
  }

  public swapQuestions(question: Question, direction: string): void {
    const questionToSwap = this.quiz.questions[this.quiz.questions.indexOf(question) + (direction === 'up' ? -1 : 1)];
    this.quizManager.swapQuestionIndexes(this.quiz.id, question, questionToSwap);
  }
}
