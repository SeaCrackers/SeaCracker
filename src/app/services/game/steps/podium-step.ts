import {GameStep} from "./game-step";
import {GameStepType} from "./game-step-type";
import {PresentQuestionStep} from "./present-question-step";
import {LastStepException} from "./exceptions/last-step-exception";

export class PodiumStep extends GameStep{
  getType(): GameStepType {
    return GameStepType.LEADERBOARD;
  }

  goToNextStep(): GameStep {
    throw new LastStepException();
  }

  hasNextStep(): boolean {
    return false;
  }

}
