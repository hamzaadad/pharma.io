import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { resultats } from '../resultats/resultats';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class home {
  public nav:NavController;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.nav = navCtrl;
  }
  goToResult(type:string){
    this.nav.push(resultats, {
      type: type
    });
  }

}
