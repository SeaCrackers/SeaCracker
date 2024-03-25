import {Component} from '@angular/core';
import {HostComponent} from "../host-component";
import {HostService} from "../../services/game/host.service";

@Component({
  selector: 'app-host-loading',
  standalone: true,
  imports: [],
  templateUrl: './host-loading.component.html',
  styleUrl: './host-loading.component.scss'
})
export class HostLoadingComponent extends HostComponent {
  constructor(host: HostService) {
    super(host)
  }
}
