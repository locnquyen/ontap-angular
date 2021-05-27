import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStudentComponent } from './start-student.component';

describe('StartStudentComponent', () => {
  let component: StartStudentComponent;
  let fixture: ComponentFixture<StartStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
