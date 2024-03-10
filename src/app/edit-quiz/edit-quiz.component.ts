import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../services/quiz.service";
import {Question} from "../models/question.model";
import {Quiz} from "../models/quiz.model";
import {Answer} from "../models/answer.model";

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

  constructor(private quizService: QuizService, private router: Router, private route:ActivatedRoute) {

    const id = this.route.snapshot.params["id"];
    let potentialQuiz = this.quizService.getQuizById(id);
    if (potentialQuiz == undefined) {
      this.router.navigate(["/"])
    }
    this.quiz = potentialQuiz!;
    if (this.quiz.getQuestions().length > 0) {
      this.selectedQuestion(this.quiz.getQuestions()[0]);
    }else {
      this.question = this.addQuestion();
      this.saveQuiz();
    }
  }
  selectedQuestion(question: Question) {
    return this.question = question;
  }
  deleteQuestion(id: number) {
    const deleteQuestion = this.quiz.getQuestions().find(q=>q.getId()=== id);
    if (deleteQuestion) {
      this.quiz.removeQuestion(deleteQuestion);
      this.saveQuiz();
    }
  }
  addQuestion() : Question {
    const newQuestion = new Question(this.quiz.getQuestions().length, "New Question", 20, [
        new Answer('0', "New Answer 1", false),
        new Answer('1', "New Answer 2", false),
        new Answer('2', "New Answer 3", false),
        new Answer('3', "New Answer 4", true)]);
    this.quiz.addQuestion(newQuestion);
    this.saveQuiz();
    return newQuestion;
  }

  setCorrectAnswer(answer: Answer) {
    this.question.getAnswers().forEach(a => {
      a.setCorrect(a === answer);
    });
    this.saveQuiz();
  }

}
