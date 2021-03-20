import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusiquesListPageModule } from '../pages/musiques-list/musiques-list.module';
import { AboutPageModule } from '../pages/about/about.module';
import { TabPageModule } from '../pages/tab/tab.module';
import { MusiqueProvider } from '../providers/musique/musique';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Camera } from '@ionic-native/camera';
import { PhotosPageModule } from '../pages/photos/photos.module';
import { MusiquesPageModule } from '../pages/musiques-list/musiques/musiques.module';
import { MusiquesNewPageModule } from '../pages/musiques-list/musiques-new/musiques-new.module';


const firebase = {
  apiKey: "AIzaSyCRHPQDYVkHaEWlXuSn_pOC0WPEKhh-RC8",
  authDomain: "musique-92d56.firebaseapp.com",
  projectId: "musique-92d56",
  storageBucket: "musique-92d56.appspot.com",
  messagingSenderId: "480711670469",
  appId: "1:480711670469:web:cf456b5e6c9474ee074eac"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MusiquesListPageModule,
    AboutPageModule,
    TabPageModule,
    MusiquesPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    MusiquesNewPageModule,
    PhotosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusiqueProvider,
    Camera
  ]
})
export class AppModule {}
