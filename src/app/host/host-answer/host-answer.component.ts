import {Component, Input} from '@angular/core';
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {AnswerStep} from "../../services/game/steps/answer-step";
import {HostComponent} from "../host-component";
import {HostService} from "../../services/game/host.service";

@Component({
  selector: 'app-host-answer',
  standalone: true,
  imports: [],
  templateUrl: './host-answer.component.html',
  styleUrl: './host-answer.component.scss'
})
export class HostAnswerComponent extends HostComponent{
  private step: AnswerStep;
  constructor(host:HostService) {
    super(host);
    this.step = host.getCurrentStep()() as AnswerStep;
  }
}
