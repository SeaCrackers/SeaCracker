import {Component, Input} from '@angular/core';
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {AnswerStep} from "../../services/game/steps/answer-step";
import {HostComponent} from "../host-component";
import {HostService} from "../../services/game/host.service";
import {GameStep} from "../../services/game/steps/game-step";
import {TimedStep} from "../../services/game/steps/timed-step";

@Component({
  selector: 'app-host-answer',
  standalone: true,
  imports: [],
  templateUrl: './host-answer.component.html',
  styleUrl: './host-answer.component.scss'
})
export class HostAnswerComponent extends HostComponent{
  public musicUrl: string = this.randomMusicUrl();

  constructor(host: HostService) {
    super(host)
  }

  getTimerDuration() {
    return (this.step as unknown as TimedStep).getTimerDuration();
  }

  randomMusicUrl() {
    return "assets/audio/music-answer-"+(Math.floor(Math.random()*5.49)+1)+".ogg";
  }
}
