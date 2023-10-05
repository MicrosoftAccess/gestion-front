import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCasesComponent } from './generate-cases.component';

describe('GenerateCasesComponent', () => {
  let component: GenerateCasesComponent;
  let fixture: ComponentFixture<GenerateCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateCasesComponent]
    });
    fixture = TestBed.createComponent(GenerateCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
