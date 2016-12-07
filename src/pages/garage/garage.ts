import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Garage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-garage',
  templateUrl: 'garage.html'
})
export class GaragePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GaragePage Page');
  }

}
