import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Condition } from '../interfaces/condition';
import { availabledContactMethods } from '../interfaces/availabledContactMethods';
import { SaleStatus } from '../interfaces/saleStatus';
import { Product } from '../interfaces/product';
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productItem = {
    information: {
      title: 'Movil A/C Z0025',
      description: 'Movil A/C Z0025. Aire Acondicionado Movil Portable',
    },
    categories: [
      {
        id: '0c20de23-0e0f-4b0b-996b-75e9b3aeb0f5',
        name: 'Electronicos',
      },
    ],
    tags: [
      {
        id: 'fb98e1fc-5d51-4e27-8595-e9d1a41b5b1c',
        name: 'Electronicos',
      },
    ],
    condition: {
      code: 'new',
      title: 'Nuevo',
      selected: true,
    },
    color: [
      {
        code: 'Blanco',
        hexcode: '#fff',
      },
    ],
    price: '125',
    saleStatus: {
      code: 'availabled',
      name: 'Disponible',
      selected: true,
    },
    location: {
      countryCode: 'ES',
      country: 'España',
      city: 'Mayorca',
      address: 'Av. de las Americas',
      points: {
        lat: 0,
        lng: 0,
      },
    },
    photo2: 'undefined',
    photo3: 'undefined',
    availabledContactMethods: [
      {
        type: 'email',
        value: 'mimail@mail.com',
      },
      {
        type: 'phone',
        value: '0989755008',
      },
    ],
    deliveryPreference: {
      code: 'pickup',
      title: 'recogida',
    },
    status: {
      code: 'active',
      description: 'Active Status of Product',
    },
    photos: [
      {
        id: '',
        name: '',
        path: '',
      },
      {
        id: '',
        name: '',
        path: '',
      },
      {
        id: '',
        name: '',
        path: '',
      },
    ],
    id: 'b77edd3f-ee32-4785-9f68-85c12abd8037',
  };

  resource = '/product';

  constructor(private http: HttpClient) {}

  // getFile(objectPath: any): Observable<Blob> {
  getFile(objectPath: any): any {
    // let url = environment.base_endpoint_url+this.resource+'/images?name='+objectPath.name
    const url = objectPath;
    return this.http.get(url);
    // return this.http.get(url, {responseType: 'blob'})
  }

  getConditions() {
    // return this.http.get<Array<Condition>>(environment.base_endpoint_url+this.resource+'/condition/all');
    return this.http.get<Array<Condition>>(
      environment.base_endpoint_url + this.resource + '/conditions'
    );
  }

  getAvailabledContactMethods() {
    // return this.http.get<Array<availabledContactMethods>>(environment.base_endpoint_url+this.resource+'/contactsMethods/all');
    return this.http.get<Array<availabledContactMethods>>(
      environment.base_endpoint_url + this.resource + '/contactsMethods'
    );
  }

  getSaleStatus() {
    //    return this.http.get<Array<SaleStatus>>(environment.base_endpoint_url+this.resource+'/saleStatus/all');
    return this.http.get<Array<SaleStatus>>(
      environment.base_endpoint_url + this.resource + '/saleStatus'
    );
  }

  getProducts() {
    const url = `${environment.base_endpoint_url}${this.resource}/all` ;
    return this.http.get<Array<Product>>(url);
  }
  getProduct(id: string) {
    const url = `${environment.base_endpoint_url}${this.resource}/all/${id}` ;
    return this.http.get<Product>(url);
  }

  createProduct(
    product: FormGroup,
    files: Array<File>,
    urlPhoto: Array<string>
  ) {
    const formDataProduct = new FormData();
    formDataProduct.append(
      'information',
      JSON.stringify(product.get('information').value)
    );
    formDataProduct.append(
      'categories',
      JSON.stringify(product.get('categories').value)
    );
    formDataProduct.append('tags', JSON.stringify(product.get('tags').value));
    formDataProduct.append(
      'condition',
      JSON.stringify(product.get('condition').value)
    );
    formDataProduct.append('color', JSON.stringify(product.get('color').value));
    formDataProduct.append('price', product.get('price').value);

    formDataProduct.append(
      'saleStatus',
      JSON.stringify(product.get('saleStatus').value)
    );
    formDataProduct.append(
      'location',
      JSON.stringify(product.get('location').value)
    );

    formDataProduct.append('photo1', files[0]);
    formDataProduct.append('photo2', files[1]);
    formDataProduct.append('photo3', files[2]);

    formDataProduct.append(
      'availabledContactMethods',
      JSON.stringify(product.get('availabledContactMethods').value)
    );

    formDataProduct.append(
      'deliveryPreference',
      JSON.stringify(product.get('deliveryPreference').value)
    );
    formDataProduct.append(
      'status',
      JSON.stringify(product.get('status').value)
    );

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
    };

    const filePath = `uploads/${Date.now()}_${files[0].name}`;

    this.productItem.id = uuidv4();
    this.productItem.information = product.get('information').value;
    this.productItem.categories = product.get('categories').value;
    this.productItem.tags = product.get('tags').value;
    this.productItem.condition = product.get('condition').value;
    this.productItem.color = product.get('color').value;
    this.productItem.price = product.get('price').value;
    this.productItem.saleStatus = product.get('saleStatus').value;
    this.productItem.location = product.get('location').value;
    this.productItem.availabledContactMethods = product.get(
      'availabledContactMethods'
    ).value;
    this.productItem.deliveryPreference = product.get(
      'deliveryPreference'
    ).value;
    this.productItem.status = product.get('status').value;
    if (urlPhoto) {
      if (urlPhoto[0]) { this.productItem.photos[0].name = urlPhoto[0]; }
      this.productItem.photos[0].id = this.productItem.id;
      if (urlPhoto[1]) { this.productItem.photos[1].name = urlPhoto[1]; }
      this.productItem.photos[1].id = this.productItem.id;
      if (urlPhoto[2]) { this.productItem.photos[2].name = urlPhoto[2]; }
      this.productItem.photos[2].id = this.productItem.id;
    }

    try {
      // return this.http.post<any>(environment.base_endpoint_url + this.resource + '/create', formDataProduct);
      return this.http.post<any>(
        environment.base_endpoint_url + this.resource + '/all',
        this.productItem
      );
    } catch (error) {
      console.log('Se ha generado la siguiente excepción: ' + error);
    }
  }

  updateProduct(
    id: string,
    product: FormGroup,
    files: Array<File>,
    urlPhoto: Array<string>
  ) {
    const formDataProduct = new FormData();
    formDataProduct.append(
      'information',
      JSON.stringify(product.get('information').value)
    );
    formDataProduct.append(
      'categories',
      JSON.stringify(product.get('categories').value)
    );
    formDataProduct.append('tags', JSON.stringify(product.get('tags').value));
    formDataProduct.append(
      'condition',
      JSON.stringify(product.get('condition').value)
    );
    formDataProduct.append('color', JSON.stringify(product.get('color').value));
    formDataProduct.append('price', product.get('price').value);

    formDataProduct.append(
      'saleStatus',
      JSON.stringify(product.get('saleStatus').value)
    );
    formDataProduct.append(
      'location',
      JSON.stringify(product.get('location').value)
    );

    formDataProduct.append('photo1', files[0]);
    formDataProduct.append('photo2', files[1]);
    formDataProduct.append('photo3', files[2]);

    formDataProduct.append(
      'availabledContactMethods',
      JSON.stringify(product.get('availabledContactMethods').value)
    );

    formDataProduct.append(
      'deliveryPreference',
      JSON.stringify(product.get('deliveryPreference').value)
    );
    formDataProduct.append(
      'status',
      JSON.stringify(product.get('status').value)
    );

    /*const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })
    };*/

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.productItem.id = id.toString();
    this.productItem.information = product.get('information').value;
    this.productItem.categories = product.get('categories').value;
    this.productItem.tags = product.get('tags').value;
    this.productItem.condition = product.get('condition').value;
    this.productItem.color = product.get('color').value;
    this.productItem.price = product.get('price').value;
    this.productItem.saleStatus = product.get('saleStatus').value;
    this.productItem.location = product.get('location').value;
    this.productItem.availabledContactMethods = product.get(
      'availabledContactMethods'
    ).value;
    this.productItem.deliveryPreference = product.get(
      'deliveryPreference'
    ).value;
    this.productItem.status = product.get('status').value;

    if (urlPhoto) {
      if (urlPhoto[0]) { this.productItem.photos[0].name = urlPhoto[0]; }
      this.productItem.photos[0].id = this.productItem.id;
      if (urlPhoto[1]) { this.productItem.photos[1].name = urlPhoto[1]; }
      this.productItem.photos[1].id = this.productItem.id;
      if (urlPhoto[2]) { this.productItem.photos[2].name = urlPhoto[2]; }
      this.productItem.photos[2].id = this.productItem.id;
    }

    try {
      // return this.http.post<any>(environment.base_endpoint_url + this.resource + '/update/'+id.toString(), formDataProduct);
      return this.http.put<any>(
        environment.base_endpoint_url + this.resource + '/all',
        this.productItem,
        httpOptions
      );
    } catch (error) {
      console.log('se ha generado la siguiente excepción: ' + error);
    }
  }

  deleteProduct(id: string) {
    /*const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json'
      }),
      params: new HttpParams().set('id' , id.toString())
    };*/
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    // return this.http.delete<any>(environment.base_endpoint_url + this.resource + "/delete", httpOptions);
    return this.http.delete<any>(
      environment.base_endpoint_url + this.resource + '/all/' + id.toString(),
      httpOptions
    );
  }
}
