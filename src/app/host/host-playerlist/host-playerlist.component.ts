import {Component} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {HostComponent} from "../host-component";

@Component({
  selector: 'app-host-playerlist',
  standalone: true,
  imports: [],
  templateUrl: './host-playerlist.component.html',
  styleUrl: './host-playerlist.component.scss'
})
export class HostPlayerlistComponent extends HostComponent {
  constructor(host: HostService) {
    super(host)
  }
}
