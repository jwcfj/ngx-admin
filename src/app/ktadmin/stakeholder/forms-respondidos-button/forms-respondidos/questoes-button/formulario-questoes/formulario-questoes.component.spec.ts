import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioQuestoesComponent } from './formulario-questoes.component';

describe('FormularioQuestoesComponent', () => {
  let component: FormularioQuestoesComponent;
  let fixture: ComponentFixture<FormularioQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioQuestoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
