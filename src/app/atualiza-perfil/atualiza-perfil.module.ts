import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizaPerfilPageRoutingModule } from './atualiza-perfil-routing.module';

import { AtualizaPerfilPage } from './atualiza-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizaPerfilPageRoutingModule
  ],
  declarations: [AtualizaPerfilPage]
})
export class AtualizaPerfilPageModule {}
