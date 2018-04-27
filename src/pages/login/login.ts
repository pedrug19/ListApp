import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validator } from '@angular/forms';
 
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	userinfo: any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public storage: Storage){
  		this.userinfo = {username:"", password:""} ;
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLoginButtonClick(){
  	this.storage.set('userinfo',JSON.stringify(this.userinfo));
  	this.navCtrl.pop();	
  }

}
