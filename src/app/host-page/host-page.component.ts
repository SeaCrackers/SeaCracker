import { Component } from '@angular/core';
import {RoomCommunicationsService} from "../services/communications/room-communications.service";
import {RandomGenerator} from "../utils/random-generator";
import {HostService} from "../services/game/host.service";
import { QrCodeComponent } from '../qr-code/qr-code.component';
import {
  HostPresentQuestionComponent,
  HostQuestionComponent
} from "../host/host-present-question/host-present-question.component";
import {HostPlayerlistComponent} from "../host/host-playerlist/host-playerlist.component";
import {HostPodiumComponent} from "../host/host-podium/host-podium.component";
import {PlayerListStep} from "../services/game/steps/player-list-step";
import {PresentQuestionStep} from "../services/game/steps/present-question-step";
import {AnswerStep} from "../services/game/steps/answer-step";
import {LeaderboardStep} from "../services/game/steps/leaderboard-step";
import {HostLeaderboardComponent} from "../host/host-leaderboard/host-leaderboard.component";
import {PodiumStep} from "../services/game/steps/podium-step";
import {HostAnswerComponent} from "../host/host-answer/host-answer.component";
@Component({
  selector: 'app-host-page',
  standalone: true,
  imports: [QrCodeComponent, HostQuestionComponent, HostPlayerlistComponent, HostPodiumComponent, HostLeaderboardComponent, HostAnswerComponent, HostPresentQuestionComponent],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.scss'
})
export class HostPageComponent {
  constructor(public host:HostService) {

  }

  protected readonly PlayerListStep = PlayerListStep;
  protected readonly PresentQuestionStep = PresentQuestionStep;
  protected readonly AnswerStep = AnswerStep;
  protected readonly LeaderboardStep = LeaderboardStep;
  protected readonly PodiumStep = PodiumStep;
}
