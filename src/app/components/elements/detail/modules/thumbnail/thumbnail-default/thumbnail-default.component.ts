import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-thumbnail-default',
  templateUrl: './thumbnail-default.component.html',
  styleUrls: ['./thumbnail-default.component.scss'],
})
export class ThumbnailDefaultComponent implements OnInit, OnChanges {

  @ViewChild('slickModal1') slickModal1: SlickCarouselComponent;

  @Input()
  photos: Array<Photo>;


  gallerySetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.thumbs',
    nextArrow: `<button class="slick-arrow slick-next" (click)="next()">
                  <i class="icon-chevron-right"></i>
                </button>`,
    prevArrow: `<button class="slick-arrow slick-prev" (click)="prev()">
                  <i class="icon-chevron-left"></i>
                </button>`
  };
  variantSetting = {
    asNavFor: '.feedback',
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    vertical: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
    ],
  };
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {}
  ngOnChanges(){
    this.photos.push(this.photos[0]);
    this.photos.push(this.photos[0]);
  }
  next() {
    this.slickModal1.slickNext();
  }

  prev() {
    this.slickModal1.slickPrev();
  }


}
