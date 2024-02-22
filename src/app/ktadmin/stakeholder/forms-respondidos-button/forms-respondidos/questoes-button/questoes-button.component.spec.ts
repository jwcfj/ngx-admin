import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesButtonComponent } from './questoes-button.component';

describe('QuestoesButtonComponent', () => {
  let component: QuestoesButtonComponent;
  let fixture: ComponentFixture<QuestoesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestoesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestoesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
