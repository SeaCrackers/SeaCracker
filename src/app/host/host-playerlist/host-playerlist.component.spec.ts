import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPlayerlistComponent } from './host-playerlist.component';

describe('HostPlayerlistComponent', () => {
  let component: HostPlayerlistComponent;
  let fixture: ComponentFixture<HostPlayerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostPlayerlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostPlayerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
