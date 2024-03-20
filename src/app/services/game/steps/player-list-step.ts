import {GameStep} from "./game-step";
import {PresentQuestionStep} from "./present-question-step";

/**
 * A playerlist phase in the host is a dump phase ment only to display the playerlist and go to next step
 */
export class PlayerListStep extends GameStep{
  goToNextStep(): GameStep {
    return new PresentQuestionStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
