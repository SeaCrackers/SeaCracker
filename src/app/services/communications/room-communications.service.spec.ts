import { TestBed } from '@angular/core/testing';

import { RoomCommunicationsService } from './room-communications.service';

describe('RoomCommunicationsService', () => {
  let service: RoomCommunicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomCommunicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
