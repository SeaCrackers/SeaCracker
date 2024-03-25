import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLoadingComponent } from './host-loading.component';

describe('HostLoadingComponent', () => {
  let component: HostLoadingComponent;
  let fixture: ComponentFixture<HostLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
