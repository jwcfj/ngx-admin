import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosPossuidosComponent } from './processos-possuidos.component';

describe('ProcessosPossuidosComponent', () => {
  let component: ProcessosPossuidosComponent;
  let fixture: ComponentFixture<ProcessosPossuidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosPossuidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosPossuidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
