import {computed, effect, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {UserService} from "./user.service";
import {RoomCommunicationsService} from "../communications/room-communications.service";
import {RandomGenerator} from "../../utils/random-generator";
import {filter, Observable} from "rxjs";
import {GameEvent} from "./game-event";
import {GameEventType} from "./game-event-type";
// import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {GameStep} from "./steps/game-step";
import {PlayerListStep} from "./steps/player-list-step";
import {GameState, Question, Quiz} from "./steps/game-state";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class HostService extends UserService{
  private currentStep:WritableSignal<GameStep> = signal(new PlayerListStep(new GameState(new Quiz())));

  constructor(room:RoomCommunicationsService) {
    super(room, RandomGenerator.generateString(4))
    this.joinRoom()
  }

  public getCurrentStep() : Signal<GameStep>{
    return computed(()=>{
      return this.currentStep();
    });
  }
  public getCurrentQuestion() : Signal<Question>{
    return computed(()=>{
      return this.currentStep().getGameState().getCurrentQuestion()();
    });
  }

  public nextStep() {
    this.currentStep.set(this.currentStep().goToNextStep());
    if(this.currentStep().acceptPlayerAnswer())
      this.startAnsweringBroadcast();
    if(!this.currentStep().needManualInput()){
      this.currentStep().onIsReadyToMoveToNextStep().subscribe(()=>{
        this.nextStep();
      });
    }
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
      this.setupPlayer(gameEvent as GameEvent);
    });
    this.onPlayerAnswer().pipe(takeUntilDestroyed()).subscribe((gameEvent)=>{
      this.addPlayerAnswer(gameEvent as GameEvent);
    });
  }

  private setupPlayer(event : GameEvent): void{
    this.currentStep().getGameState().addPlayer(event.emitter!, event.content)
  }

  private addPlayerAnswer(event : GameEvent){
    this.currentStep().playerAnswer(event.emitter!, event.content)
  }

  private startAnsweringBroadcast(): void{
    this.room.sendEventTo(this.roomCode!,new GameEvent(GameEventType.StartAnswering))
  }

  public static getHostOnlyRoom(roomCode:string): string{
    return "host-"+roomCode
  }
}
