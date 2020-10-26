import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionsWebUsePageRoutingModule } from './conditions-web-use-routing.module';

import { ConditionsWebUsePage } from './conditions-web-use.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionsWebUsePageRoutingModule
  ],
  declarations: [ConditionsWebUsePage]
})
export class ConditionsWebUsePageModule {}
