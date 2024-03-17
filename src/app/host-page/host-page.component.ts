import { Component } from '@angular/core';
import {RoomCommunicationsService} from "../services/communications/room-communications.service";
import {RandomGenerator} from "../utils/random-generator";
import {HostService} from "../services/game/host.service";
import { QrCodeComponent } from '../qr-code/qr-code.component';
import {HostQuestionComponent} from "../host/host-question/host-question.component";
import {HostPlayerlistComponent} from "../host/host-playerlist/host-playerlist.component";
import {HostPodiumComponent} from "../host/host-podium/host-podium.component";
import {GameStepType} from "../services/game/steps/game-step-type";
@Component({
  selector: 'app-host-page',
  standalone: true,
  imports: [QrCodeComponent, HostQuestionComponent, HostPlayerlistComponent, HostPodiumComponent],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.scss'
})
export class HostPageComponent {
  constructor(public host:HostService) {

  }

  protected readonly GameStepType = GameStepType;
}
