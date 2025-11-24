import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-ar',
  imports: [CarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})



export class CarouselAr {

 customOptions: OwlOptions = {
    loop: true,
    lazyLoad : true ,
    autoplayHoverPause : true ,
    mouseDrag: true,
    autoplay : true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsData:false ,
    autoplaySpeed : 500 ,
    navSpeed: 1000,
        navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ], 
    responsive: {
      0: {
        items: 1,
        margin : 0 ,
      },
      400: {
        items: 1 ,
        margin : 10,
      },
      740: {
        items: 4,
        margin : 20 ,
      },
      940: {
        items: 6 , 
        margin : 20
      }
    },
    nav: true
  }


}
