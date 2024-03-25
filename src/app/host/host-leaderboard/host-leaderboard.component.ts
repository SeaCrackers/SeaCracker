import {Component} from '@angular/core';
import {HostComponent} from "../host-component";
import {HostService} from "../../services/game/host.service";

@Component({
  selector: 'app-host-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './host-leaderboard.component.html',
  styleUrl: './host-leaderboard.component.scss'
})
export class HostLeaderboardComponent extends HostComponent {
  constructor(host: HostService) {
    super(host)
  }

  getLeaderboard() {
    const players = this.host.getCurrentStep()()!.getGameState().getPlayers()();
    return [...players].sort((a, b) => {
      return b.score - a.score;
    });
  }
}
