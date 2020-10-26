import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDefaultComponent } from '../components/shared/footer-default/footer-default.component';
import { FooterWidgetComponent } from '../components/shared/footer-widget/footer-widget.component';
import { ProductItemComponent } from '../components/partials/product-item/product-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VeLogoComponent } from '../components/shared/ve-logo/ve-logo.component';
import { ImageUploadComponent } from '../components/partials/ve-comp-input-image/ve-comp-input-image.component';
import { ProductFormComponent } from '../components/partials/product-form/product-form.component';



@NgModule({
  declarations: [
    FooterDefaultComponent,
    FooterWidgetComponent,
    ProductItemComponent,
    ImageUploadComponent,
    VeLogoComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports : [
    FooterDefaultComponent,
    FooterWidgetComponent,
    ProductItemComponent,
    ImageUploadComponent,
    VeLogoComponent,
    ProductFormComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
