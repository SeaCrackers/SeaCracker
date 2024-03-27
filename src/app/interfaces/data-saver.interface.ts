/**
 * A contract to save and retrieve data in an object form.
 */
export interface Repository<T> {
  saveData(data: T): void;

  getData(): T | undefined;
}
