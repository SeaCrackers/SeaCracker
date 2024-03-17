import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostQuestionComponent } from './host-present-question.component';

describe('HostQuestionComponent', () => {
  let component: HostQuestionComponent;
  let fixture: ComponentFixture<HostQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
