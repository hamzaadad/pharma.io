import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { home } from '../home/home';

@Component({
  templateUrl: 'build/pages/splash/splash.html'
})
export class splash {
  public step:string;
  public steps:string[]
  public index:number
  public nav:NavController;
  @ViewChild('splash') slider: Slides;

  slidOptions = {
     initialSlide: 0,
     loop: true
   };
  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
    this.steps = ['rapide', 'simple', 'fiable'];
    this.index = 0;
    this.move(this.steps[this.index]);
    this.index++

    var self = this;
    setInterval(function(){
      if(self.index == self.steps.length){
        self.index = 0;
      }
      self.goToSlide();
      //self.move(self.steps[self.index]);
      self.index++
    }, 2000);

  }
  goToPage(){
    this.nav.push(home);
  }
  goToSlide() {
   this.slider.slideNext(500);
  }
  move(step:string){
    this.step = step
  }
}
