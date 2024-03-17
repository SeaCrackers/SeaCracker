import {Component, Input} from '@angular/core';
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {AnswerStep} from "../../services/game/steps/answer-step";

@Component({
  selector: 'app-host-answer',
  standalone: true,
  imports: [],
  templateUrl: './host-answer.component.html',
  styleUrl: './host-answer.component.scss'
})
export class HostAnswerComponent {
  @Input({ required: true }) step!: AnswerStep;
}
