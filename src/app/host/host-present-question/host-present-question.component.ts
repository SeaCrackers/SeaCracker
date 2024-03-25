import {Component} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {HostComponent} from "../host-component";
import {TimedStep} from "../../services/game/steps/timed-step";

@Component({
  selector: 'app-host-present-question',
  standalone: true,
  imports: [],
  templateUrl: './host-present-question.component.html',
  styleUrl: './host-present-question.component.scss'
})
export class HostPresentQuestionComponent extends HostComponent {
  constructor(host: HostService) {
    super(host)
  }

  getTimerDuration(): number {
    return (this.host.getCurrentStep()() as unknown as TimedStep).getTimerDuration();
  }
}

