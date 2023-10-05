import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCasesComponent } from './student-cases.component';

describe('StudentCasesComponent', () => {
  let component: StudentCasesComponent;
  let fixture: ComponentFixture<StudentCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCasesComponent]
    });
    fixture = TestBed.createComponent(StudentCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
