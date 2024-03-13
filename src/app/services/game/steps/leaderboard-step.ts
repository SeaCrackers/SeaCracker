import {GameStep} from "./game-step";
import {GameStepType} from "./game-step-type";
import {AnswerStep} from "./answer-step";
import {PresentQuestionStep} from "./present-question-step";
import {PodiumStep} from "./podium-step";

export class LeaderboardStep extends GameStep{
  getType(): GameStepType {
    return GameStepType.LEADERBOARD;
  }

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
