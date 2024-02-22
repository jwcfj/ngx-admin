import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRespondidosComponent } from './forms-respondidos.component';

describe('FormsRespondidosComponent', () => {
  let component: FormsRespondidosComponent;
  let fixture: ComponentFixture<FormsRespondidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRespondidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsRespondidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
