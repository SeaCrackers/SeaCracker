import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCodePlayerPageComponent } from './room-code-player-page.component';

describe('RoomCodePlayerPageComponent', () => {
  let component: RoomCodePlayerPageComponent;
  let fixture: ComponentFixture<RoomCodePlayerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomCodePlayerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomCodePlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
