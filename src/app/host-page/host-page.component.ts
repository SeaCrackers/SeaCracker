import { Component } from '@angular/core';
import {RoomCommunicationsService} from "../services/communications/room-communications.service";
import {RandomGenerator} from "../utils/random-generator";
import {HostService} from "../services/game/host.service";
@Component({
  selector: 'app-host-page',
  standalone: true,
  imports: [],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.scss'
})
export class HostPageComponent {
  constructor(public host:HostService) {

  }
}
