import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPossuirProcessosComponent } from './botao-possuir-processos.component';

describe('BotaoPossuirProcessosComponent', () => {
  let component: BotaoPossuirProcessosComponent;
  let fixture: ComponentFixture<BotaoPossuirProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoPossuirProcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoPossuirProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
