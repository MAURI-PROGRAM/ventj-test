import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrawerMenuPageRoutingModule } from './drawer-menu-routing.module';

import { DrawerMenuPage } from './drawer-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrawerMenuPageRoutingModule
  ],
  declarations: [DrawerMenuPage]
})
export class DrawerMenuPageModule {}
