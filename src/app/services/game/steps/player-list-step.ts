import {GameStep} from "./game-step";
import {PresentQuestionStep} from "./present-question-step";

export class PlayerListStep extends GameStep{
  goToNextStep(): GameStep {
    return new PresentQuestionStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
