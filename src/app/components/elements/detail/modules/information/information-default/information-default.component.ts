import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-information-default',
  templateUrl: './information-default.component.html',
  styleUrls: ['./information-default.component.scss'],
})
export class InformationDefaultComponent implements OnInit {

  @Input()
  product: Product;

  @Input()
  currency: string;
  quantity = 1;

  constructor() { }

  ngOnInit() {}
  handleIncreaseItemQty() {
    this.quantity = this.quantity + 1;
  }
  handleDecreaseItemQty() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }

}
