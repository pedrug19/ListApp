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

  eventos: any[] = [
    {id:0,nome:"Festa lá no meu Apê"}, 
    {id:1,nome:"Aniversário do Carlão"}, 
    {id:2,nome:"Alvaro escravoceta"}
  ];


  selected: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.eventos = {nome: "Festa lá no meu Apê", local:"Meu Apê", data:"20/05/2018"};
    this.selected = this.eventos[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaeventosPage');
  }

  onEventoClick(nome) {
    this.selected = this.eventos[nome];
    this.navCtrl.push(ListaconvidadosPage);
  }

  onAddEventosButtonClick() {
  	this.navCtrl.push(AddeventoPage);
  }

  onEventoButtonClick() {
    this.navCtrl.push(ListaconvidadosPage);
  }

}
