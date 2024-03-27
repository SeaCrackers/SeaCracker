import {Component} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {HostComponent} from "../host-component";
import {Player} from "../../interfaces/player.interface";
import { sortBy } from 'lodash';

@Component({
  selector: 'app-host-podium',
  standalone: true,
  imports: [],
  templateUrl: './host-podium.component.html',
  styleUrl: './host-podium.component.scss'
})
export class HostPodiumComponent extends HostComponent {
  private podiumViewPlaces: number[] = [2,1,3]

  constructor(host: HostService) {
    super(host)
  }

  getLeaderboard(): Player[] {
    const players: Player[] = this.host.getCurrentStep()()!.getGameState().getPlayers()();
    return sortBy(players, ({score})=>score);
  }

  getPodiumViewPlaces(): number[] {
    return this.podiumViewPlaces;
  }
}
