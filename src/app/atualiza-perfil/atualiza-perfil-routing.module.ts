import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizaPerfilPage } from './atualiza-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizaPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizaPerfilPageRoutingModule {}
