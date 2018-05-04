import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddconvidadosPage } from '../addconvidados/addconvidados';

/**
 * Generated class for the ListaconvidadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaconvidados',
  templateUrl: 'listaconvidados.html',
})
export class ListaconvidadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaconvidadosPage');
  }

   onAddConvidadosButtonClick() {
  	this.navCtrl.push(AddconvidadosPage);
  }

  /*onConvidadoButtonClick() {
    this.navCtrl.push();
  }*/


}
