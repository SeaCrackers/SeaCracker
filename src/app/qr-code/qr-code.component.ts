import { Component, Input } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';


@Component({
    selector: 'app-qr-code',
    standalone: true,
    imports: [QRCodeModule],
    templateUrl: './qr-code.component.html',
    styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {

    private baseLink: string = window.location.origin;
    @Input() roomCode?: string;
    @Input() location?: string;


    getLink() {
        return location? this.baseLink + "/" + this.location + "/" + this.roomCode : this.baseLink + "/" + this.roomCode;
    }
}
