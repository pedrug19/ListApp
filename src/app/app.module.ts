import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { ListaeventosPage } from '../pages/listaeventos/listaeventos';
import { ListaconvidadosPage } from '../pages/listaconvidados/listaconvidados'
import { AddeventoPage } from '../pages/addevento/addevento';
import { AddconvidadosPage } from '../pages/addconvidados/addconvidados';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { EventoProvider } from '../providers/evento/evento';
import { ConvidadoProvider } from '../providers/convidado/convidado';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistroPage,
    ListaeventosPage,
    ListaconvidadosPage,
    AddconvidadosPage,
    AddeventoPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistroPage,
    ListaeventosPage,
    ListaconvidadosPage,
    AddconvidadosPage,
    AddeventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    EventoProvider,
    ConvidadoProvider
  ]
})
export class AppModule {}
