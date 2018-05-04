import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaEventoPage } from './edita-evento';

@NgModule({
  declarations: [
    EditaEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaEventoPage),
  ],
})
export class EditaEventoPageModule {}
