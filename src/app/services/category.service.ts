import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../interfaces/category';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  resource: String = "/category";

  constructor(private http: HttpClient) { }

  getCategories() {
    //return this.http.get<Array<Category>>(environment.base_endpoint_url+this.resource+'/all');
    return this.http.get<Array<Category>>(environment.base_endpoint_url+this.resource+'/categories');
  }


}
