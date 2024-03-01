import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPlayerPageComponent } from './room-player-page.component';

describe('RoomPlayerPageComponent', () => {
  let component: RoomPlayerPageComponent;
  let fixture: ComponentFixture<RoomPlayerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPlayerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
