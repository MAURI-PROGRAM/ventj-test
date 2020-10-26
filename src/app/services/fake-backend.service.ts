import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { StorageServiceService } from '../services/storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {

  constructor(private localStorageService: StorageServiceService) { 
    if (this.localStorageService.getLocalStorage('products'))
    {
      this.products = this.localStorageService.getLocalStorage('products');
    }

  }


    products = [
      
      {
          "information": {
              "title": "Chaleco Deportivo",
              "description": "Chaleco Deportivo con Efecto Sauna para Mujer..."
          },
          "categories": [
              {
                  "id": "e3434947-e29e-4b57-a00f-a5c86e996e0e",
                  "name": "Ropa"
              }
          ],
          "tags": [
              {
                  "id": "d8bbb5c8-374c-47ed-b48f-e270dadba41f",
                  "name": "Ropa"
              }
          ],
          "condition": {
              "code": "new",
              "title": "Nuevo",
              "selected": true
          },
          "color": [
              {
                  "code": "Azul",
                  "hexcode": "#0000FF"
              },
              {
                  "code": "Blanco",
                  "hexcode": "#fff"
              }
          ],
          "price": "25",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. de las Americas",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "phone",
                  "value": "0989755008"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "8988d9ab-125d-4ecf-8f69-601da7720b4c",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2Fkdtwe70o.png?alt=media&token=a77647f6-e134-4487-8f46-777591ff821b",
                  "path": ""
              }
          ],
          "id": "1a48422a-1cad-4bfe-9ea4-2f41949b2c4a"
      },
      {
          "information": {
              "title": "",
              "description": "Electroestimulador muscular Pulse Innovag..."
          },
          "categories": [
              {
                  "id": "0c20de23-0e0f-4b0b-996b-75e9b3aeb0f5",
                  "name": "Electronicos"
              }
          ],
          "tags": [
              {
                  "id": "fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c",
                  "name": "Electronicos"
              }
          ],
          "condition": {
              "code": "new",
              "title": "Nuevo",
              "selected": true
          },
          "color": [
              {
                  "code": "Negro",
                  "hexcode": "#000"
              },
              {
                  "code": "Gris",
                  "hexcode": "#808080"
              }
          ],
          "price": "750",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. Estrata mancora Signest",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "email",
                  "value": "tuvent6aja@ventaja.com"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "6d3bfe18-9149-47eb-a5db-8b2bf3b72e53",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2Fmwgqfuae.png?alt=media&token=c87dd22b-bc43-45af-a24d-2b5c73e3c2e6",
                  "path": ""
              }
          ],
          "id": "45501ef9-d88f-405a-aea6-1644b86f7806"
      },
      {
          "information": {
              "title": "",
              "description": "Pedaleador Fitness bicicleta deporte rehabi..."
          },
          "categories": [
              {
                  "id": "0c20de23-0e0f-4b0b-996b-75e9b3aeb0f5",
                  "name": "Electronicos"
              }
          ],
          "tags": [
              {
                  "id": "fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c",
                  "name": "Electronicos"
              }
          ],
          "condition": {
              "code": "used",
              "title": "Usado",
              "selected": true
          },
          "color": [
              {
                  "code": "Blanco",
                  "hexcode": "#fff"
              },
              {
                  "code": "Negro",
                  "hexcode": "#000"
              }
          ],
          "price": "180",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. Plaza lagos Equina",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "phone",
                  "value": "0989755008"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "c9e4eee2-71a2-4f8f-aaa3-40613df788d1",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2Fbhid5jwx.png?alt=media&token=f9aab6d2-5667-4bda-8b79-ca893e6d4253",
                  "path": ""
              }
          ],
          "id": "e246ef0c-75a0-4b02-8944-f07acd6e8591"
      },
      {
          "information": {
              "title": "",
              "description": "Estación de Dominadas y Fitness con Guía de Ejer..."
          },
          "categories": [
              {
                  "id": "0c20de23-0e0f-4b0b-996b-75e9b3aeb0f5",
                  "name": "Electronicos"
              }
          ],
          "tags": [
              {
                  "id": "fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c",
                  "name": "Electronicos"
              }
          ],
          "condition": {
              "code": "new",
              "title": "Nuevo",
              "selected": true
          },
          "color": [
              {
                  "code": "Negro",
                  "hexcode": "#000"
              },
              {
                  "code": "Gris",
                  "hexcode": "#808080"
              }
          ],
          "price": "65",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. Plaza lagos Tomala Singure",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "email",
                  "value": "sarco@gmail.com"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "66e5ee54-0e30-449e-8a00-70ee73f06039",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2F83bxccix.png?alt=media&token=873737f6-1267-4078-9931-e7361d90f397",
                  "path": ""
              }
          ],
          "id": "c1882e96-0ad7-4827-ab82-c67b7862534f"
      },
      {
          "information": {
              "title": "Gutty Gafas M245-2020",
              "description": "Gutty Gafas M245-2020 Sport antirefelejo y control ultravioleta"
          },
          "categories": [
              {
                  "id": "fe785ee7-26db-4a33-b3c5-5c2b00b58a8f",
                  "name": "Salud & Belleza"
              }
          ],
          "tags": [
              {
                  "id": "7ea6c285-fc29-4527-87f7-4e872c1e359b",
                  "name": "Salud & Belleza"
              }
          ],
          "condition": {
              "code": "used",
              "title": "Usado",
              "selected": true
          },
          "color": [
              {
                  "code": "Negro",
                  "hexcode": "#000"
              },
              {
                  "code": "Amarillo",
                  "hexcode": "#FFFF00"
              }
          ],
          "price": "35",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. Plaza Lagos Sacra y Chilaz",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "phone",
                  "value": "0961459888"
              },
              {
                  "type": "email",
                  "value": "sacras-ven@hotmail.com"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "a7ea4d2d-7806-49da-aba5-7b78f5528168",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2F0f04c128bb2945608bed459cdff45b2d.jpg?alt=media&token=af32dd50-7f54-4dbc-bece-9e7de3a3d64c",
                  "path": ""
              }
          ],
          "id": "1fc41544-8126-4517-b65b-cb7a12fc60c3"
      },
      {
          "information": {
              "title": "Case Phone Protector Samsung",
              "description": "Case Phone Protector Samsung for Android smartphones"
          },
          "categories": [
              {
                  "id": "0c20de23-0e0f-4b0b-996b-75e9b3aeb0f5",
                  "name": "Electronicos"
              }
          ],
          "tags": [
              {
                  "id": "fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c",
                  "name": "Electronicos"
              }
          ],
          "condition": {
              "code": "new",
              "title": "Nuevo",
              "selected": true
          },
          "color": [
              {
                  "code": "Blanco",
                  "hexcode": "#fff"
              },
              {
                  "code": "Negro",
                  "hexcode": "#000"
              },
              {
                  "code": "Azul",
                  "hexcode": "#0000FF"
              }
          ],
          "price": "5",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. de las Americas y Chila Plaza",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "phone",
                  "value": "0961387554"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "8a10234a-a25f-47f0-b758-d9d57465233b",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2F0a20ecfcafde4344b5c84a593f6ee6ed.jpg?alt=media&token=cb032bc4-beee-4120-a7c6-f7dac10e29ac",
                  "path": ""
              }
          ],
          "id": "3607815b-ec73-454f-a941-dbfa6215943d"
      },
      {
          "information": {
              "title": "Amcrest Foscam Device",
              "description": "Camaraa wifi portatil"
          },
          "categories": [
              {
                  "id": "c8081810-0890-4dc9-9044-e378dd21225c",
                  "name": "Tecnologia"
              }
          ],
          "tags": [
              {
                  "id": "77d022e6-6423-4b52-a35a-aad4f55b9c35",
                  "name": "Tecnologia"
              }
          ],
          "condition": {
              "code": "new",
              "title": "Nuevo",
              "selected": true
          },
          "color": [
              {
                  "code": "Blanco",
                  "hexcode": "#fff"
              },
              {
                  "code": "Negro",
                  "hexcode": "#000"
              },
              {
                  "code": "Gris",
                  "hexcode": "#808080"
              }
          ],
          "price": "37",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Guillermo Pareja Salas Torre A",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "phone",
                  "value": "098744225"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "d334cb9f-17b4-4065-9236-af3183e0259b",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2F4fcbfdb675614342a172da1be483724e.jpg?alt=media&token=b49bad78-591b-4582-a678-c2acf46a6075",
                  "path": ""
              }
          ],
          "id": "3208ca7e-93e5-402d-b03a-224f17c527e6"
      },
      {
          "information": {
              "title": "Camara Sony V1254",
              "description": "Camara Sony V1254 SXZ124opo"
          },
          "categories": [
              {
                  "id": "e3434947-e29e-4b57-a00f-a5c86e996e0e",
                  "name": "Ropa"
              },
              {
                  "id": "c8081810-0890-4dc9-9044-e378dd21225c",
                  "name": "Tecnologia"
              }
          ],
          "tags": [
              {
                  "id": "d5f79a6e-82d0-46e4-9e58-ce3de5ff2685",
                  "name": "Computadores"
              }
          ],
          "condition": {
              "code": "used",
              "title": "Usado",
              "selected": true
          },
          "color": [
              {
                  "code": "Negro",
                  "hexcode": "#000"
              }
          ],
          "price": "28",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. 25 de Julio",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "9a66ea97-40e1-4f97-be1e-c125a7dedd62",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2Fn7wl4kmf.png?alt=media&token=e899ca56-e1b0-4fa6-a60a-ce39ac979f8d",
                  "path": ""
              }
          ],
          "id": "5fa674dd-3c2e-45bf-a5a9-f9884d2dcdcb"
      },
      {
          "information": {
              "title": "Crema Verisign",
              "description": "asdfasdfasdfasfd"
          },
          "categories": [
              {
                  "id": "8e8295b7-6f98-4cee-a100-d7915f942fb9",
                  "name": "Computadores"
              }
          ],
          "tags": [
              {
                  "id": "fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c",
                  "name": "Electronicos"
              }
          ],
          "condition": {
              "code": "new",
              "title": "Nuevo",
              "selected": true
          },
          "color": [
              {
                  "code": "Azul",
                  "hexcode": "#0000FF"
              }
          ],
          "price": "8",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "asdfasdfasdfasdfasdf",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "fb606663-d726-4659-9daf-783a48e84701",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2F0a029cb7870243c7b36c71922a55701a.jpg?alt=media&token=26fdd75d-49d8-4dc3-bae8-720c634e12e2",
                  "path": ""
              }
          ],
          "id": "0039e9c7-0a24-4907-90db-2913ff244a16"
      },
      {
          "information": {
              "title": "Televisor Sony ",
              "description": "Televisor Sony 55\" HD Full Definition"
          },
          "categories": [
              {
                  "id": "0c20de23-0e0f-4b0b-996b-75e9b3aeb0f5",
                  "name": "Electronicos"
              }
          ],
          "tags": [
              {
                  "id": "fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c",
                  "name": "Electronicos"
              }
          ],
          "condition": {
              "code": "new",
              "title": "Nuevo",
              "selected": true
          },
          "color": [
              {
                  "code": "Negro",
                  "hexcode": "#000"
              },
              {
                  "code": "Gris",
                  "hexcode": "#808080"
              }
          ],
          "price": "458",
          "saleStatus": {
              "code": "availabled",
              "name": "Disponible",
              "selected": true
          },
          "location": {
              "countryCode": "ES",
              "country": "España",
              "city": "Mayorca",
              "address": "Av. de las americas",
              "points": {
                  "lat": 0,
                  "lng": 0
              }
          },
          "photo2": "undefined",
          "photo3": "undefined",
          "availabledContactMethods": [
              {
                  "type": "phone",
                  "value": "0989755008"
              },
              {
                  "type": "email",
                  "value": "mimail@mail.com"
              }
          ],
          "deliveryPreference": {
              "code": "pickup",
              "title": "recogida"
          },
          "status": {
              "code": "active",
              "description": "Active Status of Product"
          },
          "photos": [
              {
                  "id": "7a7fa03b-7e95-4db1-b3b2-f520666fb284",
                  "name": "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2F5.jpg?alt=media&token=d4432c45-0af3-4c21-ac12-2eb10c295bdd",
                  "path": ""
              }
          ],
          "id": "c18c4b61-1280-4e28-a230-82448b7ba874"
      }
  ]

  saleStatus = [
    {
        "code": "availabled",
        "name": "Disponible"
    },
    {
        "code": "unavailabled",
        "name": "No Disponible"
    }
]

  availabledContactMethods = [
    {
        "value": "",
        "type": "email"
    },
    {
        "value": "",
        "type": "phone"
    }
]

  conditions = [
    {
        "code": "new",
        "title": "Nuevo",
        "selected": false
    },
    {
        "code": "used",
        "title": "Usado",
        "selected": false
    }
]

  colors = [
    {
        "code": "Rojo",
        "hexcode": "#ff0000"
    },
    {
        "code": "Blanco",
        "hexcode": "#fff"
    },
    {
        "code": "Negro",
        "hexcode": "#000"
    },
    {
        "code": "Azul",
        "hexcode": "#0000FF"
    },
    {
        "code": "Amarillo",
        "hexcode": "#FFFF00"
    },
    {
        "code": "Gris",
        "hexcode": "#808080"
    }
]

  tags = [
    {
        "id": "d8bbb5c8-374c-47ed-b48f-e270dadba41f",
        "name": "Ropa"
    },
    {
        "id": "d5f79a6e-82d0-46e4-9e58-ce3de5ff2685",
        "name": "Computadores"
    },
    {
        "id": "fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c",
        "name": "Electronicos"
    },
    {
        "id": "77d022e6-6423-4b52-a35a-aad4f55b9c35",
        "name": "Tecnologia"
    },
    {
        "id": "7ea6c285-fc29-4527-87f7-4e872c1e359b",
        "name": "Salud & Belleza"
    },
    {
        "id": "4c960db6-fb70-48e0-888c-b83ce157ccf2",
        "name": "Hogar & Cocina"
    }
]

  categories = [
    {
        "id": "e3434947-e29e-4b57-a00f-a5c86e996e0e",
        "name": "Ropa"
    },
    {
        "id": "8e8295b7-6f98-4cee-a100-d7915f942fb9",
        "name": "Computadores"
    },
    {
        "id": "0c20de23-0e0f-4b0b-996b-75e9b3aeb0f5",
        "name": "Electronicos"
    },
    {
        "id": "c8081810-0890-4dc9-9044-e378dd21225c",
        "name": "Tecnologia"
    },
    {
        "id": "fe785ee7-26db-4a33-b3c5-5c2b00b58a8f",
        "name": "Salud & Belleza"
    },
    {
        "id": "4a977c70-3dce-464f-a4bd-97611825f4d0",
        "name": "Hogar & Cocina"
    }
]

  createDb(reqInfo?: RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
    

      return { all : this.products,
               categories: this.categories,
               tags: this.tags,
               colors: this.colors,
               conditions: this.conditions,
               contactsMethods: this.availabledContactMethods,
               saleStatus: this.saleStatus

      }

  }

}
