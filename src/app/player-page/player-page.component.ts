import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import {HostService} from "../services/game/host.service";
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

    setPlayerNickName(nickname: string) {
        this.playerNickName = nickname;
        this.player.setupName(nickname);
    }

    constructor(private _Activatedroute: ActivatedRoute, private player: PlayerService) {
        const roomID = this._Activatedroute.snapshot.paramMap.get("id");
        player.joinRoom(roomID!);
    }

    canAnswer() {
        return this.player.getCanAnswer();
    }

    getRoomCode() {
        return this.player.getRoomCode();
    }

    

}
