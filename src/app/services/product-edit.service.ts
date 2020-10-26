import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductEditService {

  private productEditSource = new BehaviorSubject(null);
  currentProductToEdit = this.productEditSource.asObservable();

  constructor() { }

  changeProduct(product: Product) {
    this.productEditSource.next(product);
  }

}
