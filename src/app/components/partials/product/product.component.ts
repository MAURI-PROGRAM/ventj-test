import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-card-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Output() removingProduct: EventEmitter<string> = new EventEmitter<string>();

  deleting: boolean;

  constructor(
    public alertController: AlertController,
    private router: Router,
    private productService: ProductService,
    private toastController: ToastController,
  ) {}

  ngOnInit() {}

  async remove(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmanos!',
      message: 'Estas <strong>seguro</strong> de remover este producto ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'De Acuerdo',
          handler: () => {
            this.deleteProduct(id);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastController
      .create({
        message,
        duration: 3000,
      })
      .finally(() => (this.deleting = false));
    toast.color = color;
    toast.present();
  }

  deleteProduct(id: string) {
    this.deleting = true;
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        /*this.presentToast(response);*/ this.removingProduct.emit(
          'removing product...'
        );
      },
      (error) => this.presentToast(error, 'danger')
    );
  }

  edit() {
    this.router.navigateByUrl('/product', { state: this.product });
  }
}
