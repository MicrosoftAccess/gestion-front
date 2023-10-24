import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseResponseModalComponent } from './case-response-modal.component';

describe('CaseResponseModalComponent', () => {
  let component: CaseResponseModalComponent;
  let fixture: ComponentFixture<CaseResponseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseResponseModalComponent]
    });
    fixture = TestBed.createComponent(CaseResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
