import {GameEventType} from "./game-event-type";

export class GameEvent {
  constructor(public type: GameEventType, public emitter: string|undefined = undefined, public content: any = undefined) {}
}
