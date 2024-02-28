import {forwardRef, Injectable, Signal} from '@angular/core';
import {Observable} from "rxjs";
import {RoomCommunicationsWebSocketService} from "./room-communications-web-socket.service";
import {RandomGenerator} from "../../utils/random-generator";

@Injectable({
  providedIn: "root",
  useClass: forwardRef( () => RoomCommunicationsWebSocketService ) // Default implementation.
})
export abstract class RoomCommunicationsService {
  public abstract currentRooms() : Signal<string[]>;
  public abstract joinRoom(roomName:string):void;
  public abstract leaveRoom(roomName:string):void;
  public abstract sendEventTo(roomName:string,content:any) : void;
  public abstract onEventReceived<T>(): Observable<T>;
}
