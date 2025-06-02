import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BancoDeDadosPage } from './banco-de-dados.page';

describe('BancoDeDadosPage', () => {
  let component: BancoDeDadosPage;
  let fixture: ComponentFixture<BancoDeDadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoDeDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
