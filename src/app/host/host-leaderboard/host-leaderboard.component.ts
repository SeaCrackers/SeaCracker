import { Component, Input } from '@angular/core';
import { PlayerListStep } from "../../services/game/steps/player-list-step";
import { LeaderboardStep } from "../../services/game/steps/leaderboard-step";
import { HostComponent } from "../host-component";
import { HostService } from "../../services/game/host.service";
import { AnswerStep } from "../../services/game/steps/answer-step";

@Component({
  selector: 'app-host-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './host-leaderboard.component.html',
  styleUrl: './host-leaderboard.component.scss'
})
export class HostLeaderboardComponent extends HostComponent {
  private step: LeaderboardStep;
  constructor(host: HostService) {
    super(host);
    this.step = host.getCurrentStep()() as LeaderboardStep;
  }

  getLeaderboard() {
    const players = this.host.getCurrentStep()()!.getGameState().getPlayers()();
    
    return players.sort((a, b) => {
      return b.score - a.score;
    });
  }
}
