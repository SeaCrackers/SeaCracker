import {Component, Input} from '@angular/core';
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {LeaderboardStep} from "../../services/game/steps/leaderboard-step";

@Component({
  selector: 'app-host-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './host-leaderboard.component.html',
  styleUrl: './host-leaderboard.component.scss'
})
export class HostLeaderboardComponent {
  @Input({ required: true }) step!: LeaderboardStep;
}
