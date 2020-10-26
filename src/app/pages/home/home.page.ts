import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { StorageServiceService } from '../../services/storage-service.service';


import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Array<Product> = [];
  parameters: any;

  constructor(private productService: ProductService,
              private router: Router,
              private localStorageService: StorageServiceService) {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd && event.url.toString() === '/tabs/home') {
        this.getProducts();
      }
    });
  }

  slideOpts = {
    initialSlide: 0,
    loop : true,
    speed: 400
  };

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
     this.productService.getProducts().subscribe( data => {
      this.localStorageService.setLocalStorage('products', data);
      this.products = data;
    });
  }
}
