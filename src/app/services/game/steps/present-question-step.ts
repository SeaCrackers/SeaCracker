import {GameStep} from "./game-step";
import {AnswerStep} from "./answer-step";
import {LeaderboardStep} from "./leaderboard-step";

export class PresentQuestionStep extends GameStep{
  goToNextStep(): GameStep {
    return new AnswerStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
