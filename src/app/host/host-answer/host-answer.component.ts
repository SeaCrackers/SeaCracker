import {Component} from '@angular/core';
import {HostComponent} from "../host-component";
import {HostService} from "../../services/game/host.service";
import { isTimedStep } from "../../services/game/steps/timed-step";
import { AssetsService } from '../../services/assets/assets.service';
import { assert } from '../../utils/assert.helper';

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

  constructor(host: HostService, private assetsService: AssetsService) {
    super(host)
  }

  getTimerDurationInMs(): number {
    const currentStep = this.host.getCurrentStep()();
    assert(isTimedStep(currentStep))
    return currentStep.getTimerDuration();
  }

  randomMusicUrl(): string {
    return this.assetsService.getRandomMusicUrl();
  }

  buttonColor(id: number): string {
    return "box rounded " + this.buttonClassColors[id];
  }
}
