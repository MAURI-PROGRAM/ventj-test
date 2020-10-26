import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawerMenuPage } from './drawer-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DrawerMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawerMenuPageRoutingModule {}
