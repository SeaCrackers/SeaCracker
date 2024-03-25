import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostRevealComponent } from './host-reveal.component';

describe('HostRevealComponent', () => {
  let component: HostRevealComponent;
  let fixture: ComponentFixture<HostRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostRevealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
