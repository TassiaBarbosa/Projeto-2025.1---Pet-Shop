import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaSenhaPage } from './recupera-senha.page';

describe('RecuperaSenhaPage', () => {
  let component: RecuperaSenhaPage;
  let fixture: ComponentFixture<RecuperaSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
