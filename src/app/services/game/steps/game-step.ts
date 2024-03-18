import {GameState} from "./game-state";
import {signal, Signal} from "@angular/core";

export abstract class GameStep {
  constructor(protected gameState : GameState) {
  }
  public abstract hasNextStep():boolean;
  public abstract goToNextStep():GameStep;

  public onIsReadyToMoveToNextStep():Promise<void> {
    return new Promise<void>((resolve, reject) => {
      resolve();
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
