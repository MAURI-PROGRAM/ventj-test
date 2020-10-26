import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicationsProductPageRoutingModule } from './publications-product-routing.module';

import { PublicationsProductPage } from './publications-product.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from 'src/app/components/partials/product/product.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicationsProductPageRoutingModule,
    SharedModule,
  ],
  declarations: [PublicationsProductPage, ProductComponent]
})
export class PublicationsProductPageModule {}
