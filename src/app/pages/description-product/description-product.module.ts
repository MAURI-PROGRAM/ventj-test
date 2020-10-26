import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionProductPageRoutingModule } from './description-product-routing.module';

import { DescriptionProductPage } from './description-product.page';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DefaultDescriptionComponent } from 'src/app/components/elements/detail/modules/description/default-description/default-description.component';
import { PartialDescriptionComponent } from 'src/app/components/elements/detail/modules/description/partial-description/partial-description.component';
import { PartialSpecificationComponent } from 'src/app/components/elements/detail/modules/description/partial-specification/partial-specification.component';
import { PartialVendorComponent } from 'src/app/components/elements/detail/modules/description/partial-vendor/partial-vendor.component';
import { ProductDetailFullwidthComponent } from 'src/app/components/elements/detail/product-detail-fullwidth/product-detail-fullwidth.component';
import { ThumbnailDefaultComponent } from 'src/app/components/elements/detail/modules/thumbnail/thumbnail-default/thumbnail-default.component';
import { InformationDefaultComponent } from 'src/app/components/elements/detail/modules/information/information-default/information-default.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionProductPageRoutingModule,
    SlickCarouselModule,
    SharedModule,
  ],
  declarations: [
    DescriptionProductPage,
    DefaultDescriptionComponent,
    PartialDescriptionComponent,
    PartialSpecificationComponent,
    PartialVendorComponent,
    ProductDetailFullwidthComponent,
    ThumbnailDefaultComponent,
    InformationDefaultComponent
  ],
})
export class DescriptionProductPageModule {}
