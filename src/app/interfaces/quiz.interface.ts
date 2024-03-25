import {Question} from "./question.interface";

export interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}
