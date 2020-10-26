import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationsProductPage } from './publications-product.page';

const routes: Routes = [
  {
    path: '',
    component: PublicationsProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationsProductPageRoutingModule {}
