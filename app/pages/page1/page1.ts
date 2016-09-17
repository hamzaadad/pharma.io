import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  public step:string;
  public steps:string[]
  public index:number
  @ViewChild('splash') slider: Slides;

  slidOptions = {
     initialSlide: 0,
     loop: true
   };
  constructor(public navCtrl: NavController) {
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
  goToSlide() {
   this.slider.slideNext(500);
  }
  move(step:string){
    this.step = step
  }
}
