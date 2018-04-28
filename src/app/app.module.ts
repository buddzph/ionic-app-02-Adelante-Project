import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { ViewPostPage } from '../pages/view-post/view-post';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomPipe } from '../pipes/custom/custom';
import { TruncatePipe } from '../pipes/truncate';
import { ShareServiceProvider } from '../providers/share-service/share-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    ViewPostPage,
    CustomPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    ViewPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShareServiceProvider
  ]
})
export class AppModule {}
