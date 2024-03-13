import {GameStep} from "./game-step";
import {GameStepType} from "./game-step-type";
import {AnswerStep} from "./answer-step";

export class PresentQuestionStep extends GameStep{
  getType(): GameStepType {
    return GameStepType.QUESTION;
  }

  goToNextStep(): GameStep {
    //TODO : startAnswering for clients
    return new AnswerStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
