import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-opinion',
  imports: [CarouselModule],
  templateUrl: './opinion.html',
  styleUrl: './opinion.css',
})
export class Opinion {
  
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
    navText : [
      '<i class="fa fa-chevron-left text-white bg-transparent mt-2 font-semibold"></i>',
    '<i class="fa fa-chevron-right text-white bg-transparent mt-2 font-semibold"></i>'
    ],
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
        items: 4,
        margin : 20 ,
      },
      940: {
        items: 4 , 
        margin : 20
      }
    },
    nav: true
  }

}
