import { Injectable } from '@angular/core';
import {RoomCommunicationsService} from "../communications/room-communications.service";

export abstract class UserService {
  protected constructor(protected room:RoomCommunicationsService, protected roomCode:string|undefined = undefined) { }
  public getRoomCode(): string|undefined{
    return this.roomCode
  }
}
