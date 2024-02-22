import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtadminComponent } from './ktadmin.component';

describe('KtadminComponent', () => {
  let component: KtadminComponent;
  let fixture: ComponentFixture<KtadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KtadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KtadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
