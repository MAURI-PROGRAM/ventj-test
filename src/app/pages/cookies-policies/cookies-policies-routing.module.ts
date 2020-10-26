import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookiesPoliciesPage } from './cookies-policies.page';

const routes: Routes = [
  {
    path: '',
    component: CookiesPoliciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookiesPoliciesPageRoutingModule {}
