import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { DrawerMenuPage } from '../pages/drawer-menu/drawer-menu.page'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {}

  async showMenu() {
    const modal = await this.modalController.create({
      component: DrawerMenuPage,
      cssClass: 've-drawer-menu'
    })
    return await modal.present()
  }


}
