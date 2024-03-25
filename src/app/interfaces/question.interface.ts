import {Answer} from './answer.interface';

export interface Question {
  question: string;
  timer: number;
  answers: Answer[];
}
