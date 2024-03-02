import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-room-player-page',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './room-player-page.component.html',
    styleUrl: './room-player-page.component.scss'
})
export class RoomPlayerPageComponent {

    roomID: string | null;
    playerNickName: string | null = null;

    setPlayerNickName(nickname: string | null) {
        this.playerNickName = nickname;
    }

    constructor(private _Activatedroute: ActivatedRoute) {
        this.roomID = this._Activatedroute.snapshot.paramMap.get("id");
    }
}
