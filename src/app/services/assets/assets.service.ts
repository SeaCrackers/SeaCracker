import { Injectable } from '@angular/core';
import { range } from 'lodash';
import { getRandomEntry } from '../../utils/random.helper';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  public getRandomMusicUrl():string {
    return getRandomEntry(this.getMusicAssetsStringPath());
  }

  private getMusicAssetsStringPath():string[] {
    const musicAssetsFileNames = range(1,7).map((index)=>`music-answer-${index}.ogg`);
    return musicAssetsFileNames.map((fileName)=>[...this.getAudioFolderPath(), fileName].join("/"))
  }

  private getRootAssetFolderPath():string[] {
    return ["assets"];
  }

  private getAudioFolderPath(): string[]{
    return [...this.getRootAssetFolderPath(), "audio"];
  }

}
