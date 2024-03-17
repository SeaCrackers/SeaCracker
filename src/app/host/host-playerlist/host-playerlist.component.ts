import {Component, Input} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {PlayerListStep} from "../../services/game/steps/player-list-step";

@Component({
  selector: 'app-host-playerlist',
  standalone: true,
  imports: [],
  templateUrl: './host-playerlist.component.html',
  styleUrl: './host-playerlist.component.scss'
})
export class HostPlayerlistComponent {
  constructor(public host:HostService) {

  }

  @Input({ required: true }) step!: PlayerListStep;
}
