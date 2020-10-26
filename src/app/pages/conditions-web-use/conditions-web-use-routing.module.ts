import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionsWebUsePage } from './conditions-web-use.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionsWebUsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionsWebUsePageRoutingModule {}
