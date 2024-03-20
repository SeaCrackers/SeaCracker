import { TestBed } from '@angular/core/testing';

import { RoomCommunicationsWebSocketService } from './room-communications-web-socket.service';

describe('RoomCommunicationsWebSocketService', () => {
  let service: RoomCommunicationsWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomCommunicationsWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
