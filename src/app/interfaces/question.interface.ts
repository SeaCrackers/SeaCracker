import { Answer } from './answer.interface';

export enum Timers {
  TWENTY = 20,
  FORTY = 40,
  SIXTY = 60,
  EIGHTY = 80
}

export interface Question {
  id: number;
  question: string;
  timer: Timers;
  answers: Answer[];
}
