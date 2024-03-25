import {Component, HostListener, Signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';
import {PlayerService} from "../services/game/player.service";


@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss'
})
export class PlayerPageComponent {
  playerNickName: string | null = null;

  setPlayerNickName(nickname: string): void {
    this.playerNickName = nickname;
    this.player.setupName(nickname);
  }

  constructor(private _Activatedroute: ActivatedRoute, private player: PlayerService) {
    const roomID = this._Activatedroute.snapshot.paramMap.get("id");
    player.joinRoom(roomID!);
  }

  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    $event.returnValue = false;
  }

  canAnswer(): Signal<boolean> {
    return this.player.getCanAnswer();
  }

  getRoomCode(): string | undefined {
    return this.player.getRoomCode();
  }

  answerQuestion(answerId: number): void {
    this.player.answerQuestion(answerId);
  }
}
