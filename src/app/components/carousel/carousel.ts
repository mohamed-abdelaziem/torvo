import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  imports: [CarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})



export class Carousel {

 customOptions: OwlOptions = {
    loop: true,
    lazyLoad : true ,
    autoplayHoverPause : true ,
    mouseDrag: true,
    autoplay : true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplaySpeed : 500 ,
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        margin : 0 ,
      },
      400: {
        items: 2 ,
        margin : 10,
      },
      740: {
        items: 3,
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
