import {computed, Signal, signal, WritableSignal} from "@angular/core";
import {NoRemainingQuestionException} from "./exceptions/no-remaining-question-exception";
import {Quiz} from "../../../interfaces/quiz.interface";
import {Player} from "../../../interfaces/player.interface";

export class GameState {
  private currentQuestionId:WritableSignal<number> = signal(0);
  private players:WritableSignal<Player[]> = signal([]);
  constructor(private quiz : Quiz) {
  }

  public getCurrentQuestion(){
    return computed(()=>{
      return this.quiz.questions[this.currentQuestionId()];
    });
  }
  public hasNextQuestion(){
    return computed(()=>{
      return this.currentQuestionId() < this.quiz.questions.length-1
    });
  }
  public goToNextQuestion(){
    if(!this.hasNextQuestion()()) throw new NoRemainingQuestionException();
    this.currentQuestionId.update((value)=>++value);
  }

  public getPlayers() : Signal<Player[]>{
    return this.players.asReadonly();
  }
  public addPlayer(playerId:string, pseudo:string){
    this.players.update((value)=>{
      return [...value, {id:playerId,pseudo:pseudo,score:0}];
    });
  }

  public addPlayerScore(playerId:string, score:number){
    this.players.update((value)=>{
      return value.map((player)=>{
        if(player.id === playerId){
          return {...player, score: player.score+score};
        }
        return player;
      });
    });
  }
}
