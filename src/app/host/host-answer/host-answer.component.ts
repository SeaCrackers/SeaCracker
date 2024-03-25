import {Component} from '@angular/core';
import {HostComponent} from "../host-component";
import {HostService} from "../../services/game/host.service";
import {TimedStep} from "../../services/game/steps/timed-step";

@Component({
  selector: 'app-host-answer',
  standalone: true,
  imports: [],
  templateUrl: './host-answer.component.html',
  styleUrl: './host-answer.component.scss'
})
export class HostAnswerComponent extends HostComponent {
  private buttonClassColors = ["bg-primary", "bg-success", "bg-danger", ""];
  public musicUrl: string = this.randomMusicUrl();

  constructor(host: HostService) {
    super(host)
  }

  getTimerDuration(): number {
    return (this.host.getCurrentStep()() as unknown as TimedStep).getTimerDuration();
  }

  randomMusicUrl(): string {
    return "assets/audio/music-answer-" + (Math.floor(Math.random() * 5.49) + 1) + ".ogg";
  }

  buttonColor(id: number): string {
    return "box rounded " + this.buttonClassColors[id];
  }
}
