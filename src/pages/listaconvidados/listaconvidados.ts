import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddconvidadosPage } from '../addconvidados/addconvidados';
import { ConvidadoProvider } from '../../providers/convidado/convidado';


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

   convidados: any[];

   selecionado: any;  
   nevento: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public convidadoProvider: ConvidadoProvider) {
    this.nevento = this.navParams.get('selecionado');
  }

  ionViewDidEnter() {
    this.convidados = this.convidadoProvider.all();
    console.log('ionViewDidLoad ListaconvidadosPage');
  }

   onAddConvidadosButtonClick() {
  	this.navCtrl.push(AddconvidadosPage);
  }

  onConvidadoClick(id) {
    this.navCtrl.push(AddconvidadosPage, { id: id });
  }

  /*onConvidadoButtonClick() {
    this.navCtrl.push();
  }*/


}
