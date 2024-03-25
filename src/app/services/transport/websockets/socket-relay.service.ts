import {Injectable} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {environment} from "../../../../environments/environment";

/**
 * A WebSocket from socket io with auto url initialization.
 */
@Injectable({
  providedIn: 'root'
})
export class SocketRelayService extends Socket {
  constructor() {
    super({url: environment.webSocketRelayUrl, options: {}});
  }
}
