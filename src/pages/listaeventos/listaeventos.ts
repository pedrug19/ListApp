import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddeventoPage } from '../addevento/addevento';
import { ListaconvidadosPage } from '../listaconvidados/listaconvidados';

/**
 * Generated class for the ListaeventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaeventos',
  templateUrl: 'listaeventos.html',
})
export class ListaeventosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaeventosPage');
  }

  onAddEventosButtonClick() {
  	this.navCtrl.push(AddeventoPage);
  }

  onEventoButtonClick() {
    this.navCtrl.push(ListaconvidadosPage);
  }

}
