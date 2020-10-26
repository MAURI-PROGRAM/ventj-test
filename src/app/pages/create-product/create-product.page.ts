import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';
import {
  AlertController,
  IonContent,
  ToastController,
  IonSelect,
} from '@ionic/angular';

import { Category } from '../../interfaces/category';
import { Tag } from '../../interfaces/tag';
import { Condition } from '../../interfaces/condition';
import { availabledContactMethods } from '../../interfaces/availabledContactMethods';
import { SaleStatus } from '../../interfaces/saleStatus';
import { Color } from '../../interfaces/color';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service';
import { TagService } from '../../services/tag.service';
import { ColorService } from '../../services/color.service';
import { ProductService } from '../../services/product.service';

import { Product } from 'src/app/interfaces/product';
import { ProductEditService } from '../../services/product-edit.service';

import { finalize } from 'rxjs/operators';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
  categories?: Array<Category>;
  tags?: Array<Tag>;
  conditions: Array<Condition>;
  availabledContactMethods: Array<availabledContactMethods>;
  statusSaleStatus: Array<SaleStatus>;
  colors: Array<Color>;
  colorsSelected = new Array<string>();
  myFiles: Array<File> = [];

  productForm: FormGroup;
  categoriesForm: FormArray;
  tagsForm: FormArray;
  contactMethodsForm: FormArray;
  saleStatusForm: FormArray;
  photosForm: FormArray;
  colorsForm: FormArray;

  saving = false;
  @ViewChild(IonContent) myContent: IonContent;
  @ViewChild(IonSelect) mySelect: IonSelect;
  editAction = false;

  productToEdit: Product;
  photo1: any;
  photo2: any;
  photo3: any;
  values: [];
  urlPhotos: Array<string> = ['', '', ''];

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private tagService: TagService,
    private colorService: ColorService,
    private productService: ProductService,
    private toastController: ToastController,
    private productEditDataService: ProductEditService,
    private storage: AngularFireStorage
  ) {}

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

  ngOnInit() {
    this.initForm();
    this.getCategories();
    this.getTags();
    this.getConditions();
    this.getContactMethods();
    this.getSaleStatus();
    this.getColors();
  }

  async editingCategoryProduct() {
    this.productToEdit.categories.forEach((item) => {
      const category = this.categories?.find((x) => x.id === item.id);
      if (category) {
        category.selected = false;
        this.addCategoryToList(category);
      }
    });
  }

  async editingTagProduct() {
    if (!this.productToEdit.tags) { return; }

    this.productToEdit.tags?.forEach((item) => {
      var tag = this.tags?.find((x) => x.id === item.id);
      if (tag) {
        tag.selected = false;
        this.addTagList(tag);
      }
    });
  }

  editingColorProduct() {
    if (!this.productToEdit.color) return;

    this.productToEdit.color?.forEach((item) => {
      var color = this.colors?.find((x) => x.code == item.code);
      if (color) {
        color.selected = false;
        this.selectColor(color);
      }
    });
  }

  editingConditionProduct() {
    var condition = this.conditions?.find(
      (x) => x.code == this.productToEdit.condition.code
    );
    if (condition) {
      condition.selected = false;
      this.setCondition(condition);
    }
  }

  editingContactMethods() {
    this.productToEdit.availabledContactMethods.forEach((item) => {
      var contact = this.availabledContactMethods?.find(
        (x) => x.type == item.type
      );
      if (contact) {
        contact.selected = true;
        contact.value = item.value;
        this.addContactMethodToList(contact, contact.value);
      }
    });
  }

  editingSalestatus() {
    var saleStatus = this.statusSaleStatus?.find(
      (x) => x.code == this.productToEdit.saleStatus.code
    );
    if (saleStatus) {
      saleStatus.selected = false;
      this.setSaleStatus(saleStatus);
    }
  }

  setProductToEdit(product: Product) {
    this.urlPhotos = [];
    this.productForm
      .get('information.title')
      .setValue(product.information.title);
    this.productForm
      .get('information.description')
      .setValue(product.information.description);
    this.productForm.get('price').setValue(product.price);
    this.productForm.get('location.address').setValue(product.location.address);

    if (product.photos && product.photos.length > 0) {
      this.photo1 = {
        path: product.photos[0]?.path,
        name: product.photos[0]?.name,
      };
      this.urlPhotos.push(product.photos[0]?.name.toString());

      if (product.photos && product.photos.length == 2) {
        this.photo2 = {
          path: product.photos[1]?.path,
          name: product.photos[1]?.name,
        };
        this.urlPhotos.push(product.photos[1]?.name.toString());
      }

      if (product.photos && product.photos.length == 3) {
        this.photo2 = {
          path: product.photos[1]?.path,
          name: product.photos[1]?.name,
        };

        this.photo3 = {
          path: product.photos[2]?.path,
          name: product.photos[2]?.name,
        };
        this.urlPhotos.push(product.photos[1]?.name.toString());
        this.urlPhotos.push(product.photos[2]?.name.toString());
      }
    }
  }

  backToHome() {
    this.router.navigateByUrl('/tabs/publications-product');
  }

  selectColor(value: Color) {
    value.selected = !value.selected;
    let indexControl = this.colorsForm.controls.findIndex(
      (x) => JSON.parse(JSON.stringify(x.value)).code == value.code
    );
    if (indexControl < 0)
      this.colorsForm.push(
        new FormControl({ code: value.code, hexcode: value.hexcode })
      );
    else this.colorsForm.removeAt(indexControl);
  }

  getColors() {
    this.colorService.getColors().subscribe((data) => {
      this.colors = data;
      if (this.productToEdit) {
        this.editingColorProduct();
      }
    });
  }

  giveMeFile1(fileEmitted) {
    this.myFiles[0] = fileEmitted;
    this.uploadImagesToFireStore(this.myFiles[0], 0);
  }

  giveMeFile2(fileEmitted) {
    this.myFiles[1] = fileEmitted;
    this.uploadImagesToFireStore(this.myFiles[1], 1);
  }

  giveMeFile3(fileEmitted) {
    this.myFiles[2] = fileEmitted;
    this.uploadImagesToFireStore(this.myFiles[2], 2);
  }

  removeFile1(fileEmitted) {
    this.myFiles[0] = null;
  }

  removeFile2(fileEmitted) {
    this.myFiles[1] = null;
  }

  removeFile3(fileEmitted) {
    this.myFiles[2] = null;
  }

  sendProduct() {
    this.scrollToTop();
    this.saving = true;

    //this.uploadImagesToFireStore()

    this.isCreatingOrUpdatingProduct().subscribe(
      (response) => {
        //this.presentToast(response.message)
        this.backToHome();
      },
      (error) => {
        this.presentToast(error.error, 'danger');
      }
    );
  }

  uploadImagesToFireStore(file, indice) {
    let downloadURL1: Observable<any>;

    if (file) {
      let filePath = `uploads/${Date.now()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            downloadURL1 = fileRef.getDownloadURL();

            downloadURL1.subscribe((data) => {
              this.urlPhotos[indice] = data;
            });
          })
        )
        .subscribe();
    } else {
      this.presentToast('Debs subir por lo menos una imagen');
      this.saving = false;
    }
  }

  isCreatingOrUpdatingProduct() {
    if (!this.productToEdit) {
      return this.productService.createProduct(
        this.productForm,
        this.myFiles,
        this.urlPhotos
      );
      //this.productForm
    } else {
      return this.productService.updateProduct(
        this.productToEdit.id,
        this.productForm,
        this.myFiles,
        this.urlPhotos
      );
    }
  }

  setSaleStatus(saleStatus) {
    this.statusSaleStatus.forEach((x) => {
      x.selected = false;
    });
    saleStatus.selected = true;
    this.productForm.get('saleStatus').setValue(saleStatus);
  }

  getSaleStatus() {
    this.productService.getSaleStatus().subscribe((data) => {
      this.statusSaleStatus = data;
      if (this.productToEdit) {
        this.editingSalestatus();
      }
    });
  }

  async showInputBoxForAddContactMethod(contactMethod) {
    /*if (contactMethod.selected) {
      contactMethod.selected = false;
      contactMethod.value = '';
      this.removeContactMethodFromList(contactMethod);
      return;
    }*/

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Metodo de contacto',
      subHeader: 'Seleccionado: ' + contactMethod.type,
      inputs: [
        {
          name: 'value',
          type: contactMethod.type == 'email' ? 'email' : 'text',
          placeholder:
            contactMethod.type == 'email'
              ? 'Ingresa tu email aqui'
              : 'Ingresa tu numero aqui',
          value: contactMethod.value,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Agregar',
          handler: (data) => {
            if (data.value && data.value.length > 9) {
              if (
                data.value &&
                data.value.length > 9 &&
                contactMethod.value &&
                contactMethod.value.length > 0 &&
                data.value != contactMethod.value
              ) {
                this.replaceContactMethod(contactMethod, data.value);
              } else {
                this.addContactMethodToList(contactMethod, data.value);
              }
            }
          },
        },
      ],
    });

    await alert.present();
  }

  replaceContactMethod(contactMethod, inputData) {
    contactMethod.value = inputData;
    contactMethod.selected = true;
    this.removeContactMethodFromList(contactMethod);
    this.addContactMethodToList(contactMethod, inputData);
  }

  addContactMethodToList(contactMethod, inputData) {
    contactMethod.value = inputData;
    contactMethod.selected = true;
    this.contactMethodsForm.push(
      new FormControl({ type: contactMethod.type, value: contactMethod.value })
    );
  }

  removeContactMethodFromList(contactMethod: availabledContactMethods) {
    let indexControl = this.contactMethodsForm.controls.findIndex(
      (x) => JSON.parse(JSON.stringify(x.value)).type == contactMethod.type
    );
    this.contactMethodsForm.removeAt(indexControl);
  }

  unSelectContactMethod(contactMethod: availabledContactMethods) {
    contactMethod.selected = false;
    contactMethod.value = '';
    this.removeContactMethodFromList(contactMethod);
  }

  setCondition(condition) {
    this.conditions.forEach((x) => {
      x.selected = false;
    });
    condition.selected = true;
    this.productForm.get('condition').setValue(condition);
  }

  addCategoryToList(category) {
    if (!category.selected) {
      category.selected = true;
      this.categoriesForm.push(
        new FormControl({ id: category.id, name: category.name })
      );
    } else {
      category.selected = false;
      this.removeCategoryFromList(category);
    }
  }

  removeCategoryFromList(category: Category) {
    let indexControl = this.categoriesForm.controls.findIndex(
      (x) => JSON.parse(JSON.stringify(x.value)).id == category.id
    );
    this.categoriesForm.removeAt(indexControl);
  }

  addTagList(tag) {
    if (!tag.selected) {
      tag.selected = true;
      this.tagsForm.push(new FormControl({ id: tag.id, name: tag.name }));
    } else {
      tag.selected = false;
      this.removeTagFromList(tag);
    }
  }

  removeTagFromList(tag: Tag) {
    let indexControl = this.tagsForm.controls.findIndex(
      (x) => JSON.parse(JSON.stringify(x.value)).id == tag.id
    );
    this.tagsForm.removeAt(indexControl);
  }

  initForm() {
    this.categoriesForm = new FormArray([]);
    this.tagsForm = new FormArray([]);
    this.contactMethodsForm = new FormArray([]);
    this.photosForm = new FormArray([]);
    this.colorsForm = new FormArray([]);

    this.productForm = this.fb.group({
      information: this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
      }),
      categories: this.categoriesForm,
      tags: this.tagsForm,
      condition: this.fb.group({
        code: ['', Validators.required],
        title: ['', Validators.required],
        selected: [false],
      }),
      color: this.colorsForm,
      price: ['', Validators.required],
      saleStatus: this.fb.group({
        code: ['availabled', Validators.required],
        name: ['Disponible', Validators.required],
        selected: [false],
      }),
      location: this.fb.group({
        countryCode: ['ES', Validators.required],
        country: ['España', Validators.required],
        city: ['Mayorca', Validators.required],
        address: ['', Validators.required],
        points: this.fb.group({
          lat: [0.0, Validators.required],
          lng: [0.0, Validators.required],
        }),
      }),
      availabledContactMethods: this.contactMethodsForm,
      deliveryPreference: this.fb.group({
        code: ['pickup', Validators.required],
        title: ['recogida', Validators.required],
      }),
      status: this.fb.group({
        code: ['active', Validators.required],
        description: ['Active Status of Product', Validators.required],
      }),
    });
  }

  getContactMethods() {
    this.productService.getAvailabledContactMethods().subscribe((data) => {
      this.availabledContactMethods = data;
      if (this.productToEdit) {
        this.editingContactMethods();
      }
    });
  }

  getConditions() {
    this.productService.getConditions().subscribe((data) => {
      this.conditions = data;
      if (this.productToEdit) {
        this.editingConditionProduct();
      }
    });
  }

  getTags() {
    this.tagService.getTags().subscribe((data) => {
      this.tags = data;
      if (this.productToEdit) {
        this.editingTagProduct();
      }
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      if (this.productToEdit) {
        this.editingCategoryProduct();
      }
    });
  }
}
