import {Component, OnInit} from '@angular/core';
import { Quiz } from "../models/quiz.model";
import { QuizService } from "../services/quiz.service"
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  title = 'Home Page';
  constructor(private quizService: QuizService, private router: Router) { }

  public quizzes: Quiz[] = [];

  ngOnInit(): Promise<void> {
    this.quizzes = this.quizService.getQuizzes();
    return Promise.resolve();
  }
  public deleteQuiz(quiz: Quiz) {
    this.quizzes = this.quizzes.filter(q => q.id !== quiz.id);
  }

  public editQuiz(quiz: Quiz) {
    this.router.navigate(['/quiz', quiz.id, 'edit']);
  }
  public playQuiz(quiz: Quiz) {
    console.log(quiz);
  }

  public addQuiz() {
    //
  }

}
