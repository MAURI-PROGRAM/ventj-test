import { Component,Input} from '@angular/core';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-default-description',
  templateUrl: './default-description.component.html',
  styleUrls: ['./default-description.component.scss'],
})
export class DefaultDescriptionComponent {

  @Input()
  product: Product;

  segmentInfo = 'description';
  constructor() {}
  segmentChanged(ev: any) {
    this.segmentInfo = ev.detail.value;
  }
}
