import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {UserService} from "./user.service";
import {RoomCommunicationsService} from "../communications/room-communications.service";
import {RandomGenerator} from "../../utils/random-generator";
import {filter, Observable} from "rxjs";
import {GameEvent} from "./game-event";
import {GameEventType} from "./game-event-type";
import {GameStatusEnum} from "./game-status-enum";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class HostService extends UserService{
  private playersPseudos:WritableSignal<string[]> = signal([])
  private currentStatus:WritableSignal<GameStatusEnum> = signal(GameStatusEnum.PlayerList);
  private currentQuestion:WritableSignal<number> = signal(0);
  private isLastQuestion:Signal<boolean> = computed(()=>{
    return this.currentQuestion() == this.quizz.getQuestions().length-1
  });
  private quizz:any = {};

  constructor(room:RoomCommunicationsService) {
    super(room, RandomGenerator.generateString(4))
    this.joinRoom()
  }

  public getPlayerPseudos() : Signal<string[]>{
    return this.playersPseudos.asReadonly();
  }
  public getCurrentStatus() : Signal<GameStatusEnum>{
    return this.currentStatus.asReadonly();
  }
  public getCurrentQuestion() : Signal<number>{
    return this.currentQuestion.asReadonly();
  }

  public nextStep() {
    //TODO : Refactor / split the logic
    switch (this.currentStatus()){
      case GameStatusEnum.PlayerList:
        this.currentStatus.set(GameStatusEnum.PresentQuestion);
        break;
      case GameStatusEnum.PresentQuestion:
        this.currentStatus.set(GameStatusEnum.Answer);
        this.startAnsweringBroadcast();
        break;
      case GameStatusEnum.Answer:
        this.currentStatus.set(GameStatusEnum.Leaderboard);
        break;
      case GameStatusEnum.Leaderboard:
        if(this.isLastQuestion()){
          this.currentStatus.set(GameStatusEnum.Podium);
        }else{
          this.currentStatus.set(GameStatusEnum.PresentQuestion);
          this.currentQuestion.update((value)=>value++);
        }
        break;
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

function takeUntilDestroyed(): import("rxjs").OperatorFunction<GameEvent, unknown> {
  throw new Error('Function not implemented.');
}
