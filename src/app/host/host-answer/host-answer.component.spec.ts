import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAnswerComponent } from './host-answer.component';

describe('HostAnswerComponent', () => {
  let component: HostAnswerComponent;
  let fixture: ComponentFixture<HostAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
