import {computed, effect, Injectable, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {UserService} from "./user.service";
import {RoomCommunicationsService} from "../communications/room-communications.service";
import {RandomGenerator} from "../../utils/random-generator";
import {filter, Observable, Subscription} from "rxjs";
import {GameEvent} from "./game-event";
import {GameEventType} from "./game-event-type";
import {GameStep} from "./steps/game-step";
import {PlayerListStep} from "./steps/player-list-step";
import {GameState} from "./steps/game-state";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Question} from "../../interfaces/question.interface";
import {Quiz} from "../../interfaces/quiz.interface";

/**
 * The host service manage the steps / phases of the game for a hosting game point of view.
 * It's generally the 'entry point' for a controller that will display the host infos.
 */
@Injectable({
  providedIn: 'root'
})
export class HostService extends UserService{
  private currentStep:WritableSignal<GameStep | undefined> = signal(undefined);
  private timeoutSubscription?: Subscription;

  constructor(room:RoomCommunicationsService) {
    super(room, RandomGenerator.generateString(4))
  }

  public setupQuiz(quiz:Quiz){
    this.currentStep.set(new PlayerListStep(new GameState(quiz)))
    this.joinRoom()
  }

  public getCurrentStep() : Signal<GameStep|undefined>{
    return computed(()=>{
      return this.currentStep();
    });
  }
  public getCurrentQuestion() : Signal<Question|undefined>{
    return computed(()=>{
      return this.currentStep()?.getGameState().getCurrentQuestion()();
    });
  }

  public nextStep() {
    if(this.timeoutSubscription)
      this.timeoutSubscription.unsubscribe();
    this.currentStep.set(this.currentStep()!.goToNextStep());
    if(this.currentStep()!.acceptPlayerAnswer())
      this.startAnsweringBroadcast();
    else this.StopAnsweringBroadcast();
    if(!this.currentStep()!.needManualInput()){
      this.timeoutSubscription = this.currentStep()!.onIsReadyToMoveToNextStep().subscribe(()=>{
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
    this.currentStep()?.getGameState().addPlayer(event.emitter!, event.content)
  }

  private addPlayerAnswer(event : GameEvent){
    this.currentStep()?.playerAnswer(event.emitter!, event.content)
  }

  private startAnsweringBroadcast(): void{
    this.room.sendEventTo(this.roomCode!,new GameEvent(GameEventType.StartAnswering))
  }

  private StopAnsweringBroadcast(): void{
    this.room.sendEventTo(this.roomCode!,new GameEvent(GameEventType.StopAnswering))
  }

  public static getHostOnlyRoom(roomCode:string): string{
    return "host-"+roomCode
  }
}
