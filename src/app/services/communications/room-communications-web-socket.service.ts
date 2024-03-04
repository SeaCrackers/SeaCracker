import {Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {RoomCommunicationsService} from "./room-communications.service";
import {Observable} from "rxjs";
import {SocketRelayService} from "../transport/websockets/socket-relay.service";
import {RoomEvents} from "./room-events";

/**
 * Note : using implementation instead of extension to avoid circular dependencies
 */
@Injectable({
  providedIn: 'root'
})
export class RoomCommunicationsWebSocketService implements RoomCommunicationsService{
  private roomsSignal : WritableSignal<string[]> = signal([]);
  constructor(private socket: SocketRelayService) {
  }

  currentRooms(): Signal<string[]> {
    return this.roomsSignal;
  }

  joinRoom(roomName: string): void {
    this.socket.emit(RoomEvents.Join, roomName);
    this.roomsSignal.update(rooms => {
      return [...rooms, roomName];
    });
  }

  leaveRoom(roomName: string): void {
    this.socket.emit(RoomEvents.Leave, roomName);
    this.roomsSignal.update(rooms => {
      return rooms.filter(room => room !== roomName)
    });
  }

  sendEventTo(roomName: string, content: any): void {
    this.socket.emit(RoomEvents.Broadcast, {room:roomName, content:content});
  }

  onEventReceived<T>(): Observable<T> {
    return this.socket.fromEvent<T>(RoomEvents.Broadcast);
  }

  getMyUniqueIdentifier(): string {
    return this.socket.ioSocket.id;
  }
}
