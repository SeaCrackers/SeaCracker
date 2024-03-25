import {Component, Input} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {HostComponent} from "../host-component";
import {AnswerStep} from "../../services/game/steps/answer-step";
import {GameStep} from "../../services/game/steps/game-step";

@Component({
  selector: 'app-host-playerlist',
  standalone: true,
  imports: [],
  templateUrl: './host-playerlist.component.html',
  styleUrl: './host-playerlist.component.scss'
})
export class HostPlayerlistComponent extends HostComponent{
  constructor(host: HostService) {
    super(host)
  }
}
