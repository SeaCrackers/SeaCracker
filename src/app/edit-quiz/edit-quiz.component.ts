import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../services/quiz.service";
import {Question} from "../models/question.model";
import {Quiz} from "../models/quiz.model";

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

  constructor(private quizService: QuizService, private router: Router, private route:ActivatedRoute) {
    const id = this.route.snapshot.params["id"];
    let potentialQuiz = this.quizService.getQuizById(id);
    if (potentialQuiz == undefined) {
      this.router.navigate(["/"])
    }
    this.quiz = potentialQuiz!;
  }


}
