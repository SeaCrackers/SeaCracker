import { GameStep } from "./game-step";
import {
  filter,
  map,
  merge,
  Observable,
  scan,
  Subject,
} from "rxjs";
import {RevealStep} from "./reveal-step";

/**
 * An answering phase in the host (retrieve player responses / timeout).
 */
export class AnswerStep extends GameStep {
  private playerAnswers$: Subject<void> = new Subject();
  private readonly timeout$: Observable<void> = new Observable((subscriber) => {
    const intervalId = setTimeout(() => {
      subscriber.next();
    }, this.getTimerDuration());
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  });
  private startedAt:Date = new Date();

  goToNextStep(): GameStep {
    return new RevealStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }

  getTimerDuration(): number {
    return this.gameState.getCurrentQuestion()().timer*1000;
  }

  override onIsReadyToMoveToNextStep(): Observable<void> {
    return merge(
      this.playerAnswers$.pipe(
        scan((answersCount) => answersCount + 1, 0),
        filter((answersCount) => answersCount === this.gameState.getPlayers()().length),
        map(() => { })
      ),
      this.timeout$
    );
  }

  override needManualInput(): boolean {
    return false;
  }

  override acceptPlayerAnswer(): boolean {
    return true;
  }

  override playerAnswer(playerId: string, answer: number): void {
    if(this.gameState.getCurrentQuestion()().answers[answer].correct){
      this.gameState.addPlayerScore(playerId, Math.round((1 - ((Date.now() - this.startedAt.getTime()) / (2 * this.getTimerDuration()))) * 1000));
    }
    this.playerAnswers$.next();
  }
}
