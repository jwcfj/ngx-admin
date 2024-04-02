import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegarFormularioComponent } from './navegar-formulario.component';

describe('NavegarFormularioComponent', () => {
  let component: NavegarFormularioComponent;
  let fixture: ComponentFixture<NavegarFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegarFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
