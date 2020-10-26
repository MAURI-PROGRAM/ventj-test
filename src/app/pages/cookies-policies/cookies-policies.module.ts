import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookiesPoliciesPageRoutingModule } from './cookies-policies-routing.module';

import { CookiesPoliciesPage } from './cookies-policies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookiesPoliciesPageRoutingModule
  ],
  declarations: [CookiesPoliciesPage]
})
export class CookiesPoliciesPageModule {}
