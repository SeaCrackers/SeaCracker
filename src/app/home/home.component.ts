import {Component} from '@angular/core';
import {QuizManagerService} from "../services/quizManager.service";
import {Quiz} from "../interfaces/quiz.interface";
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [],
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  quizzes: Quiz[] = this.quizManager.getQuizzes();
  constructor(private quizManager: QuizManagerService, private router: Router) {
  }

  public deleteQuiz(quiz: Quiz) : void {
    this.quizManager.deleteQuiz(quiz.id);
  }

  public editQuiz(quiz: Quiz): void {
    this.router.navigate(['/quiz', quiz.id, 'edit']);
  }
  public playQuiz(quiz: Quiz): void {
    this.router.navigate(['/quiz', quiz.id, 'play']);
  }

  public addQuiz() : void {
    this.quizManager.addEmptyQuiz();
  }
}
