import {Component} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {HostComponent} from "../host-component";
import { isTimedStep } from "../../services/game/steps/timed-step";
import { assert } from '../../utils/assert.helper';

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
    const currentStep = this.host.getCurrentStep()();
    assert(isTimedStep(currentStep));
    return currentStep.getTimerDuration();
  }
}

