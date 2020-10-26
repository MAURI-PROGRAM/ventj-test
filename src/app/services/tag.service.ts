import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tag } from '../interfaces/tag';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  resource: String = "/tag";

  constructor(private http: HttpClient) { }

  getTags() {
    //return this.http.get<Array<Tag>>(environment.base_endpoint_url+this.resource+'/all');    
    return this.http.get<Array<Tag>>(environment.base_endpoint_url+this.resource+'/tags');
  }
  
}
