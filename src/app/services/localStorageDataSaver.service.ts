import { Injectable } from '@angular/core';
import {DataSaver} from "../interfaces/dataSaver.interface";

export class LocalStorageDataSaverService implements DataSaver {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  saveData(data : any): void {
    if (!localStorage) throw new Error('Local storage is not supported');

    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      throw new Error('Failed to save data to local storage');
    }
  }

  getData(): any {
    if (!localStorage) throw new Error('Local storage is not supported');

    let item : string | null = localStorage.getItem(this.key);
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