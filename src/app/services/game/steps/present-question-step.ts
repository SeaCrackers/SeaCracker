import {GameStep} from "./game-step";
import {AnswerStep} from "./answer-step";
import {Observable, Subscriber} from "rxjs";
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
    return new Observable((subscriber: Subscriber<void>): void => {
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
