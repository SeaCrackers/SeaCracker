import {Component, Input} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {HostComponent} from "../host-component";
import {AnswerStep} from "../../services/game/steps/answer-step";

@Component({
  selector: 'app-host-playerlist',
  standalone: true,
  imports: [],
  templateUrl: './host-playerlist.component.html',
  styleUrl: './host-playerlist.component.scss'
})
export class HostPlayerlistComponent extends HostComponent{
  private step: PlayerListStep;
  constructor(host:HostService) {
    super(host);
    this.step = host.getCurrentStep()() as PlayerListStep;
  }
}
