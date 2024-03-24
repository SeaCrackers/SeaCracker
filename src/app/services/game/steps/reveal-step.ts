import {GameStep} from "./game-step";
import {LeaderboardStep} from "./leaderboard-step";

/**
 * A reveal phase in the host is a phase meant to display the correct answers to the players.
 */
export class RevealStep extends GameStep{
  goToNextStep(): GameStep {
    return new LeaderboardStep(this.gameState);
  }

  hasNextStep(): boolean {
    return true;
  }
}
