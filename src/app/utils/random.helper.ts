import { assert } from './assert.helper';
import { range } from 'lodash';

const UPPER_CASE_ALPHA_AND_NUMBERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';


/**
 * Generate a random string of a given length
 * @param length The length of the string to generate
 * @param pattern A string containing the chars to randomly pick
 */
export function generateRandomString(length: number, pattern = UPPER_CASE_ALPHA_AND_NUMBERS){
  const patterns = pattern.split("");
  return range(length).map(()=>getRandomEntry(patterns)).join()

}

/**
 * Given an array of entries, randomly return an entry within this array
 */
export function getRandomEntry<T>(entries: Array<T> = [] ): T {
  assert(entries.length > 0);
  const alpha = Math.random();
  const index = Math.floor(entries.length * alpha);
  return entries[index];
}

