import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { StorageServiceService } from '../../services/storage-service.service';

@Component({
  selector: 'app-publications-product',
  templateUrl: './publications-product.page.html',
  styleUrls: ['./publications-product.page.scss'],
})
export class PublicationsProductPage implements OnInit {
  products: Array<Product> = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private localStorageService: StorageServiceService
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && e.url.toString() === '/tabs/publications-product') {
        this.getProducts();
      }
    });
   }

  productRemoved(event) {
    this.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((list) => {
      this.localStorageService.setLocalStorage('products', list);
      this.products = list;
    });
  }

  goToCreateProduct() {
    this.router.navigate(['/create-product']);
  }

}
