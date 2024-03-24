import {Component, HostListener, OnInit, Type} from '@angular/core';
import { RoomCommunicationsService } from "../services/communications/room-communications.service";
import { RandomGenerator } from "../utils/random-generator";
import { HostService } from "../services/game/host.service";
import { QrCodeComponent } from '../qr-code/qr-code.component';
import {
  HostPresentQuestionComponent,
} from "../host/host-present-question/host-present-question.component";
import { HostPlayerlistComponent } from "../host/host-playerlist/host-playerlist.component";
import { HostPodiumComponent } from "../host/host-podium/host-podium.component";
import { PlayerListStep } from "../services/game/steps/player-list-step";
import { PresentQuestionStep } from "../services/game/steps/present-question-step";
import { AnswerStep } from "../services/game/steps/answer-step";
import { LeaderboardStep } from "../services/game/steps/leaderboard-step";
import { HostLeaderboardComponent } from "../host/host-leaderboard/host-leaderboard.component";
import { PodiumStep } from "../services/game/steps/podium-step";
import { HostAnswerComponent } from "../host/host-answer/host-answer.component";
import { NgComponentOutlet } from "@angular/common";
import { GameStep } from "../services/game/steps/game-step";
import { HostComponent } from "../host/host-component";
import { HostLoadingComponent } from "../host/host-loading/host-loading.component";
import { QuizManagerService } from "../services/quizManager.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-host-page',
  standalone: true,
  imports: [QrCodeComponent, HostPlayerlistComponent, HostPodiumComponent, HostLeaderboardComponent, HostAnswerComponent, HostPresentQuestionComponent, NgComponentOutlet],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.scss'
})
export class HostPageComponent {
  constructor(public host: HostService, private quizManager: QuizManagerService, private activatedroute: ActivatedRoute, private router: Router) {
    const quizId = parseInt(this.activatedroute.snapshot.paramMap.get("id") ?? "-1")
    const quiz = this.quizManager.getQuizById(quizId);
    if (!quiz)
      this.router.navigate(['/']);
    this.host.setupQuiz(quiz!)
  }

  handleNextStepClick(): void {
    if (this.host.getCurrentStep()()!.hasNextStep())
      return this.host.nextStep();
    this.router.navigate(['/']);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = false;
  }

  /**
   * For now, we simply return one component per step. 1:1 mapping.
   */
  get activeStepComponent(): Type<HostComponent> {
    if (this.host.getCurrentQuestion()() == undefined)
      return HostLoadingComponent;
    switch (this.host.getCurrentStep()()!.constructor) {
      case PlayerListStep:
        return HostPlayerlistComponent;
      case PresentQuestionStep:
        return HostPresentQuestionComponent;
      case AnswerStep:
        return HostAnswerComponent;
      case LeaderboardStep:
        return HostLeaderboardComponent;
      case PodiumStep:
        return HostPodiumComponent;
      default:
        throw new Error("Unknown step");
    }
  }
}
