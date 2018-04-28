import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ShareServiceProvider } from '../../providers/share-service/share-service';


import { ViewPostPage } from '../view-post/view-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  home_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService: ShareServiceProvider) {


    // Get Home Data
    this.shareService.get_homedata().subscribe(data => {this.home_data = data; console.log(this.home_data)},err => {console.log(err);});

  }


  viewPost($event, post) {
    this.navCtrl.push(ViewPostPage, {post: post});
  }




}
