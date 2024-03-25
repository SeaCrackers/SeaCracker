import {HostService} from "../services/game/host.service";
import {GameStep} from "../services/game/steps/game-step";
import {Question} from "../interfaces/question.interface";

export class HostComponent {
  constructor(protected host: HostService) {}

  getCurrentQuestion() : Question{
    return this.host.getCurrentQuestion()()!;
  }
}
