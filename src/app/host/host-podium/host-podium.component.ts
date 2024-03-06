import { Component } from '@angular/core';
import {HostService} from "../../services/game/host.service";

@Component({
  selector: 'app-host-podium',
  standalone: true,
  imports: [],
  templateUrl: './host-podium.component.html',
  styleUrl: './host-podium.component.scss'
})
export class HostPodiumComponent {
  constructor(public host:HostService) {

  }
}
