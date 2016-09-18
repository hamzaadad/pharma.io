import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/resultats/resultats.html'
})
export class resultats {

    public nav:NavController;
    public type:string;
    public citySelector:boolean
    public isLoading:boolean = true;
    public pharmas:any
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private navParams: NavParams) {
      this.type = this.navParams.get('type');
      this.nav = navCtrl;
      this.pharmas = [
        {
          _id: 1,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
        {
          _id: 2,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
        {
          _id: 3,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
        {
          _id: 4,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
        {
          _id: 1,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
        {
          _id: 2,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
        {
          _id: 3,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
        {
          _id: 4,
          name: 'pharma X',
          address: 'lot warrda meknes',
          geo:{
            lat:34635345,
            long:345345345
          },
          website:'http://hamza.adadlab.com',
          tel:'0663555011',
          fix:'0535555643',
          image:'link'
        },
      ];
      if(this.type == "geo"){
        let self = this;
        setTimeout(function(){
          self.isLoading = false;
        }, 1000);
        //do geo stuff
      }else{
        this.citySelector = true
      }
    }

    showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'type is'+ this.type,
        buttons: ['OK']
      });
      alert.present();
    }
}
