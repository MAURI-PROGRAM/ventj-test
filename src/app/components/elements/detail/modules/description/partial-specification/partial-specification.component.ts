import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Color } from 'src/app/interfaces/color';
import { deliveryPreference } from 'src/app/interfaces/deliveryPreference';
import { Condition } from 'src/app/interfaces/condition';
import { StatusProduct } from 'src/app/interfaces/statusProduct';

@Component({
  selector: 'app-partial-specification',
  templateUrl: './partial-specification.component.html',
  styleUrls: ['./partial-specification.component.scss'],
})
export class PartialSpecificationComponent implements OnInit{
  @Input()
  colors: Array<Color>;

  @Input()
  preferencesdelivery: deliveryPreference;

  @Input()
  condition: Condition;

  @Input()
  status: StatusProduct;


  constructor() { }


  ngOnInit() {}

}
