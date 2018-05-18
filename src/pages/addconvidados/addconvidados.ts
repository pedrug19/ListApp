import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConvidadoProvider } from '../../providers/convidado/convidado';
import { Convidado } from '../../interfaces/Convidado';

/**
 * Generated class for the AddconvidadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addconvidados',
  templateUrl: 'addconvidados.html',
})
export class AddconvidadosPage {

  convidado: Convidado;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public convidadoProvider: ConvidadoProvider) {
    this.convidado = new Convidado;
  }

  ionViewDidLoad() {
    var idSelecionado = this.navParams.get('id');
    if(idSelecionado != null)
      this.convidado = this.convidadoProvider.get(idSelecionado);
  }

  onSalvarConvidadosButtonClick() {
  	 if(this.convidado.id == null){
      this.convidado.id = this.convidadoProvider.size();
      this.convidadoProvider.add(this.convidado);
    }else{
      this.convidadoProvider.update(this.convidado);
    }
    this.navCtrl.pop();
  }

}
