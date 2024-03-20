import {GameStep} from "./game-step";
import {AnswerStep} from "./answer-step";
import {PresentQuestionStep} from "./present-question-step";
import {PodiumStep} from "./podium-step";

/**
 * A leaderboard phase in the host is a dump phase (ment to display score based on game status)
 */
export class LeaderboardStep extends GameStep{
  goToNextStep(): GameStep {
    if(this.gameState.hasNextQuestion()()){
      this.gameState.goToNextQuestion();
      return new PresentQuestionStep(this.gameState);
    }else{
      return new PodiumStep(this.gameState);
    }
  }

  hasNextStep(): boolean {
    return true;
  }
}
