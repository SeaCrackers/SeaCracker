import {Question} from "./question.model";

export class Quiz {
  constructor(private id: number, private title: string, private questions: Question[] = []) {}

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getQuestions(): Question[] {
    return this.questions;
  }

  public setId(value: number) {
    this.id = value;
  }

  set setTitle(value: string) {
    this.title = value;
  }

  public setQuestions(value: Question[]) {
    this.questions = value;
  }

  public addQuestion(question: Question) : void{
    this.questions.push(question);
  }

  public removeQuestion(question: Question) : void{
    this.questions = this.questions.filter(q => q.getId() !== question.getId());
  }
}
