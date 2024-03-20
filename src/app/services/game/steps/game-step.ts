import {GameState} from "./game-state";
import {signal, Signal} from "@angular/core";
import { Observable } from "rxjs";

/**
 * A step is a generic stage used in a game hosting context.
 * Each inheritor will be a different phase of the presentation.
 */
export abstract class GameStep {
  constructor(protected gameState : GameState) {
  }
  public abstract hasNextStep():boolean;
  public abstract goToNextStep():GameStep;

  public onIsReadyToMoveToNextStep():Observable<void> {
    return new Observable<void>((subscriber) => {
      subscriber.next();
    });
  }

  public getGameState(){
    return this.gameState;
  }
  public playerAnswer(playerId:string, answer:number){
    //Do nothing by default for 'late' players
  }

  public acceptPlayerAnswer():boolean{
    return false;
  }

  public needManualInput():boolean{
    return true;
  }
}
