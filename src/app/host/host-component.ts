import {HostService} from "../services/game/host.service";
import {GameStep} from "../services/game/steps/game-step";

export class HostComponent {
  protected step: GameStep;
  constructor(protected host: HostService) {
    this.step = host.getCurrentStep()()!;
  }
}
