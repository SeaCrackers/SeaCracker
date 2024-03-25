/**
 * A contract to save and retrieve data in an object form.
 */
export interface DataSaver {
  saveData(data : any): void;
  getData(): any;
}
