import { Component } from '@angular/core';
import {AnswerStep} from "../../services/game/steps/answer-step";
import {HostService} from "../../services/game/host.service";
import {RevealStep} from "../../services/game/steps/reveal-step";
import {HostComponent} from "../host-component";

@Component({
  selector: 'app-host-reveal',
  standalone: true,
  imports: [],
  templateUrl: './host-reveal.component.html',
  styleUrl: './host-reveal.component.scss'
})
export class HostRevealComponent extends HostComponent{
  private step: RevealStep;
  constructor(host:HostService) {
    super(host);
    this.step = host.getCurrentStep()() as RevealStep;
  }
}
