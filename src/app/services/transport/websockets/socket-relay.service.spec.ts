import { TestBed } from '@angular/core/testing';

import { SocketRelayService } from './socket-relay.service';

describe('SocketRelayService', () => {
  let service: SocketRelayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketRelayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
