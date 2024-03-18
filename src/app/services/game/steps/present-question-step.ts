import {GameStep} from "./game-step";
import {AnswerStep} from "./answer-step";
import {LeaderboardStep} from "./leaderboard-step";
import {filter, firstValueFrom, map, merge, scan} from "rxjs";

const TIME_TO_PRESENT_QUESTION = 3000;

export class PresentQuestionStep extends GameStep{
  goToNextStep(): GameStep {
    return new AnswerStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

  override onIsReadyToMoveToNextStep(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, TIME_TO_PRESENT_QUESTION);
    });
  }

  override needManualInput(): boolean {
    return false;
  }
}
