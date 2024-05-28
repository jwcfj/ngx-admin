import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoStepperComponent } from './descricao-stepper.component';

describe('DescricaoStepperComponent', () => {
  let component: DescricaoStepperComponent;
  let fixture: ComponentFixture<DescricaoStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
