import {GameEventType} from "./game-event-type";

/**
 * Model that hold a game only (business logic, not transport layer) event infos
 */
export class GameEvent {
  constructor(public type: GameEventType, public emitter: string | undefined = undefined, public content: any = undefined) {
  }
}
