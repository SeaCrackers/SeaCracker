import {GameStep} from "./game-step";
import {LastStepException} from "./exceptions/last-step-exception";

/**
 * A leaderboard phase in the host is the last phase ment to display final score.
 */
export class PodiumStep extends GameStep {
  goToNextStep(): GameStep {
    throw new LastStepException();
  }

  hasNextStep(): boolean {
    return false;
  }

}
