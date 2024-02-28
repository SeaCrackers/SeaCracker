import { Injectable } from '@angular/core';
import {RoomCommunicationsService} from "../communications/room-communications.service";

export class UserService {
  constructor(protected room:RoomCommunicationsService) { }
}
