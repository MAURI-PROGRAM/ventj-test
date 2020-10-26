import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 've-logo',
  templateUrl: './ve-logo.component.html',
  styleUrls: ['./ve-logo.component.scss'],
})
export class VeLogoComponent{

  widthImage: number;
  isAutentication: boolean;

  constructor(
    private authorization: AuthService,
    ) {
      this.isAutentication = this.authorization.isAuthenticated();
  }
  login(){
    this.authorization.login();
    this.isAutentication = this.authorization.isAuthenticated();
  }
  logout(){
    this.authorization.logout();
    this.isAutentication = this.authorization.isAuthenticated();
  }
}
