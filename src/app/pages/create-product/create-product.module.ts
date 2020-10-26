import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProductPageRoutingModule } from './create-product-routing.module';

import { CreateProductPage } from './create-product.page';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProductPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CreateProductPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CreateProductPageModule {}
