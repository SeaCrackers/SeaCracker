import { Component } from '@angular/core';
import {HostService} from "../../services/game/host.service";

@Component({
  selector: 'app-host-question',
  standalone: true,
  imports: [],
  templateUrl: './host-question.component.html',
  styleUrl: './host-question.component.scss'
})
export class HostQuestionComponent {
  constructor(public host:HostService) {

  }
}
