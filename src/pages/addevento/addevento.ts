import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

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

  eventos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.eventos = {name:"", local:""}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventoPage');
  }

  onRegisteredButtonClick() {
  	this.storage.set('eventos',JSON.stringify(this.eventos));
  	this.navCtrl.pop();
  }

}
