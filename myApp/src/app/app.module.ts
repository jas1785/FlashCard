import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardPage } from '../pages/card/card';
import { DeckPage } from '../pages/deck/deck';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlashCardProvider } from '../providers/flash-card/flash-card';

import { FileOpener } from '@ionic-native/file-opener';

import { HttpModule } from '@angular/http';
import { DeckProvider } from '../providers/deck/deck';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CardPage,
    DeckPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{ iconMode: 'md'}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CardPage,
    DeckPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlashCardProvider,
    FileOpener,
    DeckProvider
  ]
})
export class AppModule {}
