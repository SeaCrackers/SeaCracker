import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-code-player-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './room-code-player-page.component.html',
  styleUrl: './room-code-player-page.component.scss'
})
export class RoomCodePlayerPageComponent {
  roomID: string | null = null;

  constructor(private router: Router) {
  }

  joinRoom() {
    this.router.navigate(['/play/', this.roomID]);
  }
}
