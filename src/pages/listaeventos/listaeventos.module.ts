import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaeventosPage } from './listaeventos';

@NgModule({
  declarations: [
    ListaeventosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaeventosPage),
  ],
})
export class ListaeventosPageModule {}
