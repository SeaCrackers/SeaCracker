import {GameStep} from "./game-step";
import {GameStepType} from "./game-step-type";
import {LeaderboardStep} from "./leaderboard-step";

export class AnswerStep extends GameStep{
  getType(): GameStepType {
    return GameStepType.QUESTION;
  }

  goToNextStep(): GameStep {
    return new LeaderboardStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
