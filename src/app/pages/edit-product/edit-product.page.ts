import { Component, OnInit,  ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { IonContent, ToastController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  saving = false;
  editAction = false;
  @ViewChild(IonContent) myContent: IonContent;
  productToEdit: Product;
  productForm: FormGroup;
  myFiles: Array<File> = [];
  urlPhotos: Array<string> = ['', '', ''];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private toastController: ToastController,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService.getProduct(params.id).subscribe((data) => {
        this.productToEdit = data;
      }, (error) => {
        this.backToHome();
      });
    });

  }


  async scrollToTop() {
    await this.myContent.scrollToTop();
  }
  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastController
      .create({
        message,
        duration: 3000,
      })
      .finally(() => (this.saving = false));
    toast.color = color;
    toast.present();
  }

  sendProduct() {
    this.scrollToTop();
    this.saving = true;


    this.productService.updateProduct(
      this.productToEdit.id,
      this.productForm,
      this.myFiles,
      this.urlPhotos
    ).subscribe(
      (response) => {
        this.backToHome();
      },
      (error) => {
        this.presentToast(error.error, 'danger');
      }
    );
  }


  backToHome() {
    this.router.navigateByUrl('/tabs/publications-product');
  }
}
