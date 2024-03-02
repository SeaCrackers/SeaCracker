import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-room-player-page',
    standalone: true,
    imports: [],
    templateUrl: './room-player-page.component.html',
    styleUrl: './room-player-page.component.scss'
})
export class RoomPlayerPageComponent {

    roomID: string | null;
    playerNickname: string | null = null;

    constructor(private _Activatedroute: ActivatedRoute) {
        this.roomID = this._Activatedroute.snapshot.paramMap.get("id");
    }
}
