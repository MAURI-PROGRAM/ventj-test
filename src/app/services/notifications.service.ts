import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { firebase } from '@firebase/app';
import '@firebase/messaging';
import { environment } from '../../environments/environment';
import { ToastController } from '@ionic/angular';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any,
              private toastController: ToastController) {
                this.isBrowser = isPlatformBrowser(this.platformId);
              }

  async presentToast(header: string, message: string, color: string = 'dark') {
    const toast = await this.toastController
      .create({
        header,
        message,
        duration: 4000,
        position: 'top',
        color,
      })
      .finally();
    toast.present();
  }

  init(): Promise<void>| any {
    if (this.isBrowser){
      return new Promise<void>((resolve, reject) => {
        navigator.serviceWorker.ready.then(
          (registration) => {
            // Don't crash an error if messaging not supported
            if (!firebase.messaging.isSupported()) {
              resolve();
              return;
            }
            const messaging = firebase.messaging();
            // Register the Service Worker
            messaging.useServiceWorker(registration);
            // Initialize your VAPI key
            messaging.usePublicVapidKey(environment.firebase.vapidKey);
            // Optional and not covered in the article
            // Listen to messages when your app is in the foreground
            messaging.onMessage((payload) => {
              // alert('app in foreground ' + payload)
              console.log('recibiendo mensajes ' + payload);
            });
            // Optional and not covered in the article
            // Handle token refresh
            messaging.onTokenRefresh(() => {
              messaging
                .getToken()
                .then((refreshedToken: string) => {
                  console.log(refreshedToken);
                })
                .catch((err) => {
                  console.error(err);
                });
            });
            resolve();
          },
          (err) => {
            reject(err);
          }
        );
      });
    }
  }

  requestPermission(): Promise<void> {
    if (this.isBrowser){
           return new Promise<void>(async (resolve) => {
              if (!Notification) {
                   resolve();
                   return;
              }
              if (!firebase.messaging.isSupported()) {
                  resolve();
                  return;
              }
              try {
                const messaging = firebase.messaging();
                await Notification.requestPermission();
                const token: string = await messaging.getToken();
                console.log('User notifications token:', token);

                messaging.onMessage((payload) => {
                console.log(payload);
                this.presentToast(payload.notification.title, payload.notification.body);
              });
      } catch (err) {
        // No notifications granted
      }
              resolve();
    });
    }
  }
}
