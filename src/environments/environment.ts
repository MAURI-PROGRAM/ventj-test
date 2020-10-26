// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_endpoint_url: 'http://localhost',
  base_authorization_url: 'http://192.168.152.105',
  version: 'v1/',
  firebase: {
    apiKey: "AIzaSyD8vDjGH_qtbmFdklAAo3ZpU2TfluS7mG4",
    authDomain: "ventajon-segunda-mano-9b134.firebaseapp.com",
    databaseURL: "https://ventajon-segunda-mano-9b134.firebaseio.com",
    projectId: "ventajon-segunda-mano-9b134",
    storageBucket: "ventajon-segunda-mano-9b134.appspot.com",
    messagingSenderId: "809118292621",
    appId: "1:809118292621:web:43c6d7858bc7dba401e0c4",
    vapidKey: "BKqSemswEFXC3SyO5qm6oq7HRwboUVwrYi55rerTCWKF1ISwpkB9MXdsy2dApAV4_kxhNma79S6MXu5oSTIjatA"
  }
  //endpoint: this.base_endpoint_url + this.version

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
