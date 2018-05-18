import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { EventoProvider } from '../../providers/evento/evento';
import { Evento } from '../../interfaces/Evento';

/**
 * Generated class for the AddeventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addevento',
  templateUrl: 'addevento.html',
})
export class AddeventoPage {

  evento: Evento;
  size: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public eventoProvider: EventoProvider ) {
  	this.evento = new Evento;
  }

  ionViewDidLoad() {
    this.size = this.eventoProvider.size();
    var idSelecionado = this.navParams.get('id');
    if(idSelecionado != null)
      this.evento = this.eventoProvider.get(idSelecionado);

    console.log('ionViewDidLoad AddeventoPage');
  }

  onRegisteredButtonClick() {
    if(this.evento.id == null){
      this.evento.id = this.size;
      this.eventoProvider.add(this.evento);
    }else{
      this.eventoProvider.update(this.evento);
    }
  	// this.storage.set('eventos',JSON.stringify(this.eventos));
  	this.navCtrl.pop();
  }

}
