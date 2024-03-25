import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPresentQuestionComponent } from './host-present-question.component';

describe('HostQuestionComponent', () => {
  let component: HostPresentQuestionComponent;
  let fixture: ComponentFixture<HostPresentQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostPresentQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostPresentQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
