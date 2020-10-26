import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private localStorageService: StorageServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: Params) => {
      const codeParams = params?.params?.code || null;
      if (codeParams){
        this.getToken(codeParams);
      }
    });
  }

  getToken(code: string) {
    this.authService.getToken(code).subscribe( data => {
      if (data?.token_type === 'Bearer'){
        this.localStorageService.setLocalStorage('expires_in', data.expires_in);
        this.localStorageService.setLocalStorage('is_autentication', true);
        this.localStorageService.setLocalStorage('access_token', data.access_token);
        this.localStorageService.setLocalStorage('refresh_token', data.refresh_token);
      }
      this.router.navigate(['/tabs/home']);
    });
  }

}
