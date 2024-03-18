import { GameStep } from "./game-step";
import { AnswerStep } from "./answer-step";
import { LeaderboardStep } from "./leaderboard-step";
import { filter, firstValueFrom, map, merge, scan, Observable } from "rxjs";

const TIME_TO_PRESENT_QUESTION = 4000;

export class PresentQuestionStep extends GameStep {
  private timeSpent: number = 0;

  goToNextStep(): GameStep {
    return new AnswerStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

  override onIsReadyToMoveToNextStep(): Observable<void> {
    return new Observable((subscriber) => {
      setInterval(() => {
        this.timeSpent += 1;
        if (this.timeSpent * 1000 >= TIME_TO_PRESENT_QUESTION) {
          subscriber.next();
        }
      }, 1000);
    });
  }

  getRemainingTime(): number {
    return TIME_TO_PRESENT_QUESTION/1000 - this.timeSpent;
  }

  override needManualInput(): boolean {
    return false;
  }
}
