import {GameStep} from "./game-step";
import {PresentQuestionStep} from "./present-question-step";
import {LastStepException} from "./exceptions/last-step-exception";

export class PodiumStep extends GameStep{
  goToNextStep(): GameStep {
    throw new LastStepException();
  }

  hasNextStep(): boolean {
    return false;
  }

}
