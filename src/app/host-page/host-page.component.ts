import { Component } from '@angular/core';
import {RoomCommunicationsService} from "../services/communications/room-communications.service";
@Component({
  selector: 'app-host-page',
  standalone: true,
  imports: [],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.scss'
})
export class HostPageComponent {
  constructor(private room:RoomCommunicationsService) {
    room.sendEvent("hello",[]);
    room.onEventReceived<any>("hello").subscribe((value)=>{
      console.log("Received message!")
    });
  }

  sendMessage() {
    this.room.sendEvent("hello",[])
  }
}
