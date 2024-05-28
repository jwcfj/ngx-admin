import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoTextEditorComponent } from './descricao-text-editor.component';

describe('DescricaoTextEditorComponent', () => {
  let component: DescricaoTextEditorComponent;
  let fixture: ComponentFixture<DescricaoTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoTextEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
