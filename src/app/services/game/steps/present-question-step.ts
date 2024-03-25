import { GameStep } from "./game-step";
import { AnswerStep } from "./answer-step";
import { LeaderboardStep } from "./leaderboard-step";
import { filter, firstValueFrom, map, merge, scan, Observable } from "rxjs";
import {TimedStep} from "./timed-step";

const TIME_TO_PRESENT_QUESTION = 4000;

/**
 * A phase to present the question and autoredirect to AnswerStep
 */
export class PresentQuestionStep extends GameStep implements TimedStep {

  goToNextStep(): GameStep {
    return new AnswerStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

  override onIsReadyToMoveToNextStep(): Observable<void> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next();
      }, TIME_TO_PRESENT_QUESTION);
    });
  }

  getTimerDuration(): number {
    return TIME_TO_PRESENT_QUESTION;
  }

  override needManualInput(): boolean {
    return false;
  }
}
