import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralContractingConditionsPage } from './general-contracting-conditions.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralContractingConditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralContractingConditionsPageRoutingModule {}
