export class Answer {
    constructor(private id: string, private answer: string, private correct: boolean) {}

    public getId(): string {
      return this.id;
    }

    public getAnswer(): string {
      return this.answer;
    }

    public getCorrect(): boolean {
      return this.correct;
    }

    public setId(id: string) : void{
      this.id = id;
    }

    public setAnswer(answer: string) : void{
      this.answer = answer;
    }

    public setCorrect(correct: boolean) : void{
      this.correct = correct;
    }
}
