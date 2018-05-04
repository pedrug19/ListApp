/**
*	Pagina que lida com o registro no app
*
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FormBuilder, Validator, FormGroup } from '@angular/forms'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  registro: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public storage: Storage) {
      this.registro = {name:"", pass:""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  onRegisterButtonClick() {
    this.navCtrl.pop();
  }

}
