import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild,
} from "@angular/core";
import { Observer, Observable } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { ProductService } from 'src/app/services/product.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = "init";

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: "ve-comp-input-image",
  templateUrl: "./ve-comp-input-image.component.html",
  styleUrls: ["./ve-comp-input-image.component.scss"],
})
export class ImageUploadComponent implements OnInit {
  selectedFile: ImageSnippet;
  imgURL: any;
  preLoading: boolean = false;

  @Output()
  imagePreLoaded: EventEmitter<File> = new EventEmitter<File>();

  @Output()
  imageRemoving: EventEmitter<File> = new EventEmitter<File>();

  @Input()
  uriPhoto: any;

  @ViewChild("imageInput") imageInputFile: HTMLElement;

  base64Image: any;

  picturesForm: FormGroup;
  //urlPhoto = "https://firebasestorage.googleapis.com/v0/b/ventajon-segunda-mano-9b134.appspot.com/o/uploads%2F0a029cb7870243c7b36c71922a55701a.jpg?alt=media&token=26fdd75d-49d8-4dc3-bae8-720c634e12e2"

  constructor(private fb: FormBuilder, private ps: ProductService) {}

  ngOnInit() {
    this.picturesForm = this.fb.group({
      photo1: [],
    });
    if (this.uriPhoto?.name) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        var blob = xhr.response;
        let imageFile: File = new File(
          [blob],
          "2F0a029cb7870243c7b36c71922a55701a.jpg",
          {
            type: "image/jpeg",
          }
        );

        this.processFile(this.imageInputFile, imageFile);
      };
      xhr.open("GET", this.uriPhoto.name);
      xhr.send();
    }
  }

  createBlobImageFileAndShow(): void {
    this.dataURItoBlob(this.base64Image).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = "File1.jpeg"; //this.generateName();
      let imageFile: File = new File([imageBlob], imageName, {
        type: "image/jpeg",
      });

      let inputFileImage = document.getElementById("inputGroupFile01");
      this.processFile(inputFileImage, imageFile);
    });
  }

  dataURItoBlob(dataURI: string): Observable<Blob> {
    return Observable.create((observer: Observer<Blob>) => {
      const byteString: string = window.atob(dataURI);
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: "image/jpeg" });
      observer.next(blob);
      observer.complete();
    });
  }

  getBase64ImageFromURL(url: string) {
    try {
      return Observable.create((observer: Observer<string>) => {
        // create an image object
        let img = new Image();
        img.crossOrigin = "Anonymous";
        //img.crossOrigin = "Access-Control-Allow-Origin"
        img.src = url;

        if (!img.complete) {
          // This will call another method that will create image from url
          img.onload = () => {
            observer.next(this.getBase64Image(img));
            //observer.next("aja 123 123");
            observer.complete();
          };
          img.onerror = (err) => {
            console.log("error getBase64ImageFromURL 1 " + JSON.stringify(err));
            observer.error(err);
          };
        } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
        }
      });
    } catch (Exception) {
      console.log("error getBase64ImageFromURL 2 " + Exception);
    }
  }

  getBase64Image(img: HTMLImageElement) {
    try {
      // We create a HTML canvas object that will create a 2d image
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d"); // This will draw image
      ctx.drawImage(img, 0, 0);

      // Convert the drawn image to Data URL
      var dataURL = canvas.toDataURL("image/png");
      //var dataURL = canvas.toDataURL("image/jpg");
      //return dataURL.replace(/^data:image\/(jpg);base64,/, "");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      //return dataURL
    } catch (Exception) {
      console.log("error getBase64Image " + Exception);
    }
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = "ok";
    this.imagePreLoaded.emit(this.selectedFile.file);
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = "fail";
    this.selectedFile.src = "";
  }

  processFile(imageInput: any, updateFilePicture?: File) {
    var file: File;

    if (updateFilePicture) {
      file = updateFilePicture;
    } else {
      file = imageInput.files[0];
    }

    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imgURL = event.target.result;
      this.preLoading = true;

      this.selectedFile.pending = true;
      this.onSuccess();
    });

    reader.readAsDataURL(file);
  }

  remove() {
    this.imageRemoving.emit(this.selectedFile.file);
    this.imgURL = null;
    this.preLoading = false;
  }
}
