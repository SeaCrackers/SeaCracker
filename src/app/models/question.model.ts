import {Answer} from "./answer.model";

export enum Timers {
  TWENTY = 20,
  FORTY = 40,
  SIXTY = 60,
  EIGHTY = 80
}
export class Question {
  constructor(private id: number, private question: string, private timer : Timers, private answers: Answer[] = []){}

  public getId(): number {
    return this.id;
  }

  public getQuestion(): string {
    return this.question;
  }

  public getTimer(): Timers {
    return this.timer;
  }
  public getTimers(): Timers[] {
    return [Timers.TWENTY, Timers.FORTY, Timers.SIXTY, Timers.EIGHTY];
  }
  public getAnswers(): Answer[] {
    return this.answers;
  }

  public setId(id: number) : void{
    this.id = id;
  }

  public setQuestion(question: string) : void{
    this.question = question;
  }

  public setTimer(timer: Timers) : void{
    this.timer = timer;
  }

  public setAnswers(answers: Answer[]) : void{
    this.answers = answers;
  }

  public addAnswer(answer: Answer) : void{
    this.answers.push(answer);
  }

  public removeAnswer(answer: Answer) : void{
    this.answers = this.answers.filter(a => a.getId() !== answer.getId());
  }

  public getCorrectAnswers(): Answer[] {
    return this.answers.filter(a => a.getCorrect());
  }
}
