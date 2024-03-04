import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';


@Component({
    selector: 'app-qr-code',
    standalone: true,
    imports: [QRCodeModule],
    templateUrl: './qr-code.component.html',
    styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {

    private baseLink: string = 'https://www.seacrackers.com/room/';
    private roomCode: string;

    constructor() {
        this.roomCode = 'ABCDEF';
    }

    getLink() {
        return this.baseLink + this.roomCode;
    }
}
