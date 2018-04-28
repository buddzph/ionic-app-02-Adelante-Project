import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Nav, Platform, LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';

import { ShareServiceProvider } from '../providers/share-service/share-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  categories: Array<{id: string, title: string, component: any}>;

  loading : any;



  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public Loading: LoadingController, private shareService: ShareServiceProvider) {
    this.initializeApp();

    // Add Category in Page Menu
    this.categories = [];
    this.shareService.get_all_category().subscribe(data => {
      for(let ctg in data){
        this.categories.push({ id: data[ctg]['term_id'], title: data[ctg]['name'], component: data[ctg]['slug'] });
      }
    },err => {console.log(err);});

    
    


    this.loading = Loading.create({
      content: 'Please wait..',
      spinner: 'crescent'
    });
    this.loading.present();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome() {
    this.nav.setRoot(HomePage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  itemTapped($event, ctg) {
    // That's right, we're pushing to ourselves!
    this.nav.setRoot(CategoryPage, {ctg: ctg});

  }

  ngAfterViewInit() {
    this.loading.dismiss();
  }

}
