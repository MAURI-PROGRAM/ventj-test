import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenAuth } from '../interfaces/tokenAuth';
import { StorageServiceService } from './storage-service.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  resource = '/veoauth/access_token';
  constructor(
    private http: HttpClient,
    private localStorageService: StorageServiceService,
    private router: Router,
    ) {}

  getToken(code: string) {
    const body = new HttpParams()
      .set('code', code)
      .set('grant_type', 'authorization_code')
      .set('client_id', 'ventajonsm')
      .set('redirect_uri', 'http://192.168.152.106:4200/callback');
    return this.http.post<TokenAuth>(environment.base_authorization_url + this.resource, body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  login(){
    let url = 'http://192.168.152.105/veoauth/authorize';
    url += '?response_type=code';
    url += '&client_id=' + encodeURIComponent('ventajonsm');
    url += '&scope=' + encodeURIComponent('*');
    url += '&redirect_uri=' + encodeURIComponent('http://192.168.152.106:4200/callback');
    window.location.href = url;
  }

  isAuthenticated(): boolean{
    return this.localStorageService.getLocalStorage('is_autentication');
  }

  logout(){
    this.localStorageService.removeLocalStorage('expires_in');
    this.localStorageService.removeLocalStorage('access_token');
    this.localStorageService.removeLocalStorage('refresh_token');
    this.localStorageService.setLocalStorage('is_autentication', false);
    this.router.navigate(['/tabs/home']);
  }

}
