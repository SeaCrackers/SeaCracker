import { GameStep } from "./game-step";
import { LeaderboardStep } from "./leaderboard-step";
import { effect, signal, Signal, WritableSignal } from "@angular/core";
import {
  catchError,
  filter, firstValueFrom,
  lastValueFrom,
  map,
  merge,
  Observable,
  scan,
  Subject,
  switchMap,
  takeWhile,
  timeout
} from "rxjs";
import { toObservable } from "@angular/core/rxjs-interop";

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

  goToNextStep(): GameStep {
    return new LeaderboardStep(this.gameState);
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
      this.gameState.addPlayerScore(playerId, 100);
    }
    this.playerAnswers$.next();
  }
}
