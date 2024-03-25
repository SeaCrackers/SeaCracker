import {Component} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {HostComponent} from "../host-component";

@Component({
  selector: 'app-host-reveal',
  standalone: true,
  imports: [],
  templateUrl: './host-reveal.component.html',
  styleUrl: './host-reveal.component.scss'
})
export class HostRevealComponent extends HostComponent {
  constructor(host: HostService) {
    super(host)
  }
}
