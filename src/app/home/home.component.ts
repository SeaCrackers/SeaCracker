import {Component} from '@angular/core';
import {QuizManagerService} from "../services/quizManager.service";
import {Quiz} from "../interfaces/quiz.interface";
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  quizzes: Quiz[] = this.quizManager.getQuizzes();
  constructor(private quizManager: QuizManagerService) {
  }

  public deleteQuiz(quiz: Quiz) : void {
    if (confirm("Are you sure you want to delete this quiz?")) {
      this.quizManager.deleteQuiz(quiz.id);
    }
  }

  public addQuiz() : void {
    this.quizManager.addEmptyQuiz();
  }
}
