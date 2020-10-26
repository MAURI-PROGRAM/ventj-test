import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralContractingConditionsPageRoutingModule } from './general-contracting-conditions-routing.module';

import { GeneralContractingConditionsPage } from './general-contracting-conditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralContractingConditionsPageRoutingModule
  ],
  declarations: [GeneralContractingConditionsPage]
})
export class GeneralContractingConditionsPageModule {}
