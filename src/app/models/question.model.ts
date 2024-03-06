import {Answer} from "./answer.model";

export class Question {
  constructor(private id: number, private question: string, private timer : string, private answers: Answer[] = []){}

  public getId(): number {
    return this.id;
  }

  public getQuestion(): string {
    return this.question;
  }

  public getTimer(): string {
    return this.timer;
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

  public setTimer(timer: string) : void{
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
