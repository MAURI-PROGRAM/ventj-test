import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.page.html',
  styleUrls: ['./description-product.page.scss'],
})
export class DescriptionProductPage implements OnInit{

  product: Product;
  products: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService.getProduct(params.id).subscribe((data) => {
        this.product = data;
      });
    });
  }

  async getProducts() {
    this.products = await this.productService.getProducts().toPromise();
  }

}
