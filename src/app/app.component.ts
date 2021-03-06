import { Component, Inject, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
// import * as firebase from 'firebase';
import {firebase} from '@firebase/app';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private notificationsService: NotificationsService,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    console.log("se inicializa")
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
      // this.notificationsService.init();
   }
    
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log('ejecutandose');
      this.notificationsService.requestPermission();
    });
  }
}
