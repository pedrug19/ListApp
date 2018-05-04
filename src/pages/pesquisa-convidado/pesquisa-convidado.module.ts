import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisaConvidadoPage } from './pesquisa-convidado';

@NgModule({
  declarations: [
    PesquisaConvidadoPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaConvidadoPage),
  ],
})
export class PesquisaConvidadoPageModule {}
