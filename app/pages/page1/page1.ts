import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  public step:string
  constructor(public navCtrl: NavController) {
    this.step  = 'rapide';
  }
  move(className:string, delay: number){
    setTimeout(function(){
      let item = document.getElementsByClassName(className)[0].classList;
      if(!item.contains('shown')){
        item.add('shown')
      }else{
        item.remove('shown')
      }
    }, delay);
  }
}
