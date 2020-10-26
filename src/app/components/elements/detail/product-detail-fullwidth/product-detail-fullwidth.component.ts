import { Component,Input} from '@angular/core';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-product-detail-fullwidth',
  templateUrl: './product-detail-fullwidth.component.html',
  styleUrls: ['./product-detail-fullwidth.component.scss'],
})
export class ProductDetailFullwidthComponent {

  @Input()
  product: Product;
  constructor() { }
}
