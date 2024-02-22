import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRespondidosButtonComponent } from './forms-respondidos-button.component';

describe('FormsRespondidosButtonComponent', () => {
  let component: FormsRespondidosButtonComponent;
  let fixture: ComponentFixture<FormsRespondidosButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRespondidosButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsRespondidosButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
