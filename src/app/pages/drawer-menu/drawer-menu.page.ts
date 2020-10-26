import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.page.html',
  styleUrls: ['./drawer-menu.page.scss'],
})
export class DrawerMenuPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
