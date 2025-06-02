import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizaPerfilPage } from './atualiza-perfil.page';

describe('AtualizaPerfilPage', () => {
  let component: AtualizaPerfilPage;
  let fixture: ComponentFixture<AtualizaPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
