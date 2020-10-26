import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from '../app/services/fake-backend.service';
import { ProductService } from './services/product.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { StorageServiceService } from './services/storage-service.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production }),
// ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }),
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireMessagingModule,
            AngularFireStorageModule,
            InMemoryWebApiModule.forRoot(FakeBackendService), 
            StorageServiceModule,
            NoopAnimationsModule,
            SlickCarouselModule
          ],
  exports : [],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    StorageServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
