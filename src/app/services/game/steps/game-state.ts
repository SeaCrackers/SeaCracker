import {computed, Signal, signal, WritableSignal} from "@angular/core";
import {NoRemainingQuestionException} from "./exceptions/no-remaining-question-exception";
import {Quiz} from "../../../interfaces/quiz.interface";
import {Player} from "../../../interfaces/player.interface";
import {Question} from "../../../interfaces/question.interface";

/**
 * Game state is a model that shows the current status of the quiz and players in a host.
 */
export class GameState {
  private currentQuestionId:WritableSignal<number> = signal(0);
  private players:WritableSignal<Player[]> = signal([]);
  constructor(private quiz : Quiz) {
  }

  public getCurrentQuestion() : Signal<Question>{
    return computed(()=>{
      return this.quiz.questions[this.currentQuestionId()];
    });
  }
  public hasNextQuestion() : Signal<boolean>{
    return computed(() : boolean=>{
      return this.currentQuestionId() < this.quiz.questions.length-1
    });
  }
  public goToNextQuestion():void
  {
    if(!this.hasNextQuestion()()) throw new NoRemainingQuestionException();
    this.currentQuestionId.update((value : number)=>++value);
  }

  public getPlayers() : Signal<Player[]>{
    return this.players.asReadonly();
  }
  public addPlayer(playerId:string, pseudo:string):void{
    this.players.update((value : Player[])=>{
      return [...value, {id:playerId,pseudo:pseudo,score:0}];
    });
  }

  public addPlayerScore(playerId:string, score:number) : void
  {
    this.players.update((value : Player[])=>{
      return value.map((player:Player) : Player =>{
        if(player.id === playerId){
          return {...player, score: player.score+score};
        }
        return player;
      });
    });
  }
}
