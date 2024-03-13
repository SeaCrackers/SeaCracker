import {GameStep} from "./game-step";
import {GameStepType} from "./game-step-type";
import {PresentQuestionStep} from "./present-question-step";

export class PlayerListStep extends GameStep{
  getType(): GameStepType {
    return GameStepType.PLAYER_LIST;
  }

  goToNextStep(): GameStep {
    return new PresentQuestionStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
