import {GameStepType} from "./game-step-type";
import {GameState} from "./game-state";

export abstract class GameStep {
  constructor(protected gameState : GameState) {
  }
  public abstract getType():GameStepType;
  public abstract hasNextStep():boolean;
  public abstract goToNextStep():GameStep;
  public getGameState(){
    return this.gameState;
  }
}
