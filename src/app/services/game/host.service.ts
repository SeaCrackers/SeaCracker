import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {RoomCommunicationsService} from "../communications/room-communications.service";

@Injectable({
  providedIn: 'root'
})
export class HostService extends UserService{
  constructor(room:RoomCommunicationsService) {
    super(room)
  }
}
