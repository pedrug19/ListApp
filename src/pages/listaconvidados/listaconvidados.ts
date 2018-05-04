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
  convidados: Array<{nome: string, pagante: string}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.convidados = [];
    for (let i = 1; i < 4; i++) {
      this.convidados.push({
        nome: "Convidado" + i,
        pagante: "Pagante"
      });
    }
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
