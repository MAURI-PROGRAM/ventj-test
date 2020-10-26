import { Component, OnInit ,Input} from '@angular/core';
import { availabledContactMethods } from 'src/app/interfaces/availabledContactMethods';

@Component({
  selector: 'app-partial-vendor',
  templateUrl: './partial-vendor.component.html',
  styleUrls: ['./partial-vendor.component.scss'],
})
export class PartialVendorComponent implements OnInit {

  @Input()
  contactos: Array<availabledContactMethods>;

  constructor() { }

  ngOnInit() {}

}
