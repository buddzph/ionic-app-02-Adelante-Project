import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareServiceProvider } from '../../providers/share-service/share-service';
import * as moment from 'moment';


@Component({
  selector: 'page-view-post',
  templateUrl: 'view-post.html',
})
export class ViewPostPage {

  selectedPost: any;
  post_data: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService: ShareServiceProvider) {
      this.selectedPost = navParams.get('post');

      this.post_data = moment(this.selectedPost.post_date, "YYYYMMDD").format("MMM DD, YYYY");

      console.log(this.selectedPost);

      console.log(btoa('[caption id="attachment_91" align="alignnone" width="702"]<a href="http://adelant.x10host.com/wp-content/uploads/2017/01/resized000-4.jpg"><img class="wp-image-91 size-large" src="http://adelant.x10host.com/wp-content/uploads/2017/01/resized008-1-1024x678.jpg" width="702" height="469" /></a> Fashion fosters cliches of beauty, walking in the streets of style.[/caption]'));


      // Get Post Data From wordpress Endpoint API
      //this.shareService.get_post().subscribe(data => {this.post_data = data; console.log(data);},err => {console.log(err);});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPostPage');
  }

}
