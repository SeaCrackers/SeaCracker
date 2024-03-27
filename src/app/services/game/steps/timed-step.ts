import { isFunction, isObject } from 'is-what';

export interface TimedStep {
  getTimerDuration(): number;
}

export function isTimedStep(value: unknown): value is TimedStep {
  return isObject(value) && isFunction(value['getTimerDuration']);
}
