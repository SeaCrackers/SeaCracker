import {GameStep} from "./game-step";
import {AnswerStep} from "./answer-step";

export class PresentQuestionStep extends GameStep{
  goToNextStep(): GameStep {
    //TODO : startAnswering for clients
    return new AnswerStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
