import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPodiumComponent } from './host-podium.component';

describe('HostPodiumComponent', () => {
  let component: HostPodiumComponent;
  let fixture: ComponentFixture<HostPodiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostPodiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostPodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
