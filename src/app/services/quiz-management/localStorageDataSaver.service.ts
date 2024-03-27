import {Repository} from "../../interfaces/data-saver.interface";

/**
 * A implementation of the DataSaver for local storage.
 */
export class LocalStorageDataSaverService<T> implements Repository<T> {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  public saveData(data: T): void {
    if (!localStorage) throw new Error('Local storage is not supported');

    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      throw new Error('Failed to save data to local storage');
    }
  }

  public getData(): T | undefined {
    if (!localStorage) throw new Error('Local storage is not supported');

    const item: string | null = localStorage.getItem(this.key);
    if (item !== null) {
      try {
        return JSON.parse(item);
      } catch (error) {
        throw new Error('Failed to parse data from local storage');
      }
    } else {
      return undefined;
    }
  }
}
