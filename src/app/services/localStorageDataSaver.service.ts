import {DataSaver} from "../interfaces/data-saver.interface";

/**
 * A implementation of the DataSaver for local storage.
 */
export class LocalStorageDataSaverService implements DataSaver {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  public saveData(data: any): void {
    if (!localStorage) throw new Error('Local storage is not supported');

    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      throw new Error('Failed to save data to local storage');
    }
  }

  public getData(): any {
    if (!localStorage) throw new Error('Local storage is not supported');

    const item: string | null = localStorage.getItem(this.key);
    if (item) {
      try {
        return JSON.parse(item);
      } catch (error) {
        throw new Error('Failed to parse data from local storage');
      }
    } else {
      return [];
    }
  }
}
