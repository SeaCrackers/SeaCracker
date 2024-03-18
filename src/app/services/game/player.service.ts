import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {UserService} from "./user.service";
import {RoomCommunicationsService} from "../communications/room-communications.service";
import {filter, Observable} from "rxjs";
import {GameEvent} from "./game-event";
import {GameEventType} from "./game-event-type";
import {HostService} from "./host.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends UserService{
  private canAnswer:WritableSignal<boolean> = signal(false)
  constructor(room:RoomCommunicationsService) {
    super(room)
  }

  public joinRoom(roomCode : string): void {
    this.roomCode = roomCode
    this.room.joinRoom(this.roomCode)
    this.registerEvents()
  }

  public setupName(pseudo: string): void{
    this.room.sendEventTo(HostService.getHostOnlyRoom(this.roomCode!),new GameEvent(GameEventType.Setup,this.room.getMyUniqueIdentifier(),pseudo))
  }

  public getCanAnswer() : Signal<boolean>{
    return this.canAnswer.asReadonly()
  }

  public answerQuestion(answerId: number): void{
    this.room.sendEventTo(HostService.getHostOnlyRoom(this.roomCode!),new GameEvent(GameEventType.Answer,this.room.getMyUniqueIdentifier(),answerId))
    this.canAnswer.set(false)
  }

  private onHostStartAnswering(): Observable<GameEvent>{
    return this.room.onEventReceived<GameEvent>()
      .pipe(filter((event)=>event.type === GameEventType.StartAnswering))
  }

  private registerEvents(): void{
    this.onHostStartAnswering().pipe(takeUntilDestroyed()).subscribe((gameEvent)=>{
      console.log("Received start answering event"+gameEvent.content)
      this.canAnswer.set(true)
    });
  }
}
