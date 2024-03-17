import {computed, Signal, signal, WritableSignal} from "@angular/core";
import {NoRemainingQuestionException} from "./exceptions/no-remaining-question-exception";

export interface Quiz{
  getQuestions() : Question[];
}
export interface Question{
  getQuestions() : string[];
}

export class Quiz implements Quiz{
  getQuestions(): Question[] {
    return [];
  }
}

export class GameState {
  private currentQuestionId:WritableSignal<number> = signal(0);
  constructor(private quiz : Quiz) {
  }

  public getCurrentQuestion(){
    return computed(()=>{
      return this.quiz.getQuestions()[this.currentQuestionId()];
    });
  }
  public hasNextQuestion(){
    return computed(()=>{
      return this.currentQuestionId() == this.quiz.getQuestions().length-1
    });
  }
  public goToNextQuestion(){
    if(!this.hasNextQuestion()()) throw new NoRemainingQuestionException();
    this.currentQuestionId.update((value)=>value++);
  }
}
