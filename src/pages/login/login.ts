import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import Auth and User from the Cloud Client and specify them as dependencies in your component constructor.
import { Auth, User } from '@ionic/cloud-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth, public user: User) {
    this.auth = auth;
  }


  /*  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  /* login method */
  login() {
    this.auth.login('twitter').then((data) => {
      alert(data);
    });
  }


  /* logout method: Logging out clears the current user context. */
  logout() {
    this.auth.logout();
  }


}
