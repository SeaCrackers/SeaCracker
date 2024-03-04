import { Component } from '@angular/core';
import {RoomCommunicationsService} from "../services/communications/room-communications.service";
import {RandomGenerator} from "../utils/random-generator";
@Component({
  selector: 'app-host-page',
  standalone: true,
  imports: [],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.scss'
})
export class HostPageComponent {
  public roomCode = RandomGenerator.generateString(4);
  constructor(private room:RoomCommunicationsService) {
    room.joinRoom(this.roomCode)
    room.onEventReceived<any>().subscribe((value)=>{
      console.log("Received message : "+value)
    });
  }

  sendMessage() {
    this.room.sendEventTo(this.roomCode,"Mouahaha!")
  }
}
