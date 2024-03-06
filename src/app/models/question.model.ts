import {Answer} from "./answer.model";

export class Question {
    constructor(public id: string, public question: string, public timer : string, public answers : Answer[]) {  }
}
