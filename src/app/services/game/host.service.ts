import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {UserService} from "./user.service";
import {RoomCommunicationsService} from "../communications/room-communications.service";
import {RandomGenerator} from "../../utils/random-generator";
import {filter, Observable} from "rxjs";
import {GameEvent} from "./game-event";
import {GameEventType} from "./game-event-type";

@Injectable({
  providedIn: 'root'
})
export class HostService extends UserService{
  private playersPseudos:WritableSignal<string[]> = signal([])
  constructor(room:RoomCommunicationsService) {
    super(room, RandomGenerator.generateString(4))
    this.joinRoom()
  }

  public getPlayerPseudos() : Signal<string[]>{
    return this.playersPseudos.asReadonly();
  }

  public nextStep() {
    //TODO : Implement the next step logic
    this.startAnsweringBroadcast();
  }

  private joinRoom(): void {
    this.room.joinRoom(HostService.getHostOnlyRoom(this.roomCode!))
    this.registerEvents()
  }

  private onPlayerSetup(): Observable<GameEvent>{
    return this.room.onEventReceived<GameEvent>()
      .pipe(filter((event)=>event.type === GameEventType.Setup && event.emitter != undefined))
  }

  private onPlayerAnswer(): Observable<GameEvent>{
    return this.room.onEventReceived<GameEvent>()
      .pipe(filter((event)=>event.type === GameEventType.Answer && event.emitter != undefined))
  }

  private registerEvents(): void{
    this.onPlayerSetup().pipe(takeUntilDestroyed()).subscribe((gameEvent)=>{
      this.setupPlayer(gameEvent);
    });
    this.onPlayerAnswer().pipe(takeUntilDestroyed()).subscribe((gameEvent)=>{
      this.addPlayerAnswer(gameEvent);
    });
  }

  private setupPlayer(event : GameEvent): void{
    console.log("Received setup event "+event.content)
    this.playersPseudos.update((pseudos)=>[...pseudos,event.content])
  }

  private addPlayerAnswer(event : GameEvent){
    console.log("Received answer event "+event.content)
  }

  private startAnsweringBroadcast(): void{
    this.room.sendEventTo(this.roomCode!,new GameEvent(GameEventType.StartAnswering))
  }

  public static getHostOnlyRoom(roomCode:string): string{
    return "host-"+roomCode
  }
}
