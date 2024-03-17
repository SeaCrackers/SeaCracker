import {GameStep} from "./game-step";
import {LeaderboardStep} from "./leaderboard-step";

export class AnswerStep extends GameStep{
  goToNextStep(): GameStep {
    return new LeaderboardStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

}
