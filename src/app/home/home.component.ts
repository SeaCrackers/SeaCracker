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
export class HomeComponent {

  quizzes: Quiz[] = this.quizManager.getQuizzes();

  constructor(private quizManager: QuizManagerService) {
  }

  public tryToDeleteQuiz(quiz: Quiz): void {
    if (confirm("Are you sure you want to delete this quiz?")) {
      this.quizManager.deleteQuiz(quiz.id);
    }
  }

  public addQuiz(): void {
    this.quizManager.addEmptyQuiz();
  }

  public importQuiz(quizToImport: string): void {
    this.quizManager.importQuiz(quizToImport);
  }

  public copyQuizExportToClipboard(quiz: Quiz): void {
    const quizAsJson: string = this.quizManager.quizAsJson(quiz);
    navigator.clipboard.writeText(quizAsJson).then(r => {
      console.log("Copied to clipboard");
    });
  }
}
