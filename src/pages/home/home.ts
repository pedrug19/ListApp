import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;
  
  constructor(public navCtrl: NavController, private storage: Storage) {

  }
  ionViewDidLoad(){
  	//this.storage.set('name','max');

  	// Or to get a key/value pair
 	this.storage.get('userinfo').then((val) => {
 		if(val == null){
 			this.navCtrl.push(LoginPage);
 		}else{
 			this.user = JSON.parse(val).username;
 			console.log(this.user);
 			
 		}
    	
 	});
  }

}
