import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseReviewComponent } from './case-review.component';

describe('CaseReviewComponent', () => {
  let component: CaseReviewComponent;
  let fixture: ComponentFixture<CaseReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseReviewComponent]
    });
    fixture = TestBed.createComponent(CaseReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
