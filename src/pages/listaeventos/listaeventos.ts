import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddeventoPage } from '../addevento/addevento';
import { ListaconvidadosPage } from '../listaconvidados/listaconvidados';
import { EventoProvider } from '../../providers/evento/evento';


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

  eventos: any[];
  selecionado: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eventoProvider: EventoProvider ) {
   // this.eventos = {nome: "Festa lá no meu Apê", local:"Meu Apê", data:"20/05/2018"};
  }

  ionViewDidEnter() {
    this.eventos = this.eventoProvider.all();
    console.log('ionViewDidLoad ListaeventosPage');
  }

  onEventoClick(id) {
    this.selecionado = this.eventos[id];
    this.navCtrl.push(ListaconvidadosPage,{ selecionado: this.selecionado });
  }

  onAddEventosButtonClick() {
  	this.navCtrl.push(AddeventoPage);
  }

  onEventoButtonClick() {
    this.navCtrl.push(ListaconvidadosPage);
  }

}
