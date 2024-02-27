import { Injectable } from '@angular/core';
import {RoomCommunicationsService} from "./room-communications.service";
import {Observable} from "rxjs";
import {SocketRelayService} from "../transport/websockets/socket-relay.service";

/**
 * Note : using implementation instead of extension to avoid circular dependencies
 */
@Injectable({
  providedIn: 'root'
})
export class RoomCommunicationsWebSocketService implements RoomCommunicationsService{
  constructor(private socket: SocketRelayService) {
  }
  getRoomId(): string {
    return "";
  }

  onEventReceived<T>(eventName: string): Observable<T> {
    return this.socket.fromEvent<T>(eventName);
  }

  sendEvent(type: string, content: any[]): void {
    this.socket.emit(type, content);
  }

}
