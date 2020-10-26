import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../interfaces/color';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  resource: String = "/color";

  constructor(private http: HttpClient) { }

  getColors() {
    //return this.http.get<Array<Color>>(environment.base_endpoint_url+this.resource+'/all');
    return this.http.get<Array<Color>>(environment.base_endpoint_url+this.resource+'/colors');
  }

}
