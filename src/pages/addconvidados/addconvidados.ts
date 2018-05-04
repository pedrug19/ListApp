import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  convidados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.convidados = {name:"", rg:"", grupo:""}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddconvidadosPage');
  }

  onConvidadosButtonClick() {
  	this.storage.set('convidados', JSON.stringify(this.convidados))
  	this.navCtrl.pop();
  }

}
