import { Component, Input } from '@angular/core';
import { PlayerListStep } from "../../services/game/steps/player-list-step";
import { LeaderboardStep } from "../../services/game/steps/leaderboard-step";
import { HostComponent } from "../host-component";
import { HostService } from "../../services/game/host.service";
import { AnswerStep } from "../../services/game/steps/answer-step";
import {GameStep} from "../../services/game/steps/game-step";

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
<<<<<<< HEAD
    
    return [...players].sort((a, b) => {
=======

    // TODO: refactor the sort to edit a copy of the array
    return players.sort((a, b) => {
>>>>>>> b02c4c38854519ec2d3090d144a4d44553da1c7e
      return b.score - a.score;
    });
  }
}
