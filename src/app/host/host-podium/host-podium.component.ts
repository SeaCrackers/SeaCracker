import {Component, Input} from '@angular/core';
import {HostService} from "../../services/game/host.service";
import {PlayerListStep} from "../../services/game/steps/player-list-step";
import {PodiumStep} from "../../services/game/steps/podium-step";
import {HostComponent} from "../host-component";
import {AnswerStep} from "../../services/game/steps/answer-step";

@Component({
  selector: 'app-host-podium',
  standalone: true,
  imports: [],
  templateUrl: './host-podium.component.html',
  styleUrl: './host-podium.component.scss'
})
export class HostPodiumComponent extends HostComponent{
  private step: PodiumStep;
  constructor(host:HostService) {
    super(host);
    this.step = host.getCurrentStep()() as PodiumStep;
  }

  getLeaderboard() {
    const players = this.host.getCurrentStep()()!.getGameState().getPlayers()();
    
    // TODO: refactor the sort to edit a copy of the array
    return players.sort((a, b) => {
      return b.score - a.score;
    });
  }
}
