import {forwardRef, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RoomCommunicationsWebSocketService} from "./room-communications-web-socket.service";

@Injectable({
  providedIn: "root",
  useClass: forwardRef( () => RoomCommunicationsWebSocketService ) // Default implementation.
})
export abstract class RoomCommunicationsService {
  public abstract getRoomId():string;
  public abstract sendEvent(type:string,content:any[]) : void;
  public abstract onEventReceived<T>(eventName: string): Observable<T>;
}
