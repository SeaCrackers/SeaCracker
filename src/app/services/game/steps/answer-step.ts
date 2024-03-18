import {GameStep} from "./game-step";
import {LeaderboardStep} from "./leaderboard-step";
import {effect, signal, Signal, WritableSignal} from "@angular/core";
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
import {toObservable} from "@angular/core/rxjs-interop";

export class AnswerStep extends GameStep{
  private playerAnswers$ : Subject<void> = new Subject();
  private isReadyToMoveToNextStep: WritableSignal<boolean> = signal(false);
  private readonly timeout$ : Observable<void> = new Observable(function subscribe(subscriber) {
    const intervalId = setTimeout(() => {
      subscriber.next();
    }, 2000);
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

  override onIsReadyToMoveToNextStep(): Promise<void> {
    return firstValueFrom(
      merge(
        this.playerAnswers$.pipe(
          scan((answersCount) => answersCount + 1, 0),
          filter((answersCount) => answersCount === this.gameState.getPlayers().length),
          map(() => {})
        ),
        this.timeout$
      )
    );
  }

  override needManualInput(): boolean {
    return false;
  }

  override acceptPlayerAnswer(): boolean {
    return true;
  }

  override playerAnswer(playerId: string, answer: number): void {
    //TODO : Check if the answer is correct
    this.gameState.addPlayerScore(playerId, 100);
    this.playerAnswers$.next();
  }
}
