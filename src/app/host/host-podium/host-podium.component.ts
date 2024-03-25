import {Component, Input} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {PodiumStep} from "../../services/game/steps/podium-step";
import {HostComponent} from "../host-component";
import {AnswerStep} from "../../services/game/steps/answer-step";
import {GameStep} from "../../services/game/steps/game-step";
import {Player} from "../../interfaces/player.interface";

@Component({
  selector: 'app-host-podium',
  standalone: true,
  imports: [],
  templateUrl: './host-podium.component.html',
  styleUrl: './host-podium.component.scss'
})
export class HostPodiumComponent extends HostComponent{
  constructor(host: HostService) {
    super(host)
  }

  getLeaderboard() : Player[] {
    const players : Player[] = this.host.getCurrentStep()()!.getGameState().getPlayers()();
    return [...players].sort((a, b) => {
      return b.score - a.score;
    });
  }
}
