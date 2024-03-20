import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLeaderboardComponent } from './host-leaderboard.component';

describe('HostLeaderboardComponent', () => {
  let component: HostLeaderboardComponent;
  let fixture: ComponentFixture<HostLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostLeaderboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
