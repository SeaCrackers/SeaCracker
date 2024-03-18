import { Answer } from './answer.interface';
export interface Question {
  id: number;
  question: string;
  timer: number;
  answers: Answer[];
}
