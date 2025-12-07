/// <reference types="../../../../../@types/jquery" />
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-ar',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeAr {
ngAfterViewInit(): void {
$(function(){
  $(".loader").fadeOut(2000,function(){
    $('.loading').slideUp(2000,function(){
      $('body').css({'overflow-y' : 'auto'});
    })
  })
})
}

}
