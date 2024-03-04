import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-player-page',
    standalone: true,
    imports: [NgIf],
    templateUrl: './player-page.component.html',
    styleUrl: './player-page.component.scss'
})
export class PlayerPageComponent {

    roomID: string | null;
    playerNickName: string | null = null;

    setPlayerNickName(nickname: string | null) {
        this.playerNickName = nickname;
    }

    constructor(private _Activatedroute: ActivatedRoute) {
        this.roomID = this._Activatedroute.snapshot.paramMap.get("id");
    }
}
