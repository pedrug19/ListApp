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

   convidados: any[] = [
    {id:0,nome:"Latino"}, 
    {id:1,nome:"Mc Lan"}, 
    {id:2,nome:"Bilbo"}
  ];

   selected: any;  
   nevento: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.nevento = this.navParams.get('selecionado');
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ListaconvidadosPage');
  }

   onAddConvidadosButtonClick() {
  	this.navCtrl.push(AddconvidadosPage);
  }

  onConvidadoClick(id) {
    this.selected = this.convidados[id];
    this.navCtrl.push(AddconvidadosPage);
  }

  /*onConvidadoButtonClick() {
    this.navCtrl.push();
  }*/


}
