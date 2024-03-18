import { Component, Input } from '@angular/core';
import { HostService } from "../../services/game/host.service";
import { PlayerListStep } from "../../services/game/steps/player-list-step";
import { PresentQuestionStep } from "../../services/game/steps/present-question-step";
import { HostComponent } from "../host-component";
import { AnswerStep } from "../../services/game/steps/answer-step";

@Component({
  selector: 'app-host-present-question',
  standalone: true,
  imports: [],
  templateUrl: './host-present-question.component.html',
  styleUrl: './host-present-question.component.scss'
})
export class HostPresentQuestionComponent extends HostComponent {
  private step: PresentQuestionStep;
  private presentationDuration?: number;

  constructor(host: HostService) {
    super(host);
    this.step = host.getCurrentStep()() as PresentQuestionStep;
  }

  getRemainingTime() {
    if (!this.presentationDuration)
      this.presentationDuration = this.step.getRemainingTime();
    return this.step.getRemainingTime();
  }

  getPresentationDuration() {
    return this.presentationDuration || 1;
  }

  getBarPercentage() {
    if (this.presentationDuration)
      return (this.getRemainingTime() - 1)*1.1 / this.getPresentationDuration() * 100 + '%';
    return '100%';
  }
}
