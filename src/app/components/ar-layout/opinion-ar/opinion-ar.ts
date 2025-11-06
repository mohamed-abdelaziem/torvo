import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-opinion-ar',
  imports: [CarouselModule],
  templateUrl: './opinion-ar.html',
  styleUrl: './opinion-ar.css',
})
export class OpinionAr {



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
    responsive: {
      0: {
        items: 1,
        margin : 0 ,
        dots : false,
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
        items: 4 , 
        margin : 20
      }
    },
    nav: false
  }

}
